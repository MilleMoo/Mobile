import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const MyButton = ({title, onPress, backgroundColor}) => {
    return (
        <View style = {[styles.button, {paddingBottom: 50}]}>
            <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={onPress}>
                <Text style = {styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignItems: "center",
        padding: 9,
        width: "100%",
        height: 50
    },
    text: {
        fontSize: 18,
        color: "#efefe9",
        fontWeight: "bold"
    }
});

export default MyButton;