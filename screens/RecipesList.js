import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class RecipesList extends React.Component {
    goToRecipeDetails = () => {
        this.props.navigation.navigate('RecipeDetails');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Recipe 1'} onPress={() => this.goToRecipeDetails()}/>
                <Button title={'Recipe 2'} onPress={() => this.goToRecipeDetails()}/>
                <Button title={'Recipe 3'} onPress={() => this.goToRecipeDetails()}/>
                <Button title={'Recipe 4'} onPress={() => this.goToRecipeDetails()}/>
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