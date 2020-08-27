import React, { useEffect, useContext, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import WordInput from './WordInput';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import EndGameModal from './EndGameModal';
import { checkWin } from './helpers/helpers';
import { Context } from '../context';

toast.configure();
const Index = () => {
  const [state, setState] = useContext(Context);
  const { correctLetters, wrongLetters, selectedWord } = state;
  const toastRef = useRef(null);

  const sendNotification = (msg) => {
    if (!toast.isActive(toastRef.current)) {
      toastRef.current = toast.error(msg);
    }
  };

  useEffect(() => {
    if (selectedWord) {
      const checkWinStatus = checkWin(
        correctLetters,
        wrongLetters,
        selectedWord
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
          msg: `You Lost. Correct Word: ${selectedWord}`,
        });
      }
    }

    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setState({
              ...state,
              correctLetters: [...correctLetters, letter],
            });
          } else {
            sendNotification('You have already entered this letter');
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setState({
              ...state,
              wrongLetters: [...wrongLetters, letter],
            });
          } else {
            sendNotification('You have already entered this letter');
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up so we dont have lots of eventListenner
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWord, correctLetters, wrongLetters]);

  return (
    <div className="container text-center mt-5">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <WordInput />
      <EndGameModal />
      <div className="row m-5">
        <div className="col-sm-6 mb-5">
          <Figure />
        </div>
        <div className="col-sm-6 mb-5">
          <WrongLetters />
        </div>
      </div>
    </div>
  );
};

export default Index;
