import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";
import UserList from "./userlist";

export default function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUserList(users);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Pages To do</Text>
      <UserList users={userList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
