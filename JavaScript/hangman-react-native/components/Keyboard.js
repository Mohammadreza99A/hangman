import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Context} from '../globalState';

const Keyboard = ({inputHandler}) => {
  const [state] = useContext(Context);

  const keysRow = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    [' ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ' '],
  ];

  const keyPressed = (letter) => {
    inputHandler(letter.toLowerCase()); // in GameScreen component
  };

  return (
    <View style={styles.keyboard}>
      {keysRow.map((keys, rowI) => {
        return (
          <View key={rowI} style={styles.keyboardRow}>
            {keys.map((key, i) => {
              if (key === ' ') {
                return <Text key={i}> </Text>;
              } else if (
                state.correctLetters.includes(key.toLowerCase()) ||
                state.wrongLetters.includes(key.toLowerCase())
              ) {
                return (
                  <View style={styles.keyItem} key={i}>
                    <Text key={i} style={styles.usedKey}>
                      {key}
                    </Text>
                  </View>
                );
              } else {
                return (
                  <TouchableHighlight
                    style={styles.keyItem}
                    key={i}
                    underlayColor="#f1f1f1"
                    onPress={() => keyPressed(key)}>
                    <Text style={styles.letter}>{key}</Text>
                  </TouchableHighlight>
                );
              }
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 2,
  },
  usedKey: {
    fontFamily: 'SourceCodePro-SemiBoldItalic',
    color: 'grey',
    fontSize: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontFamily: 'SourceCodePro-SemiBold',
    color: 'white',
    fontSize: 23,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Keyboard;
