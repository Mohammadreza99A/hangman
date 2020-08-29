import React from 'react';
import {ContextController} from './globalState';

// Components
import {Header} from 'react-native-elements';
import HomeScreen from './components/HomeScreen';

const App = () => {
  return (
    <ContextController>
      <Header
        backgroundColor="#333"
        centerComponent={{
          text: 'Hangman',
          style: {color: '#f1f1f1', fontSize: 23},
        }}
      />
      <HomeScreen />
    </ContextController>
  );
};

export default App;
