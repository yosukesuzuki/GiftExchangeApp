/**
 * Created by suzukiyosuke on 5/5/16.
 */
import React from 'react-native'
const {
    Component,
    Text,
    TextInput,
    View,
    ListView,
    TouchableHighlight,
    AsyncStorage,
    RecyclerViewBackedScrollView,
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
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const number = this.props.number;
        const height = 100 * (number + 1);
        this.state = {
            number: number,
            height: height,
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
        const number = this.state.number;
        const animals = this.shuffle();
        let dsArray = [];
        for (let i = 0; i < number; i++) {
            dsArray.push({num: i + 1, name: animals[i]})
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dsArray)
        });
    }

    _renderRow(rowData) {
        const refName = 'name' + rowData.num
        return (
            <View style={styles.listItem}>
                <Text style={styles.listNum}>
                    {rowData.num}
                </Text>
                <Text style={styles.listNum}>
                    <Emoji name={rowData.name}/>
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputText}
                               defaultValue={rowData.name}
                               ref={refName}
                    />
                </View>
            </View>
        )
    }

    _onPress() {
        console.log('hoge');
    }

    render() {
        return (
            <View style={styles.listContainer}>
                <ListView
                    style={styles.listStyle}
                    initialListSize={this.state.number}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
                <TouchableHighlight style={styles.button} onPress={() => this._onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

