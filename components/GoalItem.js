import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function GoalItem({ goal, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}> {goal.text}</Text>
      <Pressable onPress={onDeleteItem.bind(this, goal.id)}>
        <Image
          source={require("../assets/images/trash.png")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 5,
    backgroundColor: "#009FBD",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 6,
  },
  goalText: {
    lineHeight: 25,
    width: 240,
    padding: 8,
    fontSize: 18,
    color: "#F6F5F5",
  },

  image: {
    width: 30,
    height: 30,
  },
});
