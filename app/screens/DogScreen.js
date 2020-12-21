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
          {"    "}Active in race: No {"\n"}
        </Text>
        <Text h4 h4Style={{ fontSize: 16, fontWeight: "normal" }}>
          {"    "}Vet approval: Yes {"\n"}
        </Text>
        <Card.Divider />
        <Card.Title>Owner</Card.Title>
        <TouchableOpacity onPress={goBack}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>
                {musherName} {musherSurname}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
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
