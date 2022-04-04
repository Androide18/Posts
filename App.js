import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UsersScreen from "./screens/Users";

function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>Hola desde React Native :) </Text>
      <StatusBar style="auto" />
    </View>
  );
}
function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Hola desde React Native :) </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
}, {
  initialRouteName: 'Users',
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
