import React, { useContext } from 'react';
import { Context } from '../context';

const WordInput = () => {
  const [state] = useContext(Context);
  const { selectedWord, correctLetters } = state;

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
