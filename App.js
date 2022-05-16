import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

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
      <UserList users={userList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
