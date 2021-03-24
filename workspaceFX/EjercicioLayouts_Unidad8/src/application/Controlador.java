package application;

import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.FXML;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.Separator;
import javafx.scene.control.ToggleGroup;

public class Controlador {

	@FXML
	private ResourceBundle resources;

	@FXML
	private URL location;

	@FXML
	private ToggleGroup sexo;
	
	@FXML
	 private ChoiceBox<Object> ChoiceBox;

	@FXML
	void initialize() {
		assert sexo != null : "fx:id=\"sexo\" was not injected: check your FXML file 'MainLayouts.fxml'.";
		ChoiceBox.getItems().addAll("New York", "Orlando",new Separator(), "London","Manchester"); 
	}
}