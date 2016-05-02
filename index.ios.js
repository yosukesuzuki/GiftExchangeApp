/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

const icons = [
    'anteater.png',
    'bear.png',
    'buffalo.png',
    'camel.png',
    'chicken.png',
    'cow.png',
    'deer.png',
    'dog.png',
    'dolphin.png',
    'eel.png',
    'elephant.png',
    'fish.png',
    'fox.png',
    'giraffe.png',
    'gorilla.png',
    'hippopotamus.png',
    'horse.png',
    'koala.png',
    'leopard.png',
    'lion.png',
    'monkey.png',
    'mouse.png',
    'pelican.png',
    'pig.png',
    'rabbit.png',
    'raccoon.png',
    'reindeer.png',
    'rhino.png',
    'shark.png',
    'sheep.png',
    'snake.png',
    'squirrel.png',
    'tiger.png',
    'turtle.png',
    'whale.png',
    'zebra.png',
];

class GiftExchangeApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('GiftExchangeApp', () => GiftExchangeApp);
