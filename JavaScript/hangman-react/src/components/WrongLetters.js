import React, { useContext } from 'react';
import { Context } from '../context';

const WrongLetters = () => {
  const [state] = useContext(Context);
  const { wrongLetters } = state;

  return (
    <>
      <h3>Wrong Letters</h3>
      <div className="d-flex justify-content-center">
        {wrongLetters.length === 0 && <p>No Wrong Letter</p>}
        {wrongLetters.map((letter) => (
          <h6 className="letter">{letter}</h6>
        ))}
      </div>
    </>
  );
};

export default WrongLetters;
