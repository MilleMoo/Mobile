import React, {useState} from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SwipeListView } from "react-native-swipe-list-view";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, Modal} from "react-native";

const ListScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [friends, setListData] = useState([
        { id: 1, name: 'Mom', status: "Mobile", time: "Sunday" },
        { id: 2, name: 'DadB', status: "Phone", time: "Yesterday" },
        { id: 3, name: 'mobile', status: "Mobile", time: "Sunday" },
        { id: 4, name: 'DadD', status: "Phone", time: "Sunday" },
        { id: 5, name: 'has', status: "Mobile", time: "Yesterday" },
        { id: 6, name: 'DadF', status: "Phone", time: "Friday" },
        { id: 7, name: 'eles', status: "Mobile", time: "Yesterday" },
        { id: 8, name: 'DadH', status: "Phone", time: "Friday" },
    ])
    const deleteItem = (id) => {
        const newList = friends.filter((item) => item.id !== id);
        setListData(newList);
    };
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 50,
                fontWeight: "bold",
                margin: 10,
                color: "#F3FCFF",
                width: "100%",
            }}>Recent</Text>

            <SwipeListView
                data={friends}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            setIsVisible(true);
                            setSelectedItem(item);
                        }}>
                            <View style={{
                                margin: 0,
                                borderColor: "white",
                                backgroundColor: "black",
                                borderWidth: 1,
                                width: "100%",
                                flexDirection: "row",
                                padding: 20,
                                paddingLeft: 15,
                            }}>
                                <Image source={{ uri: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/66bb7142277fc/clean.jpg" }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 100,
                                        borderWidth: 2,
                                        borderColor: 'white',
                                    }} />
                                <View style={{
                                    paddingRight: "50%",
                                    marginLeft: 15,
                                    paddingRight: 100,
                                    width: "62%"
                                }}>
                                    <Text style={{
                                        fontSize: 25,
                                        textAlign: "left",
                                        color: "#F3FCFF",
                                        marginBottom: 5,
                                    }}>{item.name}</Text>
                                    <Text style={{ fontSize: 15, color: "gray" }}>{item.status}</Text>
                                </View>
                                <View style={{ padding: 10, paddingTop: 20, width: 90 }}>
                                    <Text style={{ textAlign: 'right', fontSize: 15, color: "#F3FCFF" }}>{item.time}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                renderHiddenItem={({ item }) => (
                    <TouchableOpacity style={styles.actionButton} onPress={() => deleteItem(item.id)}>
                        <Text style={styles.actionText}>ลบทิ้ง</Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-100}
                onSwipeValueChange={(swipeData) => {
                    const { key, value } = swipeData;
                    value < -300 ? deleteItem(parseInt(key)) : null;
                }}
            />

            <Modal
                transparent={true}
                animationType="none"
                onRequestClose={() => setIsVisible(false)}
                visible={isVisible}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    height: "100%",
                }}>
                    <View style={{
                        width: "70%",
                        height: "70%",
                        padding: 20,
                        alignItems: "center",
                    }}>
                        <Image source={{ uri: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/66bb7142277fc/clean.jpg" }}
                            style={{
                                width: 250,
                                height: 250,
                                borderRadius: 200,
                                borderWidth: 2,
                                borderColor: 'white',
                                marginTop: 90,
                            }} />
                        <Text style={{
                            width: "100%",
                            marginLeft: 20,
                            fontSize: 40,
                            textAlign: "center",
                            color: "#F3FCFF",
                            marginBottom: 5,
                            fontWeight: "bold",
                        }}>{selectedItem?.name}</Text>
                        <Text style={{
                            width: "100%",
                            fontSize: 20,
                            textAlign: "center",
                            color: "#F3FCFF",
                            marginBottom: 30,
                        }}>is calling...</Text>
                        <TouchableOpacity
                            style={styles.IconButton}
                            onPress={() => setIsVisible(false)}>
                            <View style={{
                                backgroundColor: "red",
                                borderRadius: 50,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                            }}>
                                <Icon name="call-end" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
        textAlign : "center",
        color: "black",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "black",
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

export default ListScreen;