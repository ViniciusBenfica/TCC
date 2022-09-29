import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './src/pages/InitialPage';
import Selection from './src/pages/Selecting';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Code from './src/pages/Code';
import InitialMenu from './src/pages/InitialMenu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="InitialPage"
        >
        <Stack.Screen name="InitialPage" component={InitialMenu} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;