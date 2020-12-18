import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, SearchBar, ListItem, Text } from "react-native-elements";

import App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import MyHeader from "../components/MyHeader";

// Initialize firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../config/Fire";
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig); // To not re-make the app every time we save
}
const db = firebase.firestore();

function MusherScreen({ route, navigation }) {
  const { musherId, musherName, musherSurname } = route.params;
  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }
  function profileButton() {
    return navigation.navigate("ProfileScreen");
  }
  console.log("Hei", musherId);
  console.log("Hallo");
  console.log(musherId);

  // Getting data from firestore
  db.collection("Mushers")
    .doc(musherId)
    .collection("Dogs")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [dogs, setDogs] = useState([]); // Initial empty array of dogs
  useEffect(() => {
    const db = firebase
      .firestore()
      .collection("Mushers")
      .doc(musherId)
      .collection("Dogs")
      .orderBy("dogname")
      .onSnapshot((querySnapshot) => {
        const dogs = [];
        querySnapshot.forEach((documentSnapshot) => {
          dogs.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
          // doc.data() is never undefined for query doc snapshots
          console.log(documentSnapshot.id, " => ", documentSnapshot.data());
        });
        setDogs(dogs);
        setLoading(false);
      });
    console.log("Alle hunder2:", dogs);
    // Unsubscribe from events when no longer in use
    return () => db();
  }, []);
  console.log("Alle hunder3:", dogs);

  const renderItem = ({ item }) => {
    function goToDog() {
      return navigation.navigate("Dog", {
        chipnr: item.key,
        musherName: musherName,
        musherSurname: musherSurname,
        dogname: item.dogname,
      });
    }
    if (loading) {
      return <ActivityIndicator />;
    }
    return (
      <TouchableOpacity
        style={{
          height: 50,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={goToDog}
      >
        <ListItem bottomDivider style={styles.list}>
          {/* <ListItem.Content> */}
          <ListItem.Title>{item.dogname}</ListItem.Title>
          <ListItem.Subtitle>Chipnr: {item.key}</ListItem.Subtitle>
          <View styles={{ alignSelf: "flex-end" }}>
            <ListItem.Chevron />
          </View>
          {/* </ListItem.Content> */}
        </ListItem>
      </TouchableOpacity>
    );
  };

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
            <Text h4> </Text>
            <Card.Title>
              {" "}
              {musherName} {musherSurname}{" "}
            </Card.Title>
            <Card.Divider />
            <Card.Title>Details</Card.Title>

            <Text h4 h4Style={{ fontSize: 16, fontWeight: "normal" }}>
              {"    "}Christmas spirit: Yes {"\n"}
            </Text>
            <Card.Divider />
            <Card.Title>Dogs</Card.Title>
          </View>
        </View>
        <FlatList data={dogs} renderItem={renderItem} />
        {/* <View styles={styles.list}>
          <Text></Text>
        </View> */}
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
    backgroundColor: colors.orangeBackground,
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
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  list: {
    alignSelf: "flex-start",
    flex: 1,
  },
  squares: {
    width: "80%",
    // height: "50%",
    flex: 1,
    backgroundColor: colors.white,
  },
  textSquare: {
    color: "#737373",
    alignSelf: "center",
  },
});

export default MusherScreen;
