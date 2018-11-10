/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, Dimensions, StyleSheet, Image, Text, View } from 'react-native';

export default class App extends Component<Props> {
    render() {
        return (
            <Home/>
        );
    }
}

let WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rectangle: {
        width: WIDTH,
        height: 200,
        backgroundColor: 111,
    },
});
