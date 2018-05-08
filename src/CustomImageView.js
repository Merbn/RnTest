/**
 *Created by merbng on
 *Function:
 *Desc:
 */
import React, {Component} from 'react';
import {requireNativeComponent, View} from 'react-native';

var iface = {
    name: 'CustomImageView',
    propTypes: {
        ...View.propTypes
    }
};
module.exports = requireNativeComponent('CustomImageView', iface);
