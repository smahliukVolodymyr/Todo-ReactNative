import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput({ addGoal, visible, onCancel }) {
  const [goalInput, setGoalInput] = useState("");

  const goalInputHandler = (inputText) => {
    setGoalInput(inputText);
  };
  const addGoalHandler = () => {
    if (goalInput) {
      addGoal(goalInput);
      setGoalInput("");
    }
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="You course goal..."
          style={styles.textInput}
          value={goalInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#c21b6f" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#339977" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4A249D",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#F6F5F5",
    backgroundColor: "#F6F5F5",
    color: "#120438",
    width: "100%",
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 120,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
