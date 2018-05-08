import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import FlexBoxTest from './FlexBoxTest';
import TouchableTest from './TouchableTest';
import HelloWorldApp from './HelloWorldApp';
import FetchNetData from './FetchNetData';
import MainPage from './MainPage';
import ScrollViewTest from './ScrollViewTest';
import ListViewTest from './ListViewTest';

export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListViewTest/>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    }
});