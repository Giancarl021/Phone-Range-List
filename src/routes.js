import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import AddList from './pages/AddList';
import List from './pages/List';

const AppStack = createStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="AddList" component={AddList}/>
                <AppStack.Screen name="List" component={List}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
