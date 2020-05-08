import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Add from './pages/Add';

const AppStack = createStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="Add" component={Add}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
