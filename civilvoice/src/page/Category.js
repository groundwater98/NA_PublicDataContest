import React from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";
import Header from "../component/Header";
import {useNavigation} from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Category = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
            <Header text={"Civil Voice"}></Header>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    {/* 상단 영역*/}
                    <View style={styles.boardTitleContainer}>
                        <Text style={styles.boardTitleText}>
                            채팅 카테고리
                        </Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CategoryDetail', {categoryName : '안건법'})}
                        >
                            <View style={styles.ChatTitleContainer}>
                                <Text style={styles.ChatTitleText}>안건법</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.ChatTitleContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail', {categoryName : '환경법'})}
                            >
                                <Text style={styles.ChatTitleText}>환경법</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ChatTitleContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail', {categoryName : '노동법'})}
                            >
                                <Text style={styles.ChatTitleText}>노동법</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ChatTitleContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail', {categoryName : '경제법'})}
                            >
                                <Text style={styles.ChatTitleText}>경제법</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ChatTitleContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail', {categoryName : '사회법'})}
                            >
                                <Text style={styles.ChatTitleText}>사회법</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ChatTitleContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail', {categoryName : '교통법'})}
                            >
                                <Text style={styles.ChatTitleText}>교통법</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ChatTitleContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail', {categoryName : '안건 작성'})}
                            >
                                <Text style={styles.ChatTitleText}>안건 작성</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 11,
        justifyContent: "center",
    },
    mainContainer: {
        padding: 30,
        marginVertical: 30,
        marginHorizontal: SCREEN_WIDTH*0.05,
        borderColor: theme.whiteBlue,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    boardTitleText: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        fontWeight: "700",
    },
    boardTitleContainer: {
        marginTop: -20,
        justifyContent: "center",
        borderRadius: 20,
        width: 250,
        height: 50,
        backgroundColor: theme.skyblue,
    },
    ChatTitleText: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "700",
    },
    ChatTitleContainer: {
        margin: 10,
        justifyContent: "center",
        borderRadius: 20,
        width: 220,
        height: 50,
        backgroundColor: theme.whiteBlue,
    },
    agendaContainer: {
        marginVertical: 10,
        width : SCREEN_WIDTH-(4*(SCREEN_WIDTH*0.05)),
        borderRadius: 20,
        padding: 5,
    },
    bottomBtnContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomBtn: {
        flexDirection: "row",
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        borderColor: theme.skyblue,
        borderWidth: 3,
        borderRadius: 15,
    },
    bottomBtnText: {
        marginLeft: 3,
        color: theme.skyblue,
    },
    footerContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    footer: {
        width: 150,
        height: 40,
        backgroundColor: theme.skyblue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    footerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    },
});

export default Category;
