package hangman.model;

import hangman.data.Words;

import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

public class Word {

    private static final int NUMBER_OF_TRIES = 6;
    public static final int GAME_WON = 1;
    public static final int GAME_NOT_OVER = 0;
    public static final int GAME_LOST = -1;
    private String word = Words.WORDS[
        ThreadLocalRandom.current().nextInt(0, Words.WORDS.length + 1)]
        .toLowerCase(Locale.ROOT
    );
    private final Set<Character> correctGuessedLetters = new HashSet<>();
    private final Set<Character> wrongGuessedLetters = new HashSet<>();


    public Word() { }

    /**
     * @param letter character that needs to be analysed
     * Checks if letter is in word and if it is, we add letter to list of correctly guessed letters
     * If letter does not exist in word, we add it to wrong guessed letter list
     */
    public void analyseLetter(Character letter) {
        if (word.indexOf(letter) != -1) this.correctGuessedLetters.add(letter);
        else this.wrongGuessedLetters.add(letter);
    }

    /**
     * @return -1 if player has lost the game
     *          0 if the game is not over
     *          1 if player has won
     */
    public int checkGameOver() {
       if (wrongGuessedLetters.size() == NUMBER_OF_TRIES) return GAME_LOST;
        for (int i = 0; i < this.word.length(); i++) {
            if (!correctGuessedLetters.contains(this.word.charAt(i)))
                return GAME_NOT_OVER;
        }
       return GAME_WON;
    }

    public void changeWord() {
        this.word = Words.WORDS[
            ThreadLocalRandom.current().nextInt(0, Words.WORDS.length + 1)]
            .toLowerCase(Locale.ROOT
        );
        this.correctGuessedLetters.clear();
        this.wrongGuessedLetters.clear();
    }

    public String getWord() { return word; }

    public Set<Character> getCorrectGuessedLetters() { return correctGuessedLetters; }

    public Set<Character> getWrongGuessedLetters() { return wrongGuessedLetters; }

    @Override
    public String toString() {
        return "Word{" +
                "word='" + word + '\'' +
                '}';
    }
}
