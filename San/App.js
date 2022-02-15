import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Settings from './src/Settings';
import Profile from './src/Profile';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/Home';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Sıgnup from './src/Sıgnup';
import Stm from './Stm';



const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
              
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Sıgnup' component={Sıgnup} />
            </Stack.Navigator>
           
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    mytext: {
        color: 'white',
        fontSize: 40
    }
})
export default App;