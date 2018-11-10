/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
        <View style = { styles.container }>
            <View style = { styles.navBar }>
                <Image source={require('./assets/bookmark.png')} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 3
    },
});
