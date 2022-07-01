import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../Consts/Colors';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.headerBackground,
        width: '100%',
        height: 60,
        justifyContent: "center",
        paddingHorizontal: "5%"

    },
    headerText: {
        color: Colors.headerText,
        fontSize: 20,
        fontWeight: "bold"
    }
});
export default Header;