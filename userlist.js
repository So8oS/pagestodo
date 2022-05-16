import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { Button } from "react-native-elements";

const UserList = ({ users, navigation }) => {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      buttonStyle={{
        width: "100%",
        justifyContent: "flex-start",
        backgroundColor: "Black",
      }}
      containerStyle={styles.item}
      onPress={() => navigation.navigate(`${item.id}${item.name.replace(/ /g, "/")}`)}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.page}>User List Page</Text>
      <FlatList data={users} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};
export default UserList;

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
    fontSize: 12,
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 30,
    paddingLeft: 15,
  },
});
