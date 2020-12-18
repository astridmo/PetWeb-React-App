import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, Button, Card, SearchBar, ListItem } from "react-native-elements";

import App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import MyHeader from "../components/MyHeader";

function DogScreen({ route, navigation }) {
  const { musherId, chipnr, musherName, musherSurname, dogname } = route.params;
  function goBack() {
    return navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <MyHeader />

      <Card>
        <Text> </Text>
        <Card.Title>
          {" "}
          {dogname} {"\n \n"}
          Chip: {chipnr}{" "}
        </Card.Title>
        <Card.Divider />
        <Card.Title>Details</Card.Title>
            <Text h4 h4Style={{ fontSize: 16, fontWeight: "normal" }}>
            {"    "}Active in race:   No {"\n"}
            </Text>
            <Card.Divider />
        <Card.Title>Owner</Card.Title>
        <TouchableOpacity onPress={goBack}>
          <Text h4 h4Style={styles.text}>
          {"    "}{musherName} {musherSurname} {"    "}
            <Icon
              name="right"
              size={10}
              style={{ color: colors.grey }}
            />
            {"\n"}
          </Text>
        </TouchableOpacity>
        <Card.Divider />

        {/* <View>
              <Text>
                <FlatList data={dogs} renderItem={renderItem} />
              </Text> */}
        {/* </View> */}
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
    backgroundColor: colors.orangeBackground,
  },
  fixToText: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default DogScreen;
