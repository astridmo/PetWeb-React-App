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
import { Header } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../config/colors";
import styles from './Header.component.style';

class MyHeader extends Component {
  render() {
    return (
      <Header
        placement="right"
        rightComponent={<Icon name="user" size={30} color={colors.black} />} 
        centerComponent={{text: 'Log out'}}
        />
    );
  }
}

export default MyHeader;