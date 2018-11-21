import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, View } from 'react-native';

let WIDTH = Dimensions.get('window');

class Card extends Component {
  render() {
    return (
        <View style = { styles.card } >
            <View style = { styles.inner } >
                <View style = { styles.image } >
                    <Text style = { styles.image }> Image </Text>
                </View>
                <View>
                    <Text style = { styles.title }> Lorem ipsum dolor sit amet </Text>
                </View>
                <View>
                    <Text style = { styles.excerpt }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc finibus sapien a aliquet iaculis. Proin tempor magna at purus sodales, et ullamcorper
                    eros viverra. Suspendisse potenti.</Text>
                </View>
                <View style = { styles.footer }>
                    <View style = { styles.favorite }>
                        <Text style = { styles.favorite }> Favorite </Text>
                    </View>
                    <View style = { styles.bookmark }>
                        <Text style = { styles.bookmark }> Bookmark </Text>
                    </View>
                    <View style = { styles.share }>
                        <Text style = { styles.share }> Share </Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
    card: {
        backgroundColor: "#f9f9f9"
    },
    inner: {
        backgroundColor: "#001F54",
    },
    image: {
        backgroundColor: "#034078",
        padding: 10,
        minHeight: 150,
        textAlign: "center",
        color: "#FEFCFB",
        fontSize: 72,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: "#FEFCFB",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: "#1282A2"
    },
    excerpt: {
        fontSize: 16,
        color: "#FEFCFB",
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 5
    },
    footer: {
        flexDirection: "row",
        height: 35,
        backgroundColor: "#1282A2",
        paddingTop: 10
    },
    favorite: {
        flex: 1,
        color: "#FEFCFB",
        justifyContent: "center",
        alignItems: "center"
    },
    bookmark: {
        flex: 1,
        color: "#FEFCFB",
        justifyContent: "center",
        alignItems: "center"
    },
    share: {
        flex: 1,
        color: "#FEFCFB",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Card;

AppRegistry.registerComponent('Card', () => Card);
