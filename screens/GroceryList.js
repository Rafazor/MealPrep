import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class GroceryList extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Grocery 1</Text>
                <Text>Grocery 2</Text>
                <Text>Grocery 3</Text>
                <Text>Grocery 4</Text>
                <Text>Grocery 5</Text>
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
