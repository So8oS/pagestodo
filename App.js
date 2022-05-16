import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import UserList from "./userlist";
import UserDetail from "./userdetail";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userList, setUserList] = useState([]);
  const [UserPost, setUserPost] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       console.log(users);
  //       setUserList(users);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => setUserList(response.data));
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => setUserPost(response.data));
  }, []);

  const BottomPanel = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#3D1273",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Users" options={{ headerShown: false }}>
          {(props) => <UserList {...props} users={userList} />}
        </Tab.Screen>

        <Tab.Screen name="Posts" options={{ headerShown: false }}>
          {(props) => <PostList {...props} users={posts} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomPanel" component={BottomPanel} options={{ headerShown: false }} />

        {userList?.map((user) => {
          return (
            <Stack.Screen key={user.id} name={`${user.id}${user.name.replace(/ /g, "/")}`}>
              {(props) => <UserDetail {...props} users={user} />}
            </Stack.Screen>
          );
        })}

        {/* {UserPost.map((post) => {
          return (
            <Stack.Screen key={post.id} name={`${post.id}${post.title.replace(/ /g, "/")`}>
              {(props) => <PostDetail {...props} users={post} />}
            </Stack.Screen>
          );
        })} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
