import React from "react";
import { Stylesheet, Text, View } from "react-native";

export default TodoList = ({ list }) => {
  return (
    <View>
      <Text>{list.name}</Text>
    </View>
  );
};
