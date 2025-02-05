import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
    const msg = <Text>Hello wrold</Text>;
    return (
        <View style={styles.container}>
            <Text style={styles.TextStyle}>this is the Component Screen</Text>
            { msg }
        </View>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ComponentScreen;