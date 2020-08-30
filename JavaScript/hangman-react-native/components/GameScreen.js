import React, {useContext, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import randomWords from 'random-words';
import {useFocusEffect} from '@react-navigation/native';
import {Context} from '../globalState';
import {checkWin} from '../helpers/gameHelper';

// Components
import Figure from './Figure';
import Keyboard from './Keyboard';
import {Button} from 'react-native-elements';

const GameScreen = () => {
  const [state, setState] = useContext(Context);

  const changeWord = () => {
    setState({
      selectedWord: randomWords().toLowerCase(),
      wrongLetters: [],
      correctLetters: [],
      playable: true,
      msg: null,
    });
  };

  useFocusEffect(
    useCallback(() => {
      setState({
        selectedWord: randomWords().toLowerCase(),
        wrongLetters: [],
        correctLetters: [],
        playable: true,
        msg: null,
      });
    }, [setState]),
  );

  /**
   * constantly checking to see if user has won ro lost
   */
  useEffect(() => {
    if (state.selectedWord && state.playable) {
      const checkWinStatus = checkWin(
        state.correctLetters,
        state.wrongLetters,
        state.selectedWord,
      );
      if (checkWinStatus === 'win') {
        setState({
          ...state,
          playable: false,
          msg: 'Congratulations, You Have Won!',
        });
      } else if (checkWinStatus === 'lose') {
        setState({
          ...state,
          playable: false,
          msg: `You Have Lost.\n Correct Word:\n ${state.selectedWord.toUpperCase()}`,
        });
      }
    }
  }, [state, setState]);

  /**
   * This function gets the selected letter from Keyboard component and
   * modifies the state accordungly
   * @param letter: selected letter by user
   */
  const inputHandler = (letter) => {
    if (state.selectedWord.includes(letter)) {
      if (!state.correctLetters.includes(letter)) {
        setState({
          ...state,
          correctLetters: [...state.correctLetters, letter],
        });
      }
    } else {
      if (!state.wrongLetters.includes(letter)) {
        setState({
          ...state,
          wrongLetters: [...state.wrongLetters, letter],
        });
      }
    }
  };

  if (state.selectedWord && state.playable) {
    /** game is not over yet */
    return (
      <View style={styles.container}>
        <View style={styles.figureContainer}>
          <Figure />
        </View>
        <View style={styles.lettersContainer}>
          {state.selectedWord.split('').map((letter, i) => {
            return (
              <Text style={styles.letter} key={i}>
                {state.correctLetters.includes(letter) ? letter : ''}
              </Text>
            );
          })}
        </View>
        <Keyboard inputHandler={inputHandler} />
        <Button
          titleStyle={styles.btnText}
          buttonStyle={styles.btn}
          title="Change The Word"
          onPress={changeWord}
        />
      </View>
    );
  } else if (!state.playable) {
    /**game over */
    return (
      <View style={styles.container}>
        <Figure />
        <Text style={styles.msg}>{state.msg}</Text>
        <Button
          titleStyle={styles.btnText}
          buttonStyle={styles.btn}
          title="Play Again"
          onPress={changeWord}
        />
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#333',
    color: '#f1f1f1',
  },
  figureContainer: {
    marginVertical: 25,
  },
  lettersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
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
  msg: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 20,
    color: '#f1f1f1',
    padding: 15,
    textAlign: 'center',
    backgroundColor: 'slateblue',
    lineHeight: 60,
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
