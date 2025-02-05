import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MyButton from "../components/MyButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 150,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate("ListScreen")}
          color={"red"}
        ></Button>
        <Button
          title="Go to Modal Demo"
          onPress={() => navigation.navigate("Modal")}
          color={"blue"}
        ></Button>
        <Button
          title="Go to Swipe Demo"
          onPress={() => navigation.navigate("Swipe")}
          color={"green"}
        ></Button>
        <Button
          title="Go to NewList Demo"
          onPress={() => navigation.navigate("NewList")}
          color={"green"}
        ></Button>
        <MyButton
          title="ปุ่ม 1"
          onPress={() => alert("ปุ่ม 1 ถูกกด")}
          backgroundColor="#523d35"
        ></MyButton>
        <MyButton
          title="ปุ่ม 2"
          onPress={() => alert("ปุ่ม 2 ถูกกด")}
          backgroundColor="#183d33"
        ></MyButton>
        <MyButton
          title="CardScreen"
          onPress={() => navigation.navigate("Card")}
          backgroundColor="#983d33"
        ></MyButton>
        <MyButton
          title="EffectScreen"
          onPress={() => navigation.navigate("Effect")}
          backgroundColor="#983d33"
        ></MyButton>
        <MyButton
          title="MsgScreen"
          onPress={() => navigation.navigate("Msg")}
          backgroundColor="#983d33"
        ></MyButton>
        <MyButton
          title="CountState"
          onPress={() => navigation.navigate("Count")}
          backgroundColor="#983d33"
        ></MyButton>
        <MyButton
          title="Regis"
          onPress={() => navigation.navigate("Regis")}
          backgroundColor="#983d33"
        ></MyButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});

export default HomeScreen;
