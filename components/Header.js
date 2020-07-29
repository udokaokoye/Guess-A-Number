import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.Headre}>
      <Text style={styles.HeaderTitile}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Headre: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C090A",
  },
  HeaderTitile: {
    fontSize: 18,
    color: "white",
  },
});
