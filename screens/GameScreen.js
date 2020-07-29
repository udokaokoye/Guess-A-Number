import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setcurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setrounds] = useState(0);
  const currrentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (
      currentGuess === userChoice ||
      isNaN(currentGuess) ||
      currentGuess == null ||
      currentGuess == ""
    ) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nexGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < props.userChoice) ||
      (direction == "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currrentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currrentLow.current,
      currentHigh.current,
      currentGuess
    );
    setcurrentGuess(nextNumber);
    setrounds((curRounds) => curRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.startGameCard}>
        <Text style={styles.textHeader}>Opponents Guess</Text>

        <View style={styles.NumberDiv}>
          <Text style={styles.text}>{currentGuess}</Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <TouchableOpacity onPress={nexGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={39} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={nexGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={39} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  startGameCard: {
    width: "80%",
    height: "auto",
    padding: 10,
    backgroundColor: "#0C090A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textHeader: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  NumberDiv: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 13,
    paddingHorizontal: 22,
    marginBottom: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: "white",
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    padding: 10,
  },
});
