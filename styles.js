/**
 * Created by suzukiyosuke on 5/4/16.
 */

import React from 'react-native';
const {StyleSheet} = React;

const baseFontSize = 16;

export default styles = StyleSheet.create({
    navigation: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: '#004358',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
    },
    header: {
        alignItems: 'center',
    },
    headerTitle: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    container: {
        flex: 1,
        padding: 5,
        marginBottom: 5,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    mainText: {
        color: '#000000',
        height: 40,
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 0,
    },
    pickerContainer: {
        flex: 1,
        alignSelf: 'stretch',
        width: 400,
    },
    pickerItem: {
        padding: 40,
        fontSize: 38,
        alignSelf: 'stretch',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#1F8A70',
        borderColor: '#1F8A70',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    listContainer: {
        flex: 1,
        padding: 5,
        marginBottom: 5,
    },
    listStyle: {
        flex: 1,
        paddingTop: 20,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 1,
        padding: 5,
    },
    listFrom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        paddingTop: 5,
        paddingRight: 20,
    },
    listTo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingLeft: 20,
    },
    listNum: {
        flex: 1,
        fontSize: 30,
        alignItems: 'center'
    },
    listText: {
        flex: 5,
        fontSize: 30,
    },
    inputContainer: {
        flex: 5,
    },
    inputText: {
        flex: 1,
        height: 40,
        fontSize: 30,
    }
});
