import React from "react";
import {
    Text,
    TouchableOpacity,
  } from "react-native";
  import {
    Header
  } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";

function MyHeader() {
  const navigation = useNavigation();
  function handleLogOut() {
    return navigation.navigate("WelcomeScreen");
  }
  function profileButton() {
    return navigation.navigate("ProfileScreen");
  }
  return (
    <Header
      placement="right"
      rightComponent={
        <TouchableOpacity>
          <Icon
            name="user"
            size={30}
            color={colors.black}
            onPress={profileButton}
          />
        </TouchableOpacity>
      }
      centerComponent={
        <TouchableOpacity>
          {" "}
          <Text onPress={handleLogOut} style={{ color: colors.header }}>
            Log out
          </Text>
        </TouchableOpacity>
      }
      containerStyle={{
        backgroundColor: colors.background,
        justifyContent: "space-around",
      }}
    />
  );
}

export default MyHeader;
