import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, SearchBar } from "react-native-elements";

import App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";

// Initialize firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../config/Fire";
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig); // To not re-make the app every time we save
}
const db = firebase.firestore();

function MusherScreen({ route, navigation }) {
  const { musherId } = route.params;
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
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
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

  return (
    <SafeAreaView style={styles.container}>
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
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View style={styles.cardTitle}>
          <View style={{ flex: 1 }}>
            <Text> </Text>
            <Card.Title> Choosen Musher</Card.Title>
          </View>
          <Card.Divider />
        </View>
        <Card.Divider></Card.Divider>
        <Text> Information about chosen musher</Text>
        <Text>musherId: {JSON.stringify(musherId)}</Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //   card: {
  //     backgroundColor: colors.primary,
  //     flex: 0.8,
  //     width: "80%",
  //     alignItems: "center",
  //     alignSelf: "center",
  //   },
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
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
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
