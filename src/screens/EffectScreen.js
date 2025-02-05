import React ,{ useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const EffectScreen = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setUsers(data);
                console.log(users);
            } catch (error) {
                console.log("error: ", error);
            }
        };

        loadUsers();
    }, [])    
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => <Text style={styles.TextStyle}>
                    {item.name} [{item.email}]
                </Text>}
            />
            <Text style = {styles.TextStyle}>Learn useEffect</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 15,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "baseline",
        padding: 20,
    }
});

export default EffectScreen;