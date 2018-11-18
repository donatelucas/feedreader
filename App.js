/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Home from './components/Home';

export default class App extends Component {
    render() {
        return (
            <Home />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('FeedReader', () => App);
