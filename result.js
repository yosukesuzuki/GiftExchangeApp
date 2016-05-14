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
import shuffle from './utils'


export default class Result extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            results: this.props.results,
        };

    }

    componentDidMount() {
        this._refreshData();
    }

    _refreshData() {
        const number = this.props.results.length;
        const array = shuffle(this.props.results);
        let dsArray = [];
        for (let i = 0; i < number; i++) {
            let to_index = i + 1;
            if (to_index == number) {
                to_index = 0;
            }
            dsArray.push({from: array[i], to: array[to_index]})
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dsArray),
            results: dsArray
        });
    }

    renderRow(rowData) {
        return (
            <View>
                <View style={styles.listFrom}>
                    <Text style={styles.listNum}>
                        {rowData.from.num}
                    </Text>
                    <Text style={styles.listNum}>
                        <Emoji name={rowData.from.animal}/>
                    </Text>
                    <Text style={styles.listText}>
                        {rowData.from.name}
                    </Text>
                </View>
                <View style={styles.listTo}>
                    <Text style={styles.listNum}>
                        <Emoji name='arrow_right'/>
                    </Text>
                    <Text style={styles.listNum}>
                        {rowData.to.num}
                    </Text>
                    <Text style={styles.listNum}>
                        <Emoji name={rowData.to.animal}/>
                    </Text>
                    <Text style={styles.listText}>
                        {rowData.to.name}
                    </Text>
                </View>
            </View>
        )
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
            </View>
        );
    }
}

