import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { StyleSheet, Text, View ,Image, Button, Alert, TouchableOpacity} from 'react-native';

const initialState = {count : 0}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
}

const CountState = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
//   const [counter1, setCounter] = useState(0);
//   const [counter2, setCounter1] = useState(0);
return (
    <View style={styles.container}>
        <Text style = {styles.text}>
            {state.count}
        </Text>
        <View style = {styles.button}>
            <Button
                title='Increase'
                onPress={() => dispatch({type: "INCREMENT"})}
                />
            <Button
                title='Decrease' color= "red"
                onPress={() => dispatch({type: "DECREMENT"})}
                />
            <Button
                title='Reset' color= "grey"
                onPress={() => dispatch({type: "RESET"})}
            />
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
    fontSize: 250,
  },
  ImageStyle: {
          width: 150,
          height: 150,
          padding: 5,
          margin: 5,
          borderRadius: 50,
          borderWidth: 5,
          borderColor: 'black'
    },
    button: {
        width: 250,
        gap: 5,
    }
});

export default CountState;