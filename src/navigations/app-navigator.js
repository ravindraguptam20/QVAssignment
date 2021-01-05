import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ApprovedFoodsScreen from '../scenes/approvedFoods/approvedFoodsScreen';
import HomeScreen from '../scenes/home/homeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name = "home" component = {HomeScreen} />
        <Stack.Screen name = "approvedFoods" component = {ApprovedFoodsScreen} 
            options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default AppNavigator;