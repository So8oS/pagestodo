import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import React, { useLayoutEffect } from 'react';

const AlbumList = ({ navigation, data }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Albums',
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      buttonStyle={{
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      containerStyle={styles.item}
      onPress={() => navigation.navigate('Photos', { id: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albums List</Text>
      <FlatList
        style={{ width: '100%' }}
        data={data}
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
    marginTop: 100,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 30,
    alignSelf: 'center',
  },
  item: {
    width: '100%',
    backgroundColor: 'black',
    marginTop: 30,
    fontSize: 12,
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 30,
    paddingLeft: 15,
  },
});
