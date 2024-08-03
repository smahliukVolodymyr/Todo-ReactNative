import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import CustomButton from "./components/CustomButton";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandler = (goalInput) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: goalInput,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <CustomButton toggleModal={startAddGoalHandler} />
        <GoalInput
          addGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />

        <GoalsList
          courseGoals={courseGoals}
          deleteGoalHandler={deleteGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
