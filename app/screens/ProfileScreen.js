import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { Button, Card, SearchBar, Text } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import MyHeader from "../components/MyHeader";

function ProfileScreen({ navigation }) {
  function dogButton() {
    return navigation.navigate("DogOverviewScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <MyHeader />
      <Card style={{flex:1}}>
        <Card.Title>Profile</Card.Title>
        <View>
        <Image style={styles.grinch} source={require("../assets/grinch.png")} />
        </View>
        <Text> Not made yet, sorry </Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
  },
  grinch: {
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    color: colors.primary,
    backgroundColor: colors.white,
  },
});

export default ProfileScreen;
