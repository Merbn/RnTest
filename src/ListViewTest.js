/**
 *Created by merbng on
 *Function:
 *Desc:
 */
import React, {Component} from 'react';
import {ListView, RefreshControl, Text, ToastAndroid} from 'react-native';
import VideoListItem from './VideoListItem';
//视频地址，下一页链接会在json中一起返回
const videoUrl = 'http://baobab.wandoujia.com/api/v1/feed?num=1';

export default class ListViewTest extends Component {
    constructor(props) {
        super(props);
        /*使用DataSource作为listView的数据源
        * 该构造函数接收四个参数
        * getRowData(dataBlob,sectionID,rowID)
        * getSectionHearderData(dataBlob,sectionID)
        * rowHasChanged(prevRowData,nextRowData)
        * sectionHearderHasChanged(prevSectionData,nextSectionData)
        * */
        let defaultDS = new ListView.DataSource(
            //指定更新row数据的策略，一般都是判断前后两行不相等的时候进行更新
            {rowHasChanged: (prevRowData, nextRowData) => prevRowData !== nextRowData}
        );
        this.state = {
            dataSource: defaultDS,
            data: [],
            nextPageUrl: '',
            isRefreshing: false,
        }
    }

    //渲染视图
    render() {
        return (
            this._renderList()
        )
    }

    //渲染列表
    _renderList() {
        if (this.state.data) {
            //通过解构赋值
            const {
                onScroll = () => {
                }
            } = this.props;
            return (
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId) => this._renderList(rowData, rowId)}
                    enableEmptySections={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this._fetchVideoList}
                        />}
                    renderScrollComponent={props => {

                    }}
                > </ListView>
            );
        } else {
            return (
                <Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>加载中...</Text>
            )
        }
    }

//渲染列表项
    _renderRow(rowData, rowId) {
        return <VideoListItem
            onItemClick={() => this._onItemClick(rowData, rowId)}
            imgUrl={rowData.coverForFeed}
            title={rowData.title}/>
    }

    //处理列表item的点击事件
    _onItemClick(rowData, rowId) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({})
        }
    }

    //发起网络请求，获取数据
    _fetchVideoList() {
        fetch(videoUrl)
            .then((response) => response.json())
            .then(
                (responseJson) => {
                    let videos = responseJson.dailyList[0].videoList;
                    let nextPage = responseJson.nextPageUrl;
                    ToastAndroid.show("网络请求完成", ToastAndroid.SHORT)
                    console.log(videos);
                    console.log("下一页：" + nextPage);
                    this.setState({
                        data: videos,
                        nextPageUrl: nextPage,
                        isRefreshing: false,
                    });
                }
            )
            .catch(error => {
                console.error(error);
                this.setState({
                    isRefreshing: false,
                });
            })
    }
}