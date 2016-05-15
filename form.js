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
} = React;

import styles from './styles'
import Emoji from 'react-native-emoji'
import Result from './result'
import shuffle from './utils'

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
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            number: number,
            height: height,
            dataSource: ds.cloneWithRows([]),
            results: []
        };
        this._goBackHome = this._goBackHome.bind(this);
    }

    componentDidMount() {
        this._refreshData();
    }

    _shuffle() {
        const array = ANIMALS;
        return shuffle(array);
    }

    _refreshData() {
        const number = this.state.number;
        const animals = this._shuffle();
        let dsArray = [];
        for (let i = 0; i < number; i++) {
            dsArray.push({num: i + 1, name: animals[i], animal: animals[i]})
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dsArray),
            results: dsArray
        });
    }

    _textChangeHandler(text, num) {
        console.log(text);
        console.log(num);
        const number = this.state.number;
        let dsArray = this.state.results;
        for (let i = 0; i < number; i++) {
            if(i+1 == num){
                dsArray[i].name = text.text;
            }
        }
        this.setState({
            results: dsArray,
        });
    }

    renderRow(rowData) {
        const refName = 'name' + rowData.num;
        return (
            <View style={styles.listItem}>
                <Text style={styles.listNum}>
                    {rowData.num}
                </Text>
                <Text style={styles.listNum}>
                    <Emoji name={rowData.animal}/>
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputText}
                               defaultValue={rowData.name}
                               ref={refName}
                               clearButtonMode={'while-editing'}
                               onChangeText={(text) => this._textChangeHandler({text}, rowData.num)}
                    />
                </View>
            </View>
        )
    }    
    
    _goBackHome() {
        this.props.navigator.popN(2);
    }

    _onPress() {
        this.props.navigator.push({
            title: 'Result',
            component: Result,
            passProps: {results: this.state.results},
            rightButtonTitle: 'Home',
            onRightButtonPress: this._goBackHome
        })
    }


    render() {
        return (
            <View style={styles.listContainer}>
                <ListView
                    style={styles.listStyle}
                    initialListSize={this.state.number}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableHighlight style={styles.button} onPress={() => this._onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

