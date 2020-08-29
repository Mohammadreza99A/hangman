import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import Figure from './Figure';
import {Button, Badge} from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Badge
        status="warning"
        value="Find the hidden word before it's too late"
        badgeStyle={styles.bdg}
        textStyle={styles.bdgText}
      />
      <Figure />
      <Button buttonStyle={styles.btn} title="Press to Play" />
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
  btn: {
    paddingHorizontal: 50,
    borderRadius: 15,
    backgroundColor: 'slateblue',
  },
  bdg: {
    paddingHorizontal: 10,
    marginVertical: 15,
    paddingVertical: 25,
  },
  bdgText: {
    fontSize: 20,
  },
});

export default HomeScreen;
