import GoalItem from "./GoalItem";
import { View, FlatList, StyleSheet } from "react-native";

function GoalsList({ courseGoals, deleteGoalHandler }) {
  return (
    <View style={styles.itemsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem goal={itemData.item} onDeleteItem={deleteGoalHandler} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default GoalsList;

const styles = StyleSheet.create({
  itemsContainer: {
    height: "92%",
    marginTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
