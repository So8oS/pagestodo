import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

const UserDetail = ({ users, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Users",
      headerTitle: users.name,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{users.name}</Text>
      <View style={styles.inside}>
        <Text style={styles.title}>Name:</Text>
        <Text style={styles.info}>{users.name}</Text>
        <Text style={styles.title}>Email:</Text>
        <Text style={styles.info}>{users.email}</Text>
        <Text style={styles.title}>Phone:</Text>
        <Text style={styles.info}>{users.phone}</Text>
        <Text style={styles.title}>Website:</Text>
        <Text style={styles.info}>{users.website}</Text>
        <Text style={styles.title}>users:</Text>
        <Text style={styles.info}>
          {users.address.city}, {users.address.street}, {users.address.suite}
        </Text>
      </View>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    padding: 20,
  },

  inside: {
    width: "95%",
    fontSize: 12,
    paddingVertical: 10,
    padding: 20,
    backgroundColor: "rgba(30, 31, 32, 0.25)",
    borderRadius: 8,
    marginTop: 30,
    justifyContent: "flex-start",
  },
  main: {
    alignSelf: "baseline",
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
  info: {
    color: "#FFF",
    fontSize: 14,
    alignSelf: "baseline",
    borderBottomColor: "#00F0FF",
    marginBottom: 8,
  },
});
