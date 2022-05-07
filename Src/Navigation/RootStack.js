import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GridView from '../Screeens/GridView';
import ListScreen from '../Screeens/ListScreen';
import SplashScreen from '../Screeens/SplashScreen';

const Stack = createNativeStackNavigator();

const RootStack = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                animation: "slide_from_right",
                headerShown: false
            }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="GridView" component={GridView} />
            <Stack.Screen name="ListScreen" component={ListScreen} />
        </Stack.Navigator>
    );
};
export default RootStack;
