import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/pic.png")}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>The Game Is Over!</Text>
        <Text style={styles.text}>It Took Your Device</Text>
        <View style={styles.numRounds}>
          <Text style={styles.rounds}>{props.numberOfRounds}</Text>
        </View>
        <Text style={styles.text}>Rounds To Complete The Game</Text>
        <Text style={styles.text}>The Number Was</Text>
        <View style={styles.numRounds}>
          <Text style={styles.rounds}>{props.userNumber}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={props.restartgame}>
          <Text style={styles.text}>ReStart Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    alignItems: "center",
  },
  screen: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    height: "auto",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#0C090A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginVertical: 9,
  },
  numRounds: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 6,
    padding: 10,
    color: "white",
    borderRadius: 10,
  },
  rounds: {
    color: "white",
    zIndex: 20,
  },
  btn: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 15,
    padding: 10,
    marginVertical: 15,
  },
});
