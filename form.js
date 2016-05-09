/**
 * Created by suzukiyosuke on 5/5/16.
 */
import React from 'react-native'
const {
    Component,
    Image,
    Text,
    TextInput,
    View,
    ListView,
    TouchableHighlight,
    AsyncStorage,
} = React;

import styles from './styles';
import Emoji from 'react-native-emoji'

const STORAGE_KEY_NUMBER_OF_PEOPLE = 'NUMBER_OF_PEOPLE';

const ANIMALS = [
    'mouse',
    'rooster',
    'boar',
    'tiger',
    'leopard',
    'rabbit',
    'sheep',
    'whale',
    'cow',
    'elephant',
    'goat',
    'monkey',
    'octopus',
    'snake',
    'penguin',
    'water_buffalo',
    'fish',
    'horse',
    'camel',
    'dog',
    'koala',
    'dolphin',
    'pig',
    'turtle',
    'tomato',
    'strawberry',
    'grapes',
    'banana',
    'pear',
    'cherries',
    'apple',
];

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            number: 0,
            dataSource: ds.cloneWithRows([]),
        };

    }

    componentDidMount() {
        this._refreshData();
    }

    shuffle() {
        const array = ANIMALS;
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    _refreshData() {
        AsyncStorage.getItem(STORAGE_KEY_NUMBER_OF_PEOPLE, (err, result) => {
            console.log(result);
            const number = parseInt(result, 10);
            this.setState({number: number});
            const animals = this.shuffle();
            let dsArray = [];
            for (let i = 0; i < number; i++) {
                dsArray.push({num: i + 1, name: animals[i]})
            }
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dsArray)
            });
        });
    }

    _renderHeader() {
        <View>
            <Text style={styles.mainText}>
                input name or assign number to people
            </Text>
        </View>
    }

    _renderFooter() {
        <View>
            <Text style={styles.mainText}>
                if complete, then push Next
            </Text>
        </View>
    }
    
    _handleTextChange(event) {
        console.log('changed');
    }

    _renderRow(rowData) {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listNum}>
                    {rowData.num}&nbsp;
                    <Emoji name={rowData.name}/>
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputText}
                               defaultValue={rowData.name}
                    />
                </View>
            </View>
        )
    }

    _onPress() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    input name or assign number to people
                </Text>
                <View>
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                    />
                </View>
                <TouchableHighlight style={styles.button} onPress={() => this._onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

