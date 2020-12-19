// This file is for the Organizers of Finnmarksløpet

import { NavigationContainer } from "@react-navigation/native";
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
import { Button, Card, SearchBar, } from "react-native-elements";

import colors from "../config/colors";
import Icon from "react-native-vector-icons/AntDesign";
import MyHeader from "../components/MyHeader";

function OrganizerScreen({ navigation }) {
  function dogButton() {
    return navigation.navigate("DogOverviewScreen");
  }
  function musherButton() {
    return navigation.push("MusherOverviewScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <MyHeader />

      <Card>
        <Card.Title>Mushers</Card.Title>
        <Card.Divider />
        <Text style={styles.textSquare}>
          Search for musher to find the participant's dogs in the race
        </Text>
        <Text style={styles.textSquare}>or</Text>
        <Text style={styles.textSquare}>
          <TouchableOpacity onPress={musherButton}>
            <Icon
              name="profile"
              size={30}
              color={colors.black}
              styles={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
          {"  "}See the overview of mushers here!
        </Text>
      </Card>

      <Card>
        <Card.Title>Dogs</Card.Title>
        <Card.Divider />
        <Text style={styles.textSquare}>
          Search with chipnumber to find the dog's owner
        </Text>
        <Text style={styles.textSquare}>or</Text>
        <Text style={styles.textSquare}>
          <TouchableOpacity onPress={dogButton}>
            <Icon name="profile" size={30} color={colors.black} />
          </TouchableOpacity>
          See the overview of dogs here!
        </Text>
      </Card>

      {/* <TouchableOpacity style={styles.logOutBtn} onPress={handleLogOut}>
        <Text> <Icon name="user" size={30} color="#900" /> Login </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
    backgroundColor: colors.background,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headerSquare: {
    fontSize: 24,
    alignSelf: "center",
  },
  fixToText: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textSquare: {
    color: "#737373",
    alignSelf: "center",
  },
});

export default OrganizerScreen;
