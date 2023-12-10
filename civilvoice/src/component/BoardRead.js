import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";
import {useNavigation} from "@react-navigation/native";

const BoardRead = ({ id, title, like, check }) => {

    const navigation = useNavigation();

    return (

        <TouchableOpacity
            onPress={() => navigation.navigate('BoardDetail', {id : id})}
        >
            <View style={styles.frame}>
                <View>
                    <Text style={styles.title}> {title} </Text>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.title}> {like}  </Text>
                    </View>
                    <View>
                        <Text style={styles.title}> {check} </Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    frame: {
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.whiteBlue,
        borderRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 20,
        color: "#333",
        fontWeight: "700",
    },
    detail: {
        fontSize: 18,
        color: "#333",
        fontWeight: "500",
    },
    form: {
        flexDirection: "row",
    }

})


export default BoardRead;
