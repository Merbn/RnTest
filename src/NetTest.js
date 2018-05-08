/**
 *Created by merbng on
 *Function:
 *Desc:
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Text, View} from 'react-native';

var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
const styles = StyleSheet.create({
    constructor: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
    },
    thumbnail: {width: 100, height: 80},
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20, marginBottom: 8, textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },

});

class NetTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        };
    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    fetchData() {
        fetch(REQUEST_URL, {method: 'GET'})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                });
            })
            .catch((error) => {
                callback(error);
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载数据中。。。。
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }

}

AppRegistry.registerComponent('NetTest', () => NetTest);
