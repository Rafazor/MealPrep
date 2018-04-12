import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {

    componentDidMount() {
        fetch('https://parseapi.back4app.com/classes/recipes', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-Parse-Application-Id': 'Ye6h65aZgGpHnha9EdBaZGnNc3WbgXkLGyu5v3KH',
                'X-Parse-REST-API-Key': '47BTLQqnXvRMn37KeoMmWw5dQ8WIezpwIaILj7mI'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.results);
                return responseJson.results;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
