import React, {useEffect, useRef, useState} from 'react';
import {  GiftedChat , SystemMessage } from 'react-native-gifted-chat';
import {useNavigation, useRoute} from "@react-navigation/native";
import Header from "../component/Header";
import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Chat = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);

    const addToDo = () => {
        if (text === "") {
            return
        }

        const newToDos = {
            ...toDos,
            [Date.now()]: {text, work: working}
        }

        setToDos(newToDos);
        setText("");
        console.log(newToDos);
    }
    const scrollViewRef = useRef();

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [toDos]);


    useEffect(() => {
        working
    }, []);


    return (
            <View style={{flex: 1}}>
                <Header text={"Civil Voice"}></Header>
                <View style={styles.container}>
                    {/* 상단 영역*/}
                    <ScrollView
                        ref={scrollViewRef}
                    >
                        {Object.keys(toDos).map(key =>
                            <View style={styles.toDo} key={key}>
                                <View style={styles.toDoTextBackground}>
                                    <Text style={styles.toDoText}>{toDos[key].text}</Text>
                                </View>
                            </View>)}
                    </ScrollView>
                    <View style={styles.footerContainer}>
                        <TextInput
                            onSubmitEditing={addToDo}
                            value={text}
                            onChangeText={onChangeText}
                            placeholder={"텍스트를 입력해주세요"}
                            style={styles.input}>
                        </TextInput>
                    </View>

                </View>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            flex: 11,
            justifyContent: "center",
        },
        mainContainer: {
            flex: 1,
            padding: 10,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
        },
        footerContainer: {
            padding: 10,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            backgroundColor: theme.skyblue,

        },
        input: {
            width: SCREEN_WIDTH*0.95,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 15,
            fontSize: 18,
        },
        toDo: {
            margin: 5,
            padding: 5,
            flexDirection: "row",
            // *** 여기를 조정해서 AI와 User의 채팅을 구분 ***
            justifyContent: "flex-end",
            marginHorizontal: 20,
        },
        toDoText: {
            color: "black",
            fontSize: 18,
        },
        toDoTextBackground: {
            backgroundColor: theme.whiteBlue,
            paddingHorizontal: 10, // 좌우 여백 조절
            paddingVertical: 5,   // 상하 여백 조절
            borderRadius: 5,
            alignSelf: 'flex-start', // 텍스트의 길이에 맞게 배경 조절
        }
    });

export default Chat;
