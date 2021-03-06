export const checkWin = (correct, wrong, word) => {
  let status = 'win';

  // win
  word.split('').forEach((letter) => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  // lost
  if (wrong.length === 6) {
    status = 'lose';
  }
  return status;
};
