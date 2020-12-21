import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, Card, SearchBar, ListItem } from "react-native-elements";

import colors from "../config/colors";
import MyHeader from "../components/MyHeader";

function DogScreen({ route, navigation }) {
  // function for the entire screen
  const { musherId, chipnr, musherName, musherSurname, dogname } = route.params; //Achieving data from MusherScreen
  function goBack() {
    // function to navigate back to the previous screen
    return navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Printing the header */}
      <MyHeader />

      {/* Printing the card */}
      <Card>
        <Text> </Text>
        <Card.Title>
          {" "}
          {dogname} {"\n \n"}
          Chip: {chipnr}{" "}
        </Card.Title>
        <Card.Divider />

        {/* Printing the details for the dog: */}
        <Card.Title>Details</Card.Title>
        <Text h4 h4Style={{ fontSize: 16, fontWeight: "normal" }}>
          {"    "}Active in race: No {"\n"}
        </Text>
        <Text h4 h4Style={{ fontSize: 16, fontWeight: "normal" }}>
          {"    "}Vet approval: Yes {"\n"}
        </Text>
        <Card.Divider />

        {/* Printing the data of the owner: */}
        <Card.Title>Owner</Card.Title>
        <TouchableOpacity onPress={goBack}>
          {/* Making a list */}
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
