import { FlatList, StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import React, { useEffect, useLayoutEffect, useState } from 'react';

const AlbumList = ({ route, navigation, data }) => {
  const { id } = route.params;
  const [dataToRender, setDataToRender] = useState(data);

  useEffect(() => {
    if (data) {
      setDataToRender(data.filter((item) => item?.albumId === id));
    }
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Album Photos',
      headerTitle: 'Albums',
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{item.title}</Text>
      <Image
        source={{
          uri: item.url,
          width: 200,
          height: 200,
          flex: 1,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Album Photos</Text>
      <FlatList
        style={{ width: '100%' }}
        data={dataToRender}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 30,
    alignSelf: 'center',
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 20,
    alignSelf: 'center',
  },
});
