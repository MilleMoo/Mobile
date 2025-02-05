import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const MsgBox = ({InputTitle, InputContent}) => {
    return (
        <View style = {styles.Overall}>
                        <Text style={styles.OvHeader}>{InputTitle}</Text>
                        <Text style={styles.OvContent}>{InputContent}</Text>
                    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#959d90",
        borderRadius: 10,
        alignItems: "center",
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: "#efefe9",
        fontWeight: "bold"
    },
    Overall: {
        borderRadius: 20,
        borderColor: "black",  // Fixed invalid borderBlockColor
        borderWidth: 1,
        shadowColor: "black",
        marginBottom: 10,  // Added margin for spacing between items
        padding: 10,
    },
    OvHeader: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    OvContent: {
        paddingLeft : 15,
    }
    
});

export default MsgBox;