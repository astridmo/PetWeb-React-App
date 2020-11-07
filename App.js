import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Button,
  Platform,
} from "react-native";
import ParticipantScreen from "./app/screens/ParticipantScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
//import { useDimensions } from "@react-native-community/hooks"; //Cannot find this file. Why??

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");
  console.log(require("./assets/icon.png"));

  return (
    <WelcomeScreen />
//     <SafeAreaView style={styles.top}>
//       <Text style={styles.title} numberOfLines={1}>
//         {" "}
//         PETWEB
//       </Text>
//       <View style={styles.container}>
//         <Image
//           blurRadius={2}
//           fadeDuration={300}
//           source={{
//             uri:
//               "https://nordnorge.com/content/uploads/2019/12/004317_GEIR-STIAN-A-LARSEN_www.finnmarkslopet.no_-1.jpg",
//           }}
//           style={styles.bgimage}
//         />
//         <Image source={require("./assets/logo.png")} style={styles.logo} />

//         <Text
//           style={styles.instructions}
//           numberOfLines={2}
//           onPress={handlePress}
//         >
//           This is a test app for PetWeb {"\n"}
//           Press button to Login
//         </Text>
//         <StatusBar style="auto" />

//         <Button
//           title="click me"
//           onPress={() =>
//             Alert.alert("My title", "My message", [
//               { text: "Yes" },
//               { text: "Cancel" },
//             ])
//           }
//         />

//         <TouchableOpacity
//           onPress={() => alert("Login not made yet")}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
);
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHight : 0, //platform specific. Setting padding to 20 if android, otherwise equal 0
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "rgb(13, 65, 66)",
    fontSize: 50,
    textAlign: "center",
  },
  bgimage: {
    width: 305,
    height: 159,
    marginBottom: 10,
    opacity: 0.5,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
  },
});
