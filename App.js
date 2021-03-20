// @refresh reset
import { StatusBar } from "expo-status-bar";
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
import * as firebase from "firebase";
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Button,
  Platform,
} from "react-native";
import { firebaseConfig } from "./app/config/Fire";
import Home from "./app/components/Home/Home.component";

import DogOverviewScreen from "./app/screens/DogOverviewScreen";
import DogScreen from "./app/screens/DogScreen";
import LogInScreen from "./app/screens/LogInScreen";
import MusherOverviewScreen from "./app/screens/MusherOverviewScreen";
import MusherScreen from "./app/screens/MusherScreen";
import OrganizerScreen from "./app/screens/OrganizerScreen";
import ParticipantScreen from "./app/screens/ParticipantScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import handleLogOut from "./app/config/handleLogOut";

import Icon from "react-native-vector-icons/AntDesign";

//import { useDimensions } from "@react-native-community/hooks"; //Cannot find this file. Why??
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig); // To not re-make the app every time we save
}
if (Platform.OS === "android") {
  LogBox.ignoreLogs(["Setting a timer"]); //This warning is not possible to solve at android atm
}
const Root = createStackNavigator();

// class NoteTaker extends Component {
//   render() {
//     return <Home />;
//   }
// }

function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="MusherOverviewScreen"
          component={MusherOverviewScreen}
          options={{ headerShown: false }}
        />

        <Root.Screen
          name="OrganizerScreen"
          component={OrganizerScreen}
          options={{ headerShown: false }}
        />

        <Root.Screen
          name="LoginScreen"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="DogOverviewScreen"
          component={DogOverviewScreen}
          options={{ headerShown: false }}
        />

        <Root.Screen
          name="ParticipantScreen"
          component={ParticipantScreen}
          options={{ headerShown: false }}
        />
        {/* <Root.Screen name="handleLogOut" component={handleLogOut} /> */}
        <Root.Screen
          name="MusherScreen"
          component={MusherScreen}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="Dog"
          component={DogScreen}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default App;
//export default NoteTaker;

// function App() {
//   console.log("App executed");
//   const handlePress = () => console.log("Text pressed");
//   console.log(require("./assets/icon.png"));

//   return (

// <LogInScreen title="LogInScreen"/>
//<WelcomeScreen title="Welcome screen"/>
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
// );
// }

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

const dbh = firebase.firestore();

//This is a test
dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball",
});
//Test
dbh.collection("characters").doc("bajs").set({
  employment: "dog",
  outfitColor: "brown",
  specialAttack: "fireball",
});
