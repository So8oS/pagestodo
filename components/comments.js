import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import React, { useEffect } from "react";
import axios from "axios";

const Comments = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setData(res.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text>{item.id}</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <Text style={{ fontSize: 24 }}>By: {item.name}</Text>
      <Text style={{ fontSize: 16, marginVertical: 15 }}>Email: {item.email}</Text>
      <Text style={{ fontSize: 16 }}>Comment: {item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments List</Text>
      <FlatList style={{ width: "100%" }} data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
