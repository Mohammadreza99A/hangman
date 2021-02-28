package hangman.main;
import hangman.manager.WindowManager;
import javafx.application.Application;
import javafx.stage.Stage;

public class App extends Application {
    public static void launchApp(String[] args) { launch(args); }

    @Override
    public void start(Stage stage) {
        WindowManager.register(stage);
        WindowManager.push("home");
    }
}