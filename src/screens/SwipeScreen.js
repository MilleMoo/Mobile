import React, { useState } from "react";
import { View, Text, StyleSheet ,Button, TouchableOpacity, ToastAndroid} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const SwipeScreen = () => {
    const [listData, setListData] = useState([
        { id: 1, text: "รายการที่ 1" },
        { id: 2, text: "รายการที่ 2" },
        { id: 3, text: "รายการที่ 3" },
        { id: 4, text: "รายการที่ 4" },
        { id: 5, text: "รายการที่ 5" },
        { id: 6, text: "รายการที่ 6" },
        { id: 7, text: "รายการที่ 7" },
    ]);
    const deleteItem = (id) => {
        const newList = listData.filter((item) => item.id != id);
        setListData(newList);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.TextStyle}>List of Screen</Text>
            <SwipeListView
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listitem}>
                <Text style = {{ fontSize: 24 }}>
                    {item.id} : {item.text}    
                </Text>
                    </View>
                )}
                renderHiddenItem={({ item }) => (
                    <TouchableOpacity style={styles.actionButton}
                        onPress={() => deleteItem(item.id)}
                    >
                        <Text style = {styles.actionText}>ลบทิ้ง</Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-100}
                onSwipeValueChange={(swipeData) => {
                    const { key, value } = swipeData
                    value < -300 ? deleteItem(key) : null;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
    },
    container: {
        padding: 16,
        flex: 1,
    },
    listitem: {
        backgroundColor: "#fff",
        padding: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
        marginBottom: 3,
    },
    actionButton: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
        paddingHorizontal: 20,
    },
    actionText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
});

export default SwipeScreen;