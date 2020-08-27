import React, { useContext } from 'react';
import { Context } from '../context';
import randomWords from 'random-words';

const WordInput = () => {
  const [state, setState] = useContext(Context);
  const { selectedWord, correctLetters } = state;

  const changeWord = () => {
    setState({
      selectedWord: randomWords(),
      wrongLetters: [],
      correctLetters: [],
      playable: true,
      msg: null,
    });
  };

  if (selectedWord) {
    return (
      <>
        <h3>Enter The Hidden Word</h3>
        <div className="d-flex justify-content-center">
          {selectedWord.split('').map((letter, i) => {
            return (
              <span key={i} className="letter">
                {correctLetters.includes(letter) ? letter : ''}
              </span>
            );
          })}
        </div>
        <button className="btn btn-secondary my-3" onClick={changeWord}>
          Change The Word
        </button>
      </>
    );
  } else {
    return (
      <>
        <h3>Enter The Hidden Word</h3>
        <h6>Hidden word is loading...</h6>
      </>
    );
  }
};

export default WordInput;
