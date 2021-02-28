package hangman.controller;

import hangman.manager.WindowManager;
import hangman.tool.ResourceTool;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

import java.net.URL;
import java.util.ResourceBundle;

public class HomeController implements Initializable {
    @FXML
    private ImageView gallowsImageView;

    @FXML
    private void initializeGallowsImageView() {
        Image gallowsImage = ResourceTool.loadImage("/images/gallows.png");
        gallowsImageView.setImage(gallowsImage);
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        initializeGallowsImageView();
    }

    @FXML
    private void playButtonClicked(ActionEvent actionEvent) { WindowManager.push("game"); }
}
