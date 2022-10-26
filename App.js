import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './src/pages/InitialPage';
import Selection from './src/pages/Selecting';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Code from './src/pages/Code';
import InitialMenu from './src/pages/InitialMenu';
import OtherFindCollection from "./src/pages/OtherFindCollection"
import FindCollection from "./src/pages/FindCollection"
import Map from "./src/pages/Map"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Map"
        >
       {/*  <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="InitialMenu" component={InitialMenu} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="OtherFindCollection" component={OtherFindCollection} />
        <Stack.Screen name="FindCollection" component={FindCollection} /> */}
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;