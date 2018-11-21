/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Container from './components/Container';
import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <View style = { styles.container }>
                <Header />
                <Container />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'powderblue'
    }
})

AppRegistry.registerComponent('FeedReader', () => FeedReader);
