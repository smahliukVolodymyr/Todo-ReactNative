import { View, Pressable, Text, StyleSheet } from "react-native";

function CustomButton({ toggleModal }) {
  return (
    <Pressable
      onPress={toggleModal}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.customButtonContainer}>
        <Text style={styles.customButtonText}>Add New Goal</Text>
      </View>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  customButtonContainer: {
    marginHorizontal: "auto",
    width: "96%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#107956",
  },
  customButtonText: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#F6F5F5",
  },
  pressedItem: {
    borderRadius: 5,
    opacity: 0.5,
  },
});
