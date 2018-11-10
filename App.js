/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, Dimensions, StyleSheet } from 'react-native'; 
import Home from './components/Home';

export default class App extends Component {
    render() {
        return (
            <Home />
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

AppRegistry.registerComponent('feedreader', () => feedreader);
