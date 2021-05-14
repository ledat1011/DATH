
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground, View } from "react-native";
import { location as local } from "./_helper/location.helper";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home.component";
import ListPost from "./ListPost.component";

const Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer > 

    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen name="ListPost" component={ListPost} />
    </Stack.Navigator>
  </NavigationContainer>
  )
 
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 50,
    flexDirection: "row"

  },
  image: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    marginTop:3
  }
  ,
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  },
  blockUser: {

    marginTop: 10,
    display: "flex",
    width: 200
  }
});

export default App;