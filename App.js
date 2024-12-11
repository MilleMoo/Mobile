import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Image, Button, Alert, TouchableOpacity} from 'react-native';

export default function App() {
  const [counter1, setCounter] = useState(0);
  const [counter2, setCounter1] = useState(0);
  return (
    <View style={styles.container}>
      <Text style = {{ margin : 10 }}>Carnage score : {counter1}</Text>
      <View style={{ width: 100, height: 50 }}>
        <Button title='Carnage' color={"red"} onPress={() => setCounter(counter1 + 1) || counter1 + 1 == 5? Alert.alert("Results","Carnage win!!!",
        setCounter(counter1 * 0), setCounter1(counter2 * 0)) 
          : setCounter(counter1 + 1)}/>
      </View>
      <View style={styles.ContentGroup}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Welcome","คุณจะเอาเหรอ")}>
        <Image source={{ uri: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/66bb7142277fc/clean.jpg" }}
        style={styles.ImageStyle}></Image>
        </TouchableOpacity>
        <View style={{ padding: 30 }}>
            <Text style={styles.text}>Carnage</Text>
            <Text>by thitirat</Text>
          </View>
      </View>
      <Button title="reset score" color={"gray"} onPress={() => Alert.alert("Score Reset", setCounter(counter1 * 0), setCounter1(counter2 * 0))}/>
      <View style={styles.ContentGroup}>
        <View style={{ padding: 15 }}>
            <Text style={styles.text}>DeadPool</Text>
            <Text>by thitirat</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Welcome", "มาสิครับ") }>
        <Image source={{ uri: "https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/56af74928a161/portrait_uncanny.jpg" }}
        style={styles.ImageStyle}></Image>
        </TouchableOpacity>
      </View>
      <View style = {{ width: 100, height: 50 }}>
        <Button title='DeadPool' color={"red"} onPress={() => setCounter1(counter2 + 1) || counter2 + 1 == 5? Alert.alert("Results","DeadPool win!!!", 
        setCounter(counter1 * 0), setCounter1(counter2 * 0)) 
          : setCounter1(counter2 + 1) } />
      </View>
      <Text style = {{ margin : 10 }}>DeadPool score : {counter2}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6DB1EA',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ContentGroup: {
    backgroundColor: "#4E4EE4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
    borderRadius: 20,
    width: 400,
    height: 200,
  },
  text: {
    fontSize: 32,
  },
  ImageStyle: {
          width: 150,
          height: 150,
          padding: 5,
          margin: 5,
          borderRadius: 50,
          borderWidth: 5,
          borderColor: 'black'
        }
});
