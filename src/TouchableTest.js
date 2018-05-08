import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';

export default class TouchableTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({count: this.state.count + 1})
                    }}
                    onLongPress={() => {
                        Alert.alert('提示长按', '确认删除啊？', [
                            {
                                text: '取消', onPress: () => {
                                }, style: 'cancel'
                            },
                            {
                                text: '确定', onPress: () => {
                                }
                            },
                        ])
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>我是TouchableWithoutFeedback，单击我</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight
                    style={styles.button}
                    activeOpacity={0.7}
                    underlayColor='green'
                    onHideUnderlay={() => {
                        this.setState({text: '衬底被隐藏'})
                    }}
                    onShowUnderlay={() => {
                        this.setState({text: '衬底显示'})
                    }}
                    onPress={() => {

                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                    activeOpacity={0.2}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback onPress={() => {
                    this.setState({count: this.state.count + 1})
                }}
                                         background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.button}>
                        <Text>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.button} onPress={() => {
                    this.setState({count: this.state.count + 1})
                }}>Text也可以当按钮</Text>
                <Text style={styles.text}>{this.state.text}</Text>
                <Text style={styles.text}>您点击了：{this.state.count}次</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    button: {borderColor: 'red', borderWidth: 1, borderRadius: 5, height: 50},
    buttonText: {fontSize: 18,},
    text: {
        fontSize: 20
    }
});