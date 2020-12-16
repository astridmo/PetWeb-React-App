import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Card, SearchBar } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../config/colors";

function ProfileScreen({navigation}) {
  function handleLogOut() {
    return navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <View>
        <Button
          buttonStyle={{ backgroundColor: colors.primary }}
          onPress={handleLogOut}
          title="Log out"
        />
      </View>

      <Card>
          <Card.Title>Profile overview</Card.Title>
          <Card.Divider />

      </Card>
    </SafeAreaView>
  );
}

export default ProfileScreen;
