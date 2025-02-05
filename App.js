import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MsgScreen from "./src/screens/MsgScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ModalScreen from "./src/screens/ModalScreen";
import SwipeScreen from "./src/screens/SwipeScreen";
import NewListScreen from "./src/screens/NewListScreen";
import MyButton from "./src/components/MyButton";
import CardScreen from "./src/screens/CardScreen";
import EffectScreen from "./src/screens/EffectScreen";
import CountState from "./src/screens/CountState";
import RegisForm from "./src/screens/RegisFrom";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomeScreen" }}
        />
        <Stack.Screen
          name="Component"
          component={ComponentScreen}
          options={{ title: "ComponentScreen" }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "ListScreen" }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ title: "ModalScreen" }}
        />
        <Stack.Screen
          name="Swipe"
          component={SwipeScreen}
          options={{ title: "SwipeScreen" }}
        />
        <Stack.Screen
          name="NewList"
          component={NewListScreen}
          options={{ title: "NewListScreen" }}
        />
        <Stack.Screen
          name="MyButton"
          component={MyButton}
          options={{ title: "MyButton" }}
        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{ title: "CardScreen" }}
        />
        <Stack.Screen
          name="Effect"
          component={EffectScreen}
          options={{ title: "EffectScreen" }}
        />
        <Stack.Screen
          name="Msg"
          component={MsgScreen}
          options={{ title: "MsgScreen" }}
        />
        <Stack.Screen
          name="Count"
          component={CountState}
          options={{ title: "CountState" }}
        />
        <Stack.Screen
          name="Regis"
          component={RegisForm}
          options={{ title: "RegisForm" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
