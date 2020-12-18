import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import * as App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import {
  navigationFunctions,
  foo,
  profileButton,
  helloWorld,
} from "../config/utilities";
//import MusherList from "../components/MusherList";
//import tempData from "../config/tempData";
import MyHeader from "../components/MyHeader";

// Initialize firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../config/Fire";
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig); // To not re-make the app every time we save
}
const db = firebase.firestore();

function componentDidMount() {
  firebase = new Fire((error) => {
    if (error) {
      return alert("Something went wrong, you poop");
    }
  });
}

function Mushers() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [mushers, setMushers] = useState([]); // Initial empty array of users
  const navigation = useNavigation();

  useEffect(() => {
    const db = firebase
      .firestore()
      .collection("Mushers")
      .orderBy("firstname")
      .onSnapshot((querySnapshot) => {
        const mushers = [];

        querySnapshot.forEach((documentSnapshot) => {
          mushers.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setMushers(mushers);
        setLoading(false);
        console.log(mushers);
      });

    // Unsubscribe from events when no longer in use
    return () => db();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => {
    function goToMusher() {
      return navigation.navigate("MusherScreen", {
        musherId: item.key,
        musherName: item.firstname,
        musherSurname: item.surname,
      });
    }

    return (
      <TouchableOpacity
        style={{
          height: 50,

          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={goToMusher}
      >
        <ListItem bottomDivider containerStyle={styles.list}>
          <ListItem.Content>
            <ListItem.Title>
              {item.firstname} {item.surname}
            </ListItem.Title>
          </ListItem.Content>
          <View styles={{ alignSelf: "flex-end" }}>
            <ListItem.Chevron />
          </View>
        </ListItem>
      </TouchableOpacity>
    );
  };

  return <FlatList data={mushers} renderItem={renderItem} />;
}

function MusherOverviewScreen({ navigation }) {
  function dogButton() {
    return navigation.navigate("DogOverviewScreen");
  }
  console.log(foo());

  return (
    <SafeAreaView style={styles.container}>
      <MyHeader />

      <Card
        containerStyle={{
          alignItems: "flex-start",
          alignSelf: "center",
        }}
      >
        <View style={styles.cardTitle}>
          <View style={{ flex: 1 }}>
            <Text> </Text>
            <Card.Title> Mushers overview</Card.Title>
          </View>
          <Card.Divider />
          <TouchableOpacity
            style={{ backgroundColor: colors.primary, flex: 1 }}
          >
            <Text onPress={dogButton}> </Text>
            <Card.Title onPress={dogButton}> Dog overview </Card.Title>
          </TouchableOpacity>
        </View>

        <Card.Divider />
        <Mushers />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
    backgroundColor: colors.background,
    paddingBottom: 100,
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
  list: {
    alignSelf: "flex-start",
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

export default MusherOverviewScreen;

//This is a test
db.collection("characters").doc("aaab").set({
  employment: "gorilla",
  outfitColor: "brown",
  specialAttack: "fireball",
});
