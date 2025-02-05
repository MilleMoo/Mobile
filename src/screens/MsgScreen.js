import React ,{useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput,FlatList} from 'react-native';
import MyButton from "../components/MyButton";
import MsgBox from "../components/MsgBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@cards_data"

const MsgScreen = () => {
    const [InputTitle, setInputTitle] = useState("");
    const [InputContent, setInputContent] = useState("");
    const [cards, setCards] = useState([]);
    const addMsg = async () => {
        const newMsg = { id: Date.now().toString(), InputTitle, InputContent }
        const updatedCards = [newMsg, ...cards];
        setCards(updatedCards);
        setInputTitle("")
        setInputContent("")
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
        } catch (error) {
            console.error("Error: ", error)
        }
    };
    const loadCards = async () => {
        try {
            const initCards = await AsyncStorage.getItem(STORAGE_KEY)
            if (initCards) {
                setCards(JSON.parse(initCards));
                }
        } catch (error) {
            console.error("Failed to load data : ", error)
        }
    };
    const clearCards = async () => {
        try {
            await AsyncStorage.clear();
            console.log("All cards has been cleared");
            setCards([]);
        } catch {
            console.error("Error: ", error);
        }
    };
    useEffect(() => {
        loadCards();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={{
                alignItems: "flex-start",
                width: "100%",
                textTransform: "uppercase",
                fontWeight: "bold",
                padding: 5,
            }}>Messge Screen</Text>
            <View style = {styles.Header}>
                <TextInput
                    placeholder="Input Title"
                    style={styles.InTitle}
                    value={InputTitle}
                    onChangeText={setInputTitle}
            />
            </View>
            <View style={styles.Header}>
            <TextInput
                    placeholder="Input Content"
                    style={styles.InContent}
                    value={InputContent}
                    onChangeText={setInputContent}
                />
            </View>
            <View style = {styles.BTSize}>
                <MyButton title={"เพิ่มข้อความ"} onPress={addMsg} backgroundColor={"green"}/>
            </View>
            <View style = {styles.BTSize}>
                <MyButton title={"Clear"} onPress={clearCards} backgroundColor={"red"}/>
            </View>
            <View style = {{ width : 400,}}>
                <FlatList
                    data={cards}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MsgBox InputContent={item.InputContent} InputTitle={item.InputTitle}/>
                    )}
                    />
                    </View>
                    <Text style = {styles.TextStyle}>tt</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
    },
    InTitle: {
        borderColor: "black",  // Changed from borderBlockColor
        borderWidth: 2,
        borderRadius: 5,
        textAlign: "center",
    },
    Header: {
        width: "100%",
        height: "7%",
    },
    InContent: {
        borderColor: "black",  // Changed from borderBlockColor
        borderWidth: 2,
        borderRadius: 5,
        textAlign: "center",
    },
    BTSize: {
        width: 200,
        height: 50,
    },
    Overall: {
        borderRadius: 20,
        borderColor: "black",  // Changed from borderBlockColor
        borderWidth: 1,
        shadowColor: "black",
        width: "100%",
        height: "14%",
    },
    OvHeader: {
        padding: 10,
        fontWeight: "bold",
    },
    OvContent: {
        paddingLeft: 15,
    },
});

export default MsgScreen;