import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import GroceryList from '../screens/GroceryList';

export const Tabs = TabNavigator({
    Main: {
        screen: Home,
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

// export const Root = StackNavigator({
//     Tabs: {
//         screen: Tabs,
//     },
//     Settings: {
//         screen: SettingsStack,
//     },
// }, {
//     mode: 'modal',
//     headerMode: 'none',
// });