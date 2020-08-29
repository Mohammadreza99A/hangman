import React, {useState, useEffect} from 'react';
import randomWords from 'random-words';

export const Context = React.createContext();

export const ContextController = ({children}) => {
  let intialState = {
    selectedWord: null,
    wrongLetters: [],
    correctLetters: [],
    playable: true,
    msg: null,
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    setState({...state, selectedWord: randomWords()});
  }, [setState]);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
