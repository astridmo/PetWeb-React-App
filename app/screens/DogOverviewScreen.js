import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, SearchBar } from "react-native-elements";

import App from "../../App.js";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";

function DogOverviewScreen({ navigation }) {
  const Separator = () => <View style={styles.separator} />;

  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }
  function musherButton() {
    return navigation.navigate("MusherOverviewScreen");
  }
  function profileButton() {
    return navigation.navigate("ProfileScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
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

      <Card
        containerStyle={{
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View style={styles.cardTitle}>
          <View style={{ flex: 1 }}>
            <Text> </Text>
            <Card.Title> Dog overview</Card.Title>
          </View>
          <Card.Divider />
          <TouchableOpacity
            style={{ backgroundColor: colors.primary, flex: 1 }}
          >
            <Text onPress={musherButton}> </Text>
            <Card.Title onPress={musherButton}> Musher overview </Card.Title>
          </TouchableOpacity>
        </View>
        <Card.Divider />
        <Text> Here a list of dogs will be provided</Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //   card: {
  //     backgroundColor: colors.primary,
  //     flex: 0.8,
  //     width: "80%",
  //     alignItems: "center",
  //     alignSelf: "center",
  //   },
  cardTitle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
    backgroundColor: colors.background,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.8,
    color: colors.secondary,
  },
  headerSquare: {
    fontSize: 24,
    alignSelf: "center",
  },
  fixToText: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  squares: {
    width: "80%",
    // height: "50%",
    flex: 1,
    backgroundColor: colors.white,
  },
  textSquare: {
    color: "#737373",
    alignSelf: "center",
  },
});

export default DogOverviewScreen;
