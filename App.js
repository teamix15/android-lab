import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProjectScreen from './src/screens/ProjectScreen';
import SectionScreen from './src/screens/SectionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project" component={ProjectScreen} />
        <Stack.Screen name="Section" component={SectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
