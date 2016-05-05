/**
 * Created by suzukiyosuke on 5/4/16.
 */

import React from 'react-native'
const {
    Component,
    View,
    Text,
    Navigator,
} = React;

import styles from './styles'
import SelectNumber from './selectnumber'

export default class GiftExchangeApp extends Component {
    render() {
        return (
            <View style={styles.navigation}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        Gift Exchange App
                    </Text>
                </View>
                <Navigator
                    style={styles.navigation}
                    initialRoute={{id: 'selectnumber'}}
                    renderScene={this.navigatorRenderScene}/>
            </View>
        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'selectnumber':
                return (<SelectNumber navigator={navigator} title="selectnumber"/>);
        }
    }
}