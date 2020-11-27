import React from "react";
import {
  Image,
  ImageBackground,
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
          backgroundColor: colors.primary,
          flex: 0.8,
          width: "80%",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Button title="Dog overview" onPress={dogButton} />
        <Card.Title> Mushers overview</Card.Title>
        <Card.Divider></Card.Divider>
        <Text> Here a list of mushers will be provided</Text>
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

export default MusherOverviewScreen;

//This is a test
dbh.collection("characters").doc("donkeykong").set({
  employment: "gorilla",
  outfitColor: "brown",
  specialAttack: "fireball"
})

