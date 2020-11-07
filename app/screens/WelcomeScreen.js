import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{
          uri:
            "https://nordnorge.com/content/uploads/2019/12/004317_GEIR-STIAN-A-LARSEN_www.finnmarkslopet.no_-1.jpg",
        }}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("C:/Users/astri/PetWeb/app/assets/dog_logo.jpg")}
          />
          <Text>Enjoy the race</Text>
        </View>
      </ImageBackground>

      <View style={styles.loginButton}>Hello World</View>
      <View style={styles.registerButton}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
