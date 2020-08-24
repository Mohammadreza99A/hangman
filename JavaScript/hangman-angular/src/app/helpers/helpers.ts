export function checkWin(
  correct: string[],
  wrong: string[],
  word: string
): string {
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
}
