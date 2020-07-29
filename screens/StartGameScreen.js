import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

const StartGameScreen = (props) => {
  const [enteredValue, setenteredValue] = useState("");
  const [confirmed, setconfirmed] = useState(false);
  const [selectedNumber, setselectedNumber] = useState("");
  const [buttonStatus, setbuttonStatus] = useState(false);
  const numberInputHandler = (val) => {
    setenteredValue(val.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setenteredValue("");
    setconfirmed(false);
    setselectedNumber("");
    setbuttonStatus(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "OK",
            onPress: resetInputHandler,
            style: "destructive",
          },
        ],
        { cancelable: false }
      );
      return;
    }
    setconfirmed(true);
    setselectedNumber(chosenNumber);
    setbuttonStatus(true);
    setenteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.startGameCard}>
        <Text style={styles.chosenNumberHeader}>You Selected</Text>
        <View style={styles.chosenNumberDiv}>
          <Text style={styles.chosenNumber}>{selectedNumber}</Text>
        </View>
        <Button
          onPress={() => props.onStartGame(selectedNumber)}
          title="Start Game"
        />
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={{ fontSize: 25 }}>Start A New Game</Text>
        <View style={styles.mainCard}>
          <Text style={{ color: "white", fontSize: 20 }}>Select A Number</Text>
          <TextInput
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            placeholder="Enter a number"
            maxLength={2}
            style={styles.TextInput}
            onChangeText={(val) => numberInputHandler(val)}
            value={enteredValue}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                onPress={() => resetInputHandler(Keyboard.dismiss())}
                title="RESET"
              />
            </View>
            <View style={styles.button}>
              <Button
                color="#0C090A"
                title="Confirm"
                onPress={confirmInputHandler}
                disabled={buttonStatus}
              />
            </View>
          </View>
        </View>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  mainCard: {
    width: "80%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#0C090A",
    borderRadius: 10,
    padding: 60,
  },
  TextInput: {
    color: "white",
    padding: 12,
    marginVertical: 23,
    borderWidth: 1,
    borderColor: "#FEFCFF",
    textAlign: "center",
    width: "80%",
    borderRadius: 6,
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
  },
  startGameCard: {
    width: "80%",
    height: 180,
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#0C090A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  chosenNumberHeader: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  chosenNumberDiv: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 13,
    paddingHorizontal: 22,
    marginBottom: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  chosenNumber: {
    fontSize: 15,
    color: "white",
  },
});
