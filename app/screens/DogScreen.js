import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, SearchBar, ListItem } from "react-native-elements";

import App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import MyHeader from "../components/MyHeader";

function DogScreen({ route, navigation }) {
  const { musherId, chipnr, musherName, musherSurname, dogname } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <MyHeader />

      <Card
        containerStyle={{
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text> </Text>
        <Card.Title>
          {" "}
          {chipnr} {dogname}{" "}
        </Card.Title>
        <Card.Divider />
        <Text>
          Musher: {musherName} {musherSurname}
        </Text>
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
});

export default DogScreen;
