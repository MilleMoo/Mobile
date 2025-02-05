import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StateScreen = () => {
  const [value, setValue] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <View style={styles.button}>
        <Button
          title="Increase"
          color={"green"}
          onPress={() => {
            // value++; setValue ===value =
            setValue(value + 1);
          }}
        />
        <Button
          title="Decrease"
          color={"red"}
          onPress={() => {
            setValue(value - 1);
          }}
        />
        <Button
          title="Reset"
          color={"blue"}
          onPress={() => {
            setValue(0);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 250,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 250,
    gap: 5,
  },
});
export default StateScreen;
