import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import List from './pages/List';
import History from './pages/History';
import Phone from './pages/Phone';
import AddList from './pages/AddList';
import AddStatus from './pages/AddStatus';

const AppStack = createStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="List" component={List}/>
                <AppStack.Screen name="History" component={History}/>
                {/* <AppStack.Screen name="Phone" component={Phone}/> */}

                <AppStack.Screen name="AddList" component={AddList}/>
                <AppStack.Screen name="AddStatus" component={AddStatus}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
