import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import * as App from "../../App.js";
import ProfileScreen from "../screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";

function helloWorld() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}

function logOutAndSettings(props) {
  return (
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
  );
}

//const foo = Math.PI + Math.SQRT2;

function foo() {
  return Math.PI + Math.SQRT2;
}

function navigationFunctions({ ProfileScreen }) {
  const navigation = useNavigation();

  return navigation.navigate(ProfileScreen);
  //     function profileButton() {
  //     return navigation.navigate("ProfileScreen");
  //   }
}

export { navigationFunctions, logOutAndSettings, foo, helloWorld };

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row-reverse",
    //justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
