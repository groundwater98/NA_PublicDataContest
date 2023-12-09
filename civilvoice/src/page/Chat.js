import React, {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import Header from "../component/Header";
import {Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";
import {Fontisto} from "@expo/vector-icons";
import NetInfo, {useNetInfo} from "@react-native-community/netinfo";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Chat = () => {

    const netInfo = useNetInfo();
    const navigation = useNavigation();
    const route = useRoute();
    const [text, setText] = useState("");
    const [message, setMessage] = useState({});
    const [count, setCount] = useState(0);

    const { categoryName, typeOfConversation } = route.params;

    const onChangeText = (payload) => setText(payload);

    const addToDo = async () => {

        console.log(categoryName, typeOfConversation, text)

        try {
            if (text === "") {
                return;
            }

            const ipInfo = netInfo.details.ipAddress
            console.log(ipInfo)

            const response = await fetch(`http://172.20.1.22:9000/api/chat/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    categoryName : categoryName,
                    typeOfConversation : typeOfConversation,
                    text: text,
                })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }

            const responseText = await response.text();

            // 기존 message 객체의 키 개수를 통해 새로운 count를 계산
            const newCount = Object.keys(message).length;

            const userMessage = {
                ...message,
                [newCount]: { text, user: true }
            };
            setMessage(userMessage);
            setText("");

            const botMessage = {
                ...userMessage,
                [newCount + 1]: { text: responseText , user: false }
            };
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
                <Header text={categoryName+ " " +typeOfConversation}></Header>
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
                        <View style={styles.footerContainerBack}>
                            <View style={styles.textContainer}>
                                <TextInput
                                    multiline={true}
                                    onSubmitEditing={addToDo}
                                    value={text}
                                    onChangeText={onChangeText}
                                    placeholder={"텍스트를 입력해주세요"}
                                    style={styles.input}>
                                </TextInput>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={addToDo}
                                >
                                    <Fontisto
                                        name={"paper-plane"}
                                        size={20}
                                        color={theme.skyblue}
                                    />
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
            flexDirection: 'row',
        },
        footerContainerBack: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 15,
            fontSize: 18,
        },
        textContainer: {
            width: SCREEN_WIDTH*0.95,
            flex: 1
        },
        input: {
            fontSize: 15,
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
