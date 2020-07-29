import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./components/Header";
import StartGameScreeen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setguessRounds(0);
    setuserNumber(null);
  };
  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
    setguessRounds(0);
  };
  const gameOverHandler = (numOfRounds) => {
    setguessRounds(numOfRounds);
  };
  let content = <StartGameScreeen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        restartgame={configureNewGameHandler}
        numberOfRounds={guessRounds}
        userNumber={userNumber}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="GUESS A NUMBER" />
      <ScrollView>{content}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
  },
});
