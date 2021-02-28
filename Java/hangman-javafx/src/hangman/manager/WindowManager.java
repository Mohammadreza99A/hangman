package hangman.manager;

import hangman.tool.FXMLTool;
import hangman.tool.ResourceTool;
import javafx.application.Platform;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public final class WindowManager {
    private static Stage stage;

    private static Scene scene = new Scene(new Pane());

    private static List<Parent> pages = new ArrayList<>();

    private static void init() {

        stage.setHeight(600);
        stage.setWidth(800);

        stage.setTitle("Hangman - JavaFX");

        stage.setResizable(false);

        stage.setScene(scene);

        scene.setOnKeyPressed(keyEvent -> {
            if (keyEvent.getCode() != KeyCode.ESCAPE) return;

            pop();
        });

        scene.getStylesheets().add(ResourceTool.getExternalForm("/style/style.css"));

        stage.show();
    }

    public static void register(Stage stage) {
        if (WindowManager.stage != null)
            throw new IllegalStateException("A Stage is already registered");

        WindowManager.stage = stage;

        init();
    }

    public static void push(String name) {
        final FXMLLoader fxmlLoader = FXMLTool.load(name);

        try {
            final Parent parent = fxmlLoader.load();

            pages.add(parent);

            scene.setRoot(parent);
        } catch (IOException e) {
            e.printStackTrace();
            Platform.exit();
        }
    }

    public static void pop() {
        if (pages.size() <= 1) return;

        pages.remove(pages.size() - 1);

        scene.setRoot(pages.get(pages.size() - 1));
    }
}
