/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

class GiftExchangeApp extends Component {
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
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+zip+'&appid=b47febbd05f86228d33ea45ca54af0c2&units=metric')
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    forecast: {
                        main: responseJSON.weather[0].main,
                        description: responseJSON.weather[0].description,
                        temp: responseJSON.main.temp,
                    }
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />

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
        backgroundColor: '#4D4D4D',
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
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

class Forecast extends Component {
    render() {
        return (
            <View>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current Conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}F
                </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('GiftExchangeApp', () => GiftExchangeApp);
