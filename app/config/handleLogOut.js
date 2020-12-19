import React, { Component, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as firebase from "firebase";
import { firebaseConfig } from "../config/Fire";
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig); // To not re-make the app every time we save
}
const db = firebase.firestore();

function LogOut() {
  const navigation = useNavigation();

  return (
  <Button
      title="Back"
      onPress={() => {
        this.props.navigation.navigate.goBack();
      }}
    />)
}

export default LogOut;
