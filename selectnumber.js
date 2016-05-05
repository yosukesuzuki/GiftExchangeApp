/**
 * Created by suzukiyosuke on 5/5/16.
 */
import React from 'react-native'
const {
    Component,
    Text,
    View,
} = React;

import styles from './styles';

export default class SelectNumber extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Select Number of people
                </Text>
            </View>
        );
    }
}
