// import 'react-native-gresture-handler';
import React from 'react';
import {ContextController} from './globalState';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ContextController>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#333'},
            headerTitleStyle: {color: '#f1f1f1'},
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home"
            options={{
              title: 'Hangman',
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Game"
            options={{title: 'Hangman'}}
            component={GameScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextController>
  );
};

export default App;
