// This file is for the Organizers of Finnmarksløpet

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import App from "../../App.js";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/AntDesign";

function OrganizerScreen({ navigation }) {
  const Separator = () => <View style={styles.separator} />;

  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground //Adding the background of the page
      // style={styles.background}
      // source={require("../assets/background2.jpg")}
      ></ImageBackground>
      <View style={styles.fixToText}>
        <Icon name="user" size={30} color={colors.black} />
        <Button color={colors.primary} onPress={handleLogOut} title="Log out" />
      </View>

      <View style={styles.content}>
        <View style={styles.squares}>
          <Text style={styles.headerSquare}>Musher</Text>
          <Separator />
          <Text style={styles.textSquare}>
            Search for musher to find the participant's dogs in the race
          </Text>
        </View>
        <Separator />
        <View style={styles.squares}>
          <Text style={styles.headerSquare}>Dogs</Text>
          <Separator />
          <Text style={styles.textSquare}>
            Search with chipnumber to find the dog's owner
          </Text>
        </View>
        <Separator />
      </View>

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
    backgroundColor: colors.white,
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
    justifyContent: "space",
    alignItems: "flex-end",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  squares: {
    width: "50%",
    // height: "50%",
    flex: 1,
    backgroundColor: colors.primary,
  },
  textSquare: {
    color: "#737373",
    alignSelf: "center",
  },
});

export default OrganizerScreen;
