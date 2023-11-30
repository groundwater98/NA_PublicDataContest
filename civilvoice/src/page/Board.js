import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";
import Header from "../component/Header";
import BoardRead from "../component/BoardRead";
import {useNavigation} from "@react-navigation/native";

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
            <View style={styles.boardTitle}>
                <View style={styles.footer}>
                    <Text style={styles.boardTitleText}>
                        게시판
                    </Text>
                </View>
            </View>
            <View style={styles.main}>
                <FlatList
                    data={data}
                    keyExtractor={(_) => _.no}
                    style={{flex: 1}}
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
                        onPress={() => navigation.navigate('Chat')}
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
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 11,
        backgroundColor: "white",
        paddingHorizontal: 25,
        // alignItems: "center",
    },
    boardTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    boardTitleText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
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
