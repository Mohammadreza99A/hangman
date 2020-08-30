import React, {useContext, useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context} from '../globalState';
import {useFocusEffect} from '@react-navigation/native';

// Components
import Figure from './Figure';
import {Button} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const [state, setState] = useContext(Context);

  useFocusEffect(
    useCallback(() => {
      setState({
        selectedWord: null,
        wrongLetters: [1, 2, 3, 4, 5, 6],
        correctLetters: [],
        playable: true,
        msg: null,
      });
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Find the hidden word before it's too late !
      </Text>
      <Figure />
      <Button
        titleStyle={styles.btnText}
        buttonStyle={styles.btn}
        title="Press to Play"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#333',
    color: '#f1f1f1',
  },
  text: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 20,
    color: '#f1f1f1',
    padding: 15,
    textAlign: 'center',
    backgroundColor: 'slateblue',
  },
  btn: {
    paddingHorizontal: 50,
    borderRadius: 15,
    backgroundColor: 'slateblue',
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'SourceCodePro-Bold',
  },
});

export default HomeScreen;
