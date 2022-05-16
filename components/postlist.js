import { FlatList, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import React, { useLayoutEffect } from "react";

const PostsList = ({ navigation, data }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Posts",
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      buttonStyle={{
        backgroundColor: "black",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      containerStyle={styles.item}
      onPress={() => navigation.navigate(`${item.id}${item.title.replace(/ /g, "-").split(0, 24)[0]}`)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts List</Text>
      <FlatList style={{ width: "100%" }} data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default PostsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 30,
    alignSelf: "center",
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
