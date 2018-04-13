import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import GroceryList from '../screens/GroceryList';
import RecipesList from '../screens/RecipesList';
import RecipeDetails from '../screens/RecipeDetails';


export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Meal Prep App'
        }
    },
    RecipesList: {
        screen: RecipesList,
        title: 'Dinner List'
    },
    RecipeDetails: {
        screen: RecipeDetails,
        navigationOptions: {
            title: "Cas Pane"
        }
    }
});

export const Tabs = TabNavigator({
    Main: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
        },
    },
    GroceryList: {
        screen: GroceryList,
        navigationOptions: {
            tabBarLabel: 'Grocery List',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        },
    },
});