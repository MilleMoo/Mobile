import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import MyButton from "../components/MyButton";

const ModalScreen = () => {
  return (
    <View style={style.container}>
      <Text>This is Modal</Text>
      <MyButton></MyButton>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalScreen;
