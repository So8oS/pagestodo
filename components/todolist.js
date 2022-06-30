import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const TodoList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text>{item.id}</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <Text style={{ fontSize: 24 }}>{item.title}</Text>
      <Text style={{ fontSize: 16 }}>Status: {item.completed ? "Completed" : "Incomplete"}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.page}>Todo List</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  page: {
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 30,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    padding: 20,
  },
  item: {
    width: "100%",
    backgroundColor: "black",
    marginTop: 30,
    fontSize: 18,
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 30,
    paddingLeft: 15,
  },
});
