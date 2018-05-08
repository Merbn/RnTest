/**
 *Created by merbng on
 *Function:
 *Desc:
 */
import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <Text style={{color:'red'}}>Hello World!</Text>
        );
    }
}
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
