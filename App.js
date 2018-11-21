/*  Design colors:
 *
 *  Baby Powder - #FEFCFB
 *  CG Blue - #1282A2
 *  Dark Cerulean - #034078
 *  Oxford Blue - #001F54
 *  Rich Black - #0A1128
 *
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <View style = { styles.container }>
                <Header />
                <Card />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

AppRegistry.registerComponent('FeedReader', () => FeedReader);
