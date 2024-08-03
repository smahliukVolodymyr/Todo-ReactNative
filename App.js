import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import CustomButton from "./components/CustomButton";
import GoalsList from "./components/GoalsList";

const arrayOfObjects = [
  {
    text: "Покращити навички програмування",
    id: Math.random().toString(),
  },
  {
    text: "Вивчити нову мову програмування",
    id: Math.random().toString(),
  },
  {
    text: "Завершити проект у строк",
    id: Math.random().toString(),
  },
  {
    text: "Оптимізувати код існуючого проекту",
    id: Math.random().toString(),
  },
  {
    text: "Підвищити рівень знань у веб-розробці",
    id: Math.random().toString(),
  },
  {
    text: "Вивчити нові технології фронтенду",
    id: Math.random().toString(),
  },
  {
    text: "Поліпшити навички роботи з базами даних",
    id: Math.random().toString(),
  },
  {
    text: "Створити власний блог",
    id: Math.random().toString(),
  },
  {
    text: "Покращити продуктивність коду",
    id: Math.random().toString(),
  },
  {
    text: "Знайти нові цікаві проекти для співпраці",
    id: Math.random().toString(),
  },
];

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState(arrayOfObjects);
  // const [courseGoals, setCourseGoals] = useState([]);

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
