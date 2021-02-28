module hangman.javafx {
    requires javafx.graphics;
    requires javafx.fxml;
    requires javafx.controls;

    requires org.controlsfx.controls;

    opens hangman.main;
    opens hangman.controller to javafx.fxml;
}