package hangman.controller;

import hangman.model.Word;
import hangman.tool.ResourceTool;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.TextAlignment;

import java.net.URL;
import java.util.Locale;
import java.util.ResourceBundle;

public class GameController implements Initializable {

    @FXML
    private ImageView hangmanImageView;
    @FXML
    private Label gameOverStatus;
    @FXML
    private VBox wrongLettersVBox;
    @FXML
    private HBox lettersHBox;

    private final Word hiddenWord = new Word();
    String hiddenWordStr = hiddenWord.getWord();

    private static final double LETTER_LABEL_WIDTH = 21.0;
    private static final double LETTER_FONT_SIZE = 20.0;
    private static final String UNDERLINE_STYLE =
            """
                -fx-border-color: white;\s
                -fx-border-width: 0 0 2 0, 0 0 2 0, 0 0 2 0;\s
            """;

    @FXML
    private void updateHiddenWordHBox() {
        hiddenWordStr = hiddenWord.getWord();
        lettersHBox.getChildren().clear();
        for (int i = 0; i < hiddenWordStr.length(); i++) {
            Label lLabel = new Label();
            lLabel.setMaxWidth(LETTER_LABEL_WIDTH);
            lLabel.setPrefWidth(LETTER_LABEL_WIDTH);
            lLabel.setAlignment(Pos.CENTER);
            lLabel.setStyle(UNDERLINE_STYLE);
            if (hiddenWord.getCorrectGuessedLetters().contains(hiddenWordStr.charAt(i)))
                lLabel.setText(String.valueOf(hiddenWordStr.charAt(i)));
            else
                lLabel.setText(" ");
            lLabel.setFont(Font.font("System", FontWeight.BOLD,LETTER_FONT_SIZE));
            lettersHBox.getChildren().add(lLabel);
        }
    }

    @FXML
    private void updateWrongLettersVBox () {
        wrongLettersVBox.getChildren().clear();
        for (char wrongLetter: hiddenWord.getWrongGuessedLetters()) {
            Label wlLabel = new Label();
            wlLabel.setText(String.valueOf(wrongLetter));
            wlLabel.setTextAlignment(TextAlignment.CENTER);
            wlLabel.setStyle(UNDERLINE_STYLE);
            wlLabel.setFont(Font.font("System", FontWeight.BOLD,LETTER_FONT_SIZE));
            wrongLettersVBox.getChildren().add(wlLabel);
        }
    }

    @FXML
    private void updateHangmanImageView() {
        Image hangmanImg = ResourceTool.loadImage("/images/" + hiddenWord.getWrongGuessedLetters().size() + ".png");
        hangmanImageView.setImage(hangmanImg);
    }

    @FXML
    private void changeWordButtonClicked() {
        hiddenWord.changeWord();
        updateHiddenWordHBox();
        updateWrongLettersVBox();
        updateHangmanImageView();
        gameOverStatus.setVisible(false);
    }

    @FXML
    private void handleKeyPressed(KeyEvent keyEvent) {
        if (keyEvent.getCode().isLetterKey() && hiddenWord.checkGameOver() == Word.GAME_NOT_OVER){
            hiddenWord.analyseLetter(keyEvent.getText().toLowerCase(Locale.ROOT).charAt(0));
            updateHiddenWordHBox();
            updateWrongLettersVBox();
            updateHangmanImageView();
            if (hiddenWord.checkGameOver() == Word.GAME_WON) {
                gameOverStatus.setText("You have won!");
                gameOverStatus.setVisible(true);
            } else if (hiddenWord.checkGameOver() == Word.GAME_LOST) {
                gameOverStatus.setText("You have lost! Hidden word was " + hiddenWord.getWord().toUpperCase());
                gameOverStatus.setVisible(true);
            }
        }
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        updateHiddenWordHBox();
        updateHangmanImageView();
    }
}
