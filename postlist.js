import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const PostList = ({ users, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerBackTitle: "User Post", headerTitle: "User Post" });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{users.title}</Text>
      <View style={styles.inside}>
        <Text style={styles.body}>{users.body}</Text>
      </View>
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {},
});
