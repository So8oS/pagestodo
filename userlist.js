import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Button } from "react-native-elements";

const UserList = ({ users }) => {
  const renderItem = ({ item }) => <Button color="transparent" title={item.name} />;

  return (
    <View style={styles.container}>
      <FlatList data={users} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};
export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  button: {
    color: "#white",
  },
});
