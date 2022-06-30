import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import UserList from "./components/userlist";
import UserDetail from "./components/userdetail";
import PostsList from "./components/postlist.js";
import PostDetail from "./components/postdetail.js";
import Comments from "./components/comments";
import Albums from "./components/albumslist";
import Photos from "./components/photos";
import Todo from "./components/todolist";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  const [userList, setUserList] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => setUserList(response.data));
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => setPosts(response.data));
    axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => setAlbums(response.data));
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => setPhotos(response.data));
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => setTodo(response.data));
  }, []);

  const BottomPanel = () => {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "#3D1273",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Users" options={{ headerShown: false }}>
          {(props) => <UserList {...props} users={userList} />}
        </Tab.Screen>
        <Tab.Screen name="Posts" options={{ headerShown: false }}>
          {(props) => <PostsList {...props} data={posts} />}
        </Tab.Screen>
        <Tab.Screen name="Albums" options={{ headerShown: false }}>
          {(props) => <Albums {...props} data={albums} />}
        </Tab.Screen>
        <Tab.Screen name="ToDos" options={{ headerShown: false }}>
          {(props) => <Todo {...props} data={todo} />}
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
        {posts?.map((post) => {
          return (
            <Stack.Screen key={post.id} name={`${post.id}${post.title.replace(/ /g, "-").split(0, 24)[0]}`}>
              {(props) => <PostDetail {...props} data={post} />}
            </Stack.Screen>
          );
        })}
        <Stack.Screen name="Photos">{(props) => <Photos {...props} data={photos} />}</Stack.Screen>
        <Stack.Screen name="Comments">{(props) => <Comments {...props} navigation={navigation} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
