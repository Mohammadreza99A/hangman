import React, {useContext, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import randomWords from 'random-words';
import {useFocusEffect} from '@react-navigation/native';
import {Context} from '../globalState';

// Components
import Figure from './Figure';
import {Button} from 'react-native-elements';

const GameScreen = () => {
  const [state, setState] = useContext(Context);

  const changeWord = () => {
    setState({
      selectedWord: randomWords(),
      wrongLetters: [],
      correctLetters: [],
      playable: true,
      msg: null,
    });
  };

  useFocusEffect(
    useCallback(() => {
      changeWord();
    }, []),
  );

  if (state.selectedWord) {
    return (
      <View style={styles.container}>
        <View style={styles.lettersContainer}>
          {state.selectedWord.split('').map((letter, i) => {
            return (
              <Text style={styles.letter} key={i}>
                {letter}
              </Text>
            );
          })}
        </View>
        <Button
          titleStyle={styles.btnText}
          buttonStyle={styles.btn}
          title="Change The Word"
          onPress={changeWord}
        />
        <Figure />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading the word...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#333',
    color: '#f1f1f1',
  },
  lettersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  letter: {
    borderBottomWidth: 3,
    borderStyle: 'solid',
    borderBottomColor: '#2980b9',
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    color: '#f1f1f1',
    marginVertical: 3,
    marginHorizontal: 5,
    height: 40,
    width: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 20,
    color: '#f1f1f1',
    padding: 15,
    textAlign: 'center',
  },
  btn: {
    paddingHorizontal: 50,
    borderRadius: 15,
    backgroundColor: 'slateblue',
    marginBottom: 20,
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'SourceCodePro-Bold',
  },
});

export default GameScreen;
