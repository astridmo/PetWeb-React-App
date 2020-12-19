import React, { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  RefreshControlBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../config/colors";
import Icon from "react-native-vector-icons/AntDesign";

function ParticipantScreen({ navigation, props, route }) {
  const [searchMusher, setSearchMusher] = useState("");
  const [searchDog, setSearchDog] = useState();

  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }

  {
    /* <Image
        style={styles.image}
        s */
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
  image: {
    flex: 0,
  },
  background: {
    flex: 1,
    opacity: 0.2,
    color: colors.black,
  },
  fixToText: {
    flexDirection: "row",
    // justifyContent: 'space',
  },
  logOutBtn: {
    width: 50,
    height: 50,
    color: colors.primary,
    position: "absolute",
    top: 40,
    right: 40,
  },
});

export default ParticipantScreen;
