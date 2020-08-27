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
        className="d-none"
        data-toggle="modal"
        data-target="#endGameModal"
        id="endGameModalBtn"
      ></button>

      <div
        className="modal fade"
        id="endGameModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Game Over
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{msg}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
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
