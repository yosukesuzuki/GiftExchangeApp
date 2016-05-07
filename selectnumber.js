/**
 * Created by suzukiyosuke on 5/5/16.
 */
import React from 'react-native'
const {
    Component,
    Text,
    View,
    Picker,
    TouchableHighlight,
} = React;

import styles from './styles';

export default class SelectNumber extends Component {
    onPress() {
        console.log('pressed');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Select number of people
                </Text>
                <NumberItems/>
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

class NumberItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '6',
        }
    }

    render() {
        let numbers = [];
        for (let i = 3; i < 31; i++) {
            numbers.push(String(i))
        }
        return (
            <View>
                <Picker style={styles.pickerContainer}
                        itemStyle={styles.pickerItem}
                        selectedValue={this.state.number}
                        onValueChange={(num) => this.setState({number:num})}>
                    {numbers.map(function (result) {
                        return <Picker.Item label={result} value={result} key={result}/>
                    })}
                </Picker>
            </View>
        )
    }
}
