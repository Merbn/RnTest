import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class FlexBoxTest extends Component {
    render() {
        return (
            <View style={{flexDirection:'column',backgroundColor: 'darkgray', marginTop: 20,flexWrap:'wrap',alignItems:'stretch',borderWidth:1,borderColor:'red'}}>
                <View style={{width: 100, height: 40,backgroundColor: 'darkcyan', margin: 5,paddingRight:10,paddingLeft:10}}>
                    <View style={{flex:1,backgroundColor:'red'}}></View>
                </View>
                <View style={{width: 100, height: 40, backgroundColor: 'darkcyan', margin: 5,flex:0}}>
                    <Text style={{fontSize: 16}}>2</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: 'darkcyan', margin: 5}}>
                    <Text style={{fontSize: 16}}>3</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: 'darkcyan', margin: 5}}>
                    <Text style={{fontSize: 16}}>4</Text>
                </View>
            </View>
        )
    }
}