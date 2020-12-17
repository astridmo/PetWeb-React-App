// This file is the Welcome screen of the app for PetWeb SB.
// The page will ask the user to log in

import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Input, Tooltip } from "react-native-elements";

import colors from "../config/colors";
import Icon from "react-native-vector-icons/AntDesign";

function WelcomeScreen({ props, navigation, route }) {
  const [password, setPassword] = useState("");
  console.log(password);
  function goToLogIn() {
    return navigation.push("LoginScreen");
  }
  function handleLogIn() {
    console.log("The text is", password);
    if (password == "GodJul") {
      return navigation.push("OrganizerScreen");
    }
    return alert("Wrong password!");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={styles.background} source={{
          uri:
            "https://nordnorge.com/content/uploads/2019/12/004317_GEIR-STIAN-A-LARSEN_www.finnmarkslopet.no_-1.jpg",
        }} /> */}
      <Text></Text>
      <Text></Text>

      <View style={styles.content}>
        <Text style={styles.title}>PetWeb</Text>
        <Image style={styles.logo} source={require("../assets/dog_logo.jpg")} />
      </View>
      {/* <View style={styles.logoContainer}>
          {/* <Text style={styles.title}>PetWeb</Text> */}
      {/* <Image
            style={styles.logo}
            source={require("../assets/dog_logo.jpg")}
          />
        </View>  */}

      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock1" size={24} color="black" />}
        onChangeText={(password) => {
          setPassword(password);
        }}
        secureTextEntry={true}
        label="Password"
      />
      <Button
        title="Login"
        onPress={handleLogIn}
        buttonStyle={{ backgroundColor: colors.primary }}
      />
      <Tooltip popover={<Text>Password is: GodJul</Text>}>
        <Text style={styles.forgot}>Forgot password ?</Text>
      </Tooltip>

      <View styles={{ flex: 1, flexDirection: "column" }}>
        <Image style={styles.elves} source={require("../assets/elves.jpg")} />
      </View>
    </SafeAreaView>
  );
}

// The styles for this page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
    backgroundColor: colors.white,
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  elves: {
    width: "100%",
    resizeMode: "contain",
    //height: "100%",

    //height: undefined,
    //height: 200,
  },
  forgot: {
    alignSelf: "center",
    color: colors.logo,
    fontWeight: "bold",
  },
  input: {
    alignSelf: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
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
    alignSelf: "center",
    color: colors.logo,
  },
});

export default WelcomeScreen;
