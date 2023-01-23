import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation/Navigation';

const MovieApp = () => {
    return (
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
    );
}

export default MovieApp;