import React from "react";
import { Stylesheet, Text, View } from "react-native";

export default MusherList = ({ list }) => {
  return (
    <View>
      <Text>{list.name}</Text>
    </View>
  );
};
