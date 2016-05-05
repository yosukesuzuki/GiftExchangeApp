/**
 * Created by suzukiyosuke on 5/4/16.
 */

import React from 'react-native';
const {StyleSheet} = React;

const baseFontSize = 16;

export default styles = StyleSheet.create({
    navigation: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#D4D4D4'
    },
    header: {
        alignItems: 'center',
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: baseFontSize,
        color: '#000000'
    },
});
