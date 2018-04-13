import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends React.Component {
    goToRecipeList = () => {
        this.props.navigation.navigate('RecipesList');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Dinner Ideas'} onPress={() => this.goToRecipeList()} />
                <Button title={'Food Ideas'} onPress={() => this.goToRecipeList()} />
                <Button title={'Breakfast Ideas'} onPress={() => this.goToRecipeList()} />
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
