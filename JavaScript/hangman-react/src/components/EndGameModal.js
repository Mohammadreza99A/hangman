import React, { useContext, useEffect } from 'react';
import randomWords from 'random-words';
import { Context } from '../context';

const EndGameModal = () => {
  const [state, setState] = useContext(Context);
  const { msg, playable } = state;

  const restartTheGame = () => {
    setState({
      selectedWord: randomWords(),
      wrongLetters: [],
      correctLetters: [],
      playable: true,
      msg: null,
    });
  };

  useEffect(() => {
    if (!playable) {
      document.getElementById('endGameModalBtn').click();
    }
  }, [playable]);

  return (
    <>
      <button
        type="button"
        class="d-none"
        data-toggle="modal"
        data-target="#endGameModal"
        id="endGameModalBtn"
      ></button>

      <div
        class="modal fade"
        id="endGameModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Game Over
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">{msg}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-dark"
                onClick={restartTheGame}
                data-dismiss="modal"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndGameModal;
