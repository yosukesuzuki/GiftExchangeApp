/**
 * Created by suzukiyosuke on 5/4/16.
 */

import React from 'react-native'
const {
    Component,
    View,
    Text,
    NavigatorIOS,
} = React;

import styles from './styles'
import Emoji from 'react-native-emoji'
import SelectNumber from './selectnumber'
import NameForm from './form'

export default class GiftExchangeApp extends Component {
    render() {
        return (
            <View style={styles.navigation}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        <Emoji name="gift" />Gift Exchange App
                    </Text>
                </View>
                <NavigatorIOS
                    style={styles.navigation}
                    initialRoute={{
                    title: 'Select Number',
                    component: SelectNumber,
                    passProps: {number: 6},
                    }}
                    renderScene={this.navigatorRenderScene}/>
            </View>
        );
    }
}