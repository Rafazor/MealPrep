import React from 'react';
import {StyleSheet, ScrollView, Button} from 'react-native';
import { ListItem} from 'react-native-elements';

export default class RecipesList extends React.Component {
    goToRecipeDetails = () => {
        this.props.navigation.navigate('RecipeDetails');
    };

    render() {
        let list =[
            {
                name: 'Recipe 1',
            },
            {
                name: 'Recipe 2',
            },
            {
                name: 'Recipe 3',
            },
            {
                name: 'Recipe 4'
            },
            {
                name: 'Recipe 5',
            },
            {
                name: 'Recipe 6',
            },
            {
                name: 'Recipe 7',
            },
            {
                name: 'Recipe 8',
            },
            {
                name: 'Recipe 9',
            },
            {
                name: 'Recipe 10',
            },
            {
                name: 'Recipe 11',
            },
            {
                name: 'Recipe 12',
            },
            {
                name: 'Recipe 13',
            },
            {
                name: 'Recipe 14',
            },
            {
                name: 'Recipe 15',
            },
            {
                name: 'Recipe 16',
            }
        ]
        return (
            <ScrollView >
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            onPress={() => this.goToRecipeDetails()}
                        />
                    ))

                }
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
});