import React from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";
import Header from "../component/Header";
import {useNavigation} from "@react-navigation/native";
import BoardRead from "../component/BoardRead";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Board = () => {
    const navigation = useNavigation();
    const data = [
        { no: 1, title: '1번째 제목', like: 5, check: 1 },
        { no: 2 ,title: '2번째 제목', like: 1, check: 0 },
        { no: 3 ,title: '3번째 제목', like: 3, check: 1 },
        { no: 4, title: '1번째 제목', like: 5, check: 1 },
        { no: 5 ,title: '2번째 제목', like: 1, check: 0 },
        { no: 6 ,title: '3번째 제목', like: 3, check: 1 },
        { no: 7, title: '1번째 제목', like: 5, check: 1 },
        { no: 8 ,title: '2번째 제목', like: 1, check: 0 },
        { no: 9 ,title: '3번째 제목', like: 3, check: 1 },
        { no: 10, title: '1번째 제목', like: 5, check: 1 },
        { no: 11 ,title: '2번째 제목', like: 1, check: 0 },
        { no: 12 ,title: '2번째 제목', like: 1, check: 0 },
        { no: 13 ,title: '3번째 제목', like: 3, check: 1 },
        { no: 14, title: '1번째 제목', like: 5, check: 1 },
        { no: 15 ,title: '2번째 제목', like: 1, check: 0 },
        { no: 16 ,title: '3번째 제목', like: 3, check: 1 },
    ]
    return (
        <View style={{flex: 1}}>
            <Header text={"Civil Voice"}></Header>
            <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        {/* 상단 영역*/}
                        <View style={styles.boardTitleContainer}>
                            <Text style={styles.boardTitleText}>
                                안건 게시판
                            </Text>
                        </View>

                        {/*안건 영역*/}
                        <FlatList
                            data={data}
                            keyExtractor={(_) => _.no}
                            style={styles.agendaContainer}
                            renderItem={({ item }) => {
                                const { title, like, check } = item;
                                return (
                                    <BoardRead title={title} like={like} check={check} no={item.no.toString()}/>
                                )
                            }}
                        />
                        <View
                            style={styles.footerContainer}
                        >
                            <TouchableOpacity
                                style={styles.footer}
                                onPress={() => navigation.navigate('Category')}
                            >
                                <Text
                                    style={styles.footerText}
                                >
                                    채팅 시작하기
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 11,
    },
    mainContainer: {
        marginVertical: 30,
        marginHorizontal: SCREEN_WIDTH*0.05,
        borderColor: theme.whiteBlue,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: "center",
    },
    boardTitleText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    },
    boardTitleContainer: {
        marginTop: -20,
        justifyContent: "center",
        borderRadius: 20,
        width: 150,
        height: 40,
        backgroundColor: theme.skyblue,
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

export default Board;
