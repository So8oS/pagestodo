import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text, Divider } from "react-native-elements";

const PostDetail = ({ navigation, data }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Posts",
      headerTitle: "Post",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.box}>
        <Text style={styles.desc}>{data.body}</Text>
      </View>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    padding: 20,
  },
});
