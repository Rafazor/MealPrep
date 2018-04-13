import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends React.Component {
    goToRecipeList = () => {
        this.props.navigation.navigate('RecipesList');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Breakfast Ideas'} onPress={() => this.goToRecipeList()} />
                <Button title={'Lunch Ideas'} onPress={() => this.goToRecipeList()} />
                <Button title={'Dinner Ideas'} onPress={() => this.goToRecipeList()} />
                <Button title={'Smoothies Ideas'} onPress={() => this.goToRecipeList()} />
                <Button title={'Snacks Ideas'} onPress={() => this.goToRecipeList()} />
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
