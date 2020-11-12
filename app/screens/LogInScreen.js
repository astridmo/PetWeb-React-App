import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../config/colors";

function LogInScreen(props) {
  const [text, setText] = useState("");
  console.log(text)

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
          value={text}
          style={styles.logIn}
          placeholder="Type here..."
          onChangeText={(text) => {
            setText(text);
          }}
        />
        <Text style={styles.logIn}>
            {'\n'} You entered: {text}
        </Text>
        
      </View>
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
      fontSize: 42

  }
});

export default LogInScreen;
