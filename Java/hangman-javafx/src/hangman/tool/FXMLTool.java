package hangman.tool;

import javafx.fxml.FXMLLoader;

import java.net.URL;
import java.util.Locale;
import java.util.ResourceBundle;

public final class FXMLTool {
    private static final String VIEW_DIRECTORY = "/views/";

    public static FXMLLoader load(String name) {
        return load(ResourceTool.load(VIEW_DIRECTORY + name + ".fxml"));
    }

    public static FXMLLoader load(URL url) {
        final FXMLLoader fxmlLoader = new FXMLLoader(url);

        fxmlLoader.setResources(ResourceBundle.getBundle("i18n.i18n", new Locale("en")));

        return fxmlLoader;
    }
}
