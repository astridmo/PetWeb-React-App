import React from "react";
import {
  Image,
  ImageBackground,
  RefreshControlBase,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import colors from "../config/colors";

function ParticipantScreen(props) {
  return (
    <SafeAreaView>
      <Image
        style={styles.background}
        source={require("../assets/background2.jpg")}
      ></Image>
      <View style={styles.logOutBtn}> Log Out</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
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
