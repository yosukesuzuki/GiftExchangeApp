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
    AsyncStorage,
} = React;

import styles from './styles';

const STORAGE_KEY_NUMBER_OF_PEOPLE = 'NUMBER_OF_PEOPLE';

export default class SelectNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 6,
        }
    }

    _handleValueChange(num) {
        this.setState({number: num})
        console.log(num);
    }

    _numberOfPeople() {
        return this.state.number
    }

    _onPress() {
        let number_of_people = this._numberOfPeople();
        console.log(number_of_people + ' is selected');
        AsyncStorage.setItem(STORAGE_KEY_NUMBER_OF_PEOPLE, String(number_of_people))
            .then(() => console.log('saved to disk:'+ number_of_people))
            .catch((error) => console.log('Async Storage error:'+ error.message))
            .done();
    }

    render() {
        let numbers = [];
        for (let i = 3; i < 31; i++) {
            numbers.push(String(i))
        }
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Select number of people
                </Text>
                <View>
                    <Picker style={styles.pickerContainer}
                            itemStyle={styles.pickerItem}
                            selectedValue={this.state.number}
                            onValueChange={(num) => this._handleValueChange(num)}>
                        {numbers.map(function (result) {
                            return <Picker.Item label={result} value={parseInt(result, 10)} key={result}/>
                        })}
                    </Picker>
                </View>
                <TouchableHighlight style={styles.button} onPress={() => this._onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

