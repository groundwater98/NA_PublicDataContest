import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {theme} from "../../color";

const Header = ({ text }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: theme.skyblue,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        marginTop: 10,
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    },
})

export default Header;
