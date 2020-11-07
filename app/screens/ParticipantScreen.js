import React from 'react';
import { Image, ImageBackground, RefreshControlBase, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ParticipantScreen(props) {
    return (
        <ImageBackground
        style = {styles.background}
        source={require('../assets/background2.jpg')}>

        <View style={styles.logOutBtn}> Log Out</View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        opacity: 0.2,
    },
    logOutBtn: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        right: 40
    }
})


export default ParticipantScreen;