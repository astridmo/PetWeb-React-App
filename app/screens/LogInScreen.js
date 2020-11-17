import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";

import Icon from "react-native-vector-icons/AntDesign";

function LogInScreen({ props, navigation, route }) {
  const [password, setPassword] = useState("");
  console.log(password);
  function handleLogIn(password) {
    console.log("The text is", password)
    // if (password == "Finnmarkslopet2021") {
      return (
        alert(
          "Login not made yet. \nYou will be redireced to Participant Screen as if logged in"
        ),
        navigation.push("ParticipantScreen")
      );
    // }
    // return (
    //   alert("Wrong password!", password)
    // )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground //Adding the background of the page
        style={styles.background}
        source={{
          uri:
            "https://nordnorge.com/content/uploads/2019/12/004317_GEIR-STIAN-A-LARSEN_www.finnmarkslopet.no_-1.jpg",
        }}
      ></ImageBackground>
      <View>
        <TextInput
          value={password}
          style={styles.logIn}
          placeholder="Type here..."
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
        <Text style={styles.logIn}>
          {"\n"} You entered: {password}
        </Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogIn}>
        <Text>
          {" "}
          <Icon name="rocket1" size={30} color="#900" /> Login{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
  },
  background: {
    flex: 1,
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logIn: {
    fontSize: 42,
  },
});

export default LogInScreen;
