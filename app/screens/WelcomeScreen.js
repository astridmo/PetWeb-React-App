// This file is the Welcome screen of the app for PetWeb SB.
// The page will ask the user to log in

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

import App from "../../App.js";
import colors from "../config/colors";
import LogInScreen from "./LogInScreen";
import ParticipantScreen from "./ParticipantScreen";

import Icon from 'react-native-vector-icons/AntDesign';

function WelcomeScreen({ props, navigation, route }) {
  function goToLogIn() {
    return navigation.push("LoginScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground //Adding the background of the page
        style={styles.background}
        source={{
          uri:
            "https://nordnorge.com/content/uploads/2019/12/004317_GEIR-STIAN-A-LARSEN_www.finnmarkslopet.no_-1.jpg",
        }}
      ></ImageBackground>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>PETWEB</Text>
        <Image
          style={styles.logo}
          source={require("C:/Users/astri/PetWeb/app/assets/dog_logo.jpg")}
        />
        <Text>Enjoy the race</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={goToLogIn}>
        <Text> <Icon name="user" size={30} color="#900" /> Login </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// The styles for this page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
  },
  background: {
    flex: 1,
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 50,
    alignItems: "center",
    color: colors.logo,
  },
});

export default WelcomeScreen;
