import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import DraggableFlatList from "react-native-draggable-flatlist";

const NewListScreen = () => {
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
  };
  const renderItem = ({ item, drag, isActive }) => (
    <View
      style={[
        styles.listItem,
        { backgroundColor: isActive ? "#f0f0f0" : "#fff" },
      ]}
    >
      <Text style={styles.TextStyle} onLongPress={drag}>
        {item.text} T_T
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onDragEnd={({ data }) => setListData(data)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 28,
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
    fontWeight: "bold",
  },
});

export default NewListScreen;
