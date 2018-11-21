import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

class Container extends Component {
  render() {
    return (
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, leo id pellentesque malesuada, diam ex porttitor metus, vel mollis nunc diam ac enim. Nunc et finibus risus. Maecenas in dolor sed diam eleifend finibus in sit amet quam. Suspendisse ultrices magna egestas, ultricies mi quis, hendrerit lacus. Aenean in commodo odio. Vivamus sed tristique lorem, a sagittis est. Mauris id turpis eu ipsum laoreet ultricies. Pellentesque condimentum mi nisl, eget ultrices neque volutpat quis. Nunc vel orci sed tortor iaculis rhoncus sed fringilla turpis. Duis quis interdum mi, eget pharetra tortor. Quisque sit amet felis eleifend tortor dignissim auctor.</Text>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Container;

AppRegistry.registerComponent('Container', () => Container);
