/**
 * Created by suzukiyosuke on 5/3/16.
 */
import React from 'react-native'

const {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View
} = React;

export class GiftExchangeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: props.initialZip,
            forecast: props.initialForecast
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        console.log(event.nativeEvent.text);

        this.setState({
            zip: event.nativeEvent.text
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>
                <TextInput style={styles.input}
                           onSubmitEditing={this.handleTextChange}/>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

GiftExchangeApp.defaultProps = {
    initialZip: '',
    initialForecast: {
        main: 'clouds',
        description: 'few clouds',
        temp: 45.7
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
