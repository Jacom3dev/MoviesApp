import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Home,Detail } from '../screens';
import { Movie } from '../interfaces/movie.interface';

export type RooStackParams = {
  Home: undefined;
  Detail: Movie
}
export const Navigation = () => {
  const Stack = createStackNavigator<RooStackParams>();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
