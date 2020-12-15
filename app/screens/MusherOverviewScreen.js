import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, SearchBar } from "react-native-elements";

import * as App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import {
  navigationFunctions,
  foo,
  profileButton,
  helloWorld,
} from "../config/utilities";
import HelloWorld from "../components/TextArea/TextArea.component";
import Header from "../components/Header/Header.component";
//import tempData from "../config/tempData";

// Initialize firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../config/firebaseConfig";
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig); // To not re-make the app every time we save
}
const db = firebase.firestore();

function Users() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    db.collection("Users").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.forEach((documentSnapshot) => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setUsers(users);
      setLoading(false);
    });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>User ID: {item.key}</Text>
            <Text>User Name: {item.name}</Text>
          </View>
        )}
      />
  );
}

const dataTemp = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
function MusherOverviewScreen2() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView styles={styles.container}>
      <Text> Hello</Text>
      {/* <Flatlist
          data={tempData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              {" "}
              <Text>{item.name}</Text>
            </View>
          )}
        /> */}
      <Card>
        <FlatList
          data={dataTemp}
          renderItem={renderItem}
          showHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <Text> Hallo på do</Text>
        <Users />
      </Card>
    </SafeAreaView>
  );
}

function MusherOverviewScreen({ navigation }) {
  const Separator = () => <View style={styles.separator} />;

  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }
  function dogButton() {
    return navigation.navigate("DogOverviewScreen");
  }
  function profileButton() {
    return navigation.navigate("ProfileScreen");
  }

  console.log(foo());

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HelloWorld />
      <View style={styles.fixToText}>
        <TouchableOpacity onPress={profileButton}>
          <Icon name="user" size={30} color={colors.black} />
        </TouchableOpacity>
        <Button
          buttonStyle={{ backgroundColor: colors.primary }}
          onPress={handleLogOut}
          title="Log out"
        />
      </View>

      <Card
        containerStyle={{
          backgroundColor: colors.primary,
          flex: 0.8,
          width: "80%",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Button title="Dog overview" onPress={dogButton} />
        <Card.Title> Mushers overview</Card.Title>
        <Card.Divider />
        <Text> Here a list of mushers will be provided</Text>
        <Users />
      </Card>
    </SafeAreaView>
  );
}

db.collection("characters")
  .get()
  .then((querySnapshot) => {
    console.log("Total documents: ", querySnapshot.size);

    querySnapshot.forEach((documentSnapshot) => {
      console.log("User ID: ", documentSnapshot.id, documentSnapshot.data());
    });
  });

const styles = StyleSheet.create({
  //   card: {
  //     backgroundColor: colors.primary,
  //     flex: 0.8,
  //     width: "80%",
  //     alignItems: "center",
  //     alignSelf: "center",
  //   },
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
    backgroundColor: colors.white,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.8,
    color: colors.secondary,
  },
  headerSquare: {
    fontSize: 24,
    alignSelf: "center",
  },
  fixToText: {
    flexDirection: "row-reverse",
    //justifyContent: "space-between",
    alignItems: "flex-end",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  squares: {
    width: "80%",
    // height: "50%",
    flex: 1,
    backgroundColor: colors.primary,
  },
  textSquare: {
    color: "#737373",
    alignSelf: "center",
  },
});

export default MusherOverviewScreen2;

//This is a test
db.collection("characters").doc("aaab").set({
  employment: "gorilla",
  outfitColor: "brown",
  specialAttack: "fireball",
});
