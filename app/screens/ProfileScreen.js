import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Card, SearchBar } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";
import MyHeader from "../components/MyHeader";

function ProfileScreen({ navigation }) {

  return (
    <SafeAreaView>
      <MyHeader />

      <Card>
        <Card.Title>Profile overview</Card.Title>
        <Card.Divider />
      </Card>
    </SafeAreaView>
  );
}

export default ProfileScreen;
