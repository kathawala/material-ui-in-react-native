import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyFriends from './MyFriends';
import Profile from './Profile';
import MenuIcon from './components/MenuIcon';
import MenuContent from './components/MenuContent';
import {Provider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import {combineThemes} from './theme';

export default function App() {
  const Drawer = createDrawerNavigator();
  const colorScheme = useColorScheme() as 'light' | 'dark';
  const theme = combineThemes(colorScheme);
  return (
    <SafeAreaProvider>
      <Provider theme={theme as ReactNativePaper.Theme}>
        <NavigationContainer theme={theme as Theme}>
          <Drawer.Navigator
            screenOptions={{headerShown: true, headerLeft: () => <MenuIcon />}}
            drawerContent={(props) => <MenuContent {...props} />}
          >
            <Drawer.Screen name='My Friends' component={MyFriends} />
            <Drawer.Screen name='Profile' component={Profile} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaProvider>
  );
}
