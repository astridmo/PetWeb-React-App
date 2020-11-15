import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  RefreshControlBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import app from "../../App.js";
import colors from "../config/colors";

function ParticipantScreen({ navigation, props, route }) {
  const [searchMusher, setSearchMusher] = useState("");
  const [searchDog, setSearchDog] = useState();

  // const handleLogOut = () => {
  //   navigation.navigate('WelcomeScreen')
  // }

  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }

  return (
    <SafeAreaView>
      {/* <Image
        style={styles.image}
        source={require("../assets/background2.jpg")} */}
      <ImageBackground //Adding the background of the page
        style={styles.background}
        source={{
          uri:
            "https://nordnorge.com/content/uploads/2019/12/004317_GEIR-STIAN-A-LARSEN_www.finnmarkslopet.no_-1.jpg",
        }}
      ></ImageBackground>
      <TouchableOpacity style={styles.logOutBtn} onPress={handleLogOut}>Log Out
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  logOutBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    right: 40,
  },
});

export default ParticipantScreen;
