import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text, Button } from "react-native-elements";

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
      <Button
        title="View Comments"
        onPress={() => {
          navigation.navigate("Comments", { id: data.id });
        }}
      />
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
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
    textAlign: "center",
  },
  box: {
    width: "100%",
    borderRadius: 8,
    fontSize: 12,
    padding: 20,
    backgroundColor: "rgba(30, 31, 32, 0.25)",
    marginTop: 30,
  },
  desc: {
    lineHeight: 30,
    color: "#FFF",
    fontSize: 16,
  },
});
