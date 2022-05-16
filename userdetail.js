import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

const UserDetail = (users) => {
  <View style={styles.container}>
    <Text style={styles.title}>{data?.name}</Text>
    <View style={styles.box}>
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
  </View>;
};
