import React, { Component } from "react";
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
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../config/colors";
import styles from "./Header.component.style";

class Header extends Component {
  render() {
    return (
      <View style={styles.fixToText}>
        <TouchableOpacity>
          <Icon name="user" size={30} color={colors.black} />
        </TouchableOpacity>
        <Button
          buttonStyle={{ backgroundColor: colors.primary }}
          title="Log out"
        />
      </View>
    );
  }
}

export default Header;
