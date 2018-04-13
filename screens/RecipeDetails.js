import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class RecipeDetails extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Det 1</Text>
                <Text>Det 2</Text>
                <Text>Det 3</Text>
                <Text>Det 4</Text>
                <Text>Det 5</Text>
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