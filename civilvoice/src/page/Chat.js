import React, {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import Header from "../component/Header";
import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Chat = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [text, setText] = useState("");
    const [message, setMessage] = useState({});
    const [count, setCount] = useState(0);

    const onChangeText = (payload) => setText(payload);

    const addToDo = async () => {
        try {
            if (text === "") {
                return;
            }

            const response = await fetch("http://192.168.0.12:9000/api/chat/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: text
                })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }

            const responseText = await response.text();

            console.log(text)
            console.log(responseText)

            // 기존 message 객체의 키 개수를 통해 새로운 count를 계산
            const newCount = Object.keys(message).length;

            const userMessage = {
                ...message,
                [newCount]: { text, user: true }
            };
            setMessage(userMessage);
            setText("");
            console.log(userMessage)

            const botMessage = {
                ...userMessage,
                [newCount + 1]: { text: responseText , user: false }
            };
            console.log(userMessage)
            setMessage(botMessage);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error.message);
        }
    };

    const scrollViewRef = useRef();

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [message]);


    useEffect(() => {
        message
    }, []);


    return (
            <View style={{flex: 1}}>
                <Header text={"Civil Voice"}></Header>
                <View style={styles.container}>
                    {/* 상단 영역*/}
                    <ScrollView
                        ref={scrollViewRef}
                    >
                        {Object.keys(message).map(key =>
                            <View style={{...styles.toDo, justifyContent: message[key].user ? "flex-end" : "flex-start"}} key={key}>
                                <View style={styles.toDoTextBackground}>
                                    <Text style={styles.toDoText}>{message[key].text}</Text>
                                </View>
                            </View>)}
                    </ScrollView>
                    <View style={styles.footerContainer}>
                        <TextInput
                            multiline={true}
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
            // justifyContent: "flex-end",
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
