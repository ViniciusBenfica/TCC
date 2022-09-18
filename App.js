import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './src/pages/InitialPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={InitialPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;