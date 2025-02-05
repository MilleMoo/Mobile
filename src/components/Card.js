import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';

const Card = ({ title, content, backgroundColor, image }) => {
    return (
        <View style = {styles.container}>
                    <View style = {styles.card}>
                <Image source={{ uri: image }} style = {styles.HeroImg}></Image>
                        <Text style = {styles.Header}>
                        {title}
                        </Text>
                        <Text style = {styles.textstory}>
                        {content}
                        </Text>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor : "black"
    },
    card: {
        backgroundColor: "white",
        margin: 20,
        padding: 10,
        shadowOffset: 22,
        shadowRadius: 20,
        elevation: 20,
    },
    Header: {
        fontWeight: "bold",
        fontSize: 20,
    },
    HeroImg:{
        width: "100%",
        height: 400
    },
    textstory: {
        textAlign: "justify"
    }
});

export default Card;