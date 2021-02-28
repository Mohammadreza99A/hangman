package hangman.tool;

import javafx.scene.image.Image;

import java.io.InputStream;
import java.net.URL;

public final class ResourceTool {
    public static URL load(String name) {
        return ResourceTool.class.getResource(name);
    }

    public static InputStream loadAsStream(String name) {
        return ResourceTool.class.getResourceAsStream(name);
    }

    public static String getPath(String name) {
        return load(name).getPath();
    }

    public static String getExternalForm(String name) {
        return load(name).toExternalForm();
    }

    public static Image loadImage(String name) {
        return new Image(loadAsStream(name));
    }

    public static Image loadImage(String name, double width, double height) {
        return new Image(loadAsStream(name), width, height, true, true);
    }
}
