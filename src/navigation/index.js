import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllMovies from '../screens/AllMovies';
import MyMovies from '../screens/MyMovies';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

const RootNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="AllMovies" component={AllMovies} />
            <Stack.Screen name="MyMovies" component={MyMovies} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    )
}
export default RootNav;