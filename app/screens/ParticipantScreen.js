import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  RefreshControlBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import colors from "../config/colors";




function ParticipantScreen(props) {
  const [searchMusher, setSearchMusher] = useState("")
  const [searchDog, setSearchDog] = useState()

  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require("../assets/background2.jpg")}
      />
      <View style={styles.logOutBtn}> Log Out</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 0.2,
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
