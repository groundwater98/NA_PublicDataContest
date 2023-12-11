import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {theme, ip} from "../../color";
import Header from "../component/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fontisto } from '@expo/vector-icons';
import {useNavigation, useRoute} from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const testtext = "test"
const recomment = "test"

const BoardDetail = () => {

    const [isAdmin, setIsAdmin] = useState(false); // 상태 추가
    const [text, setText] = useState("");
    const [ title, setTitle] = useState("")
    const [ detail, setDetail] = useState("")
    const [ recommend, setRecommend] = useState([])
    const [ recommendArr, setRecommendArr] = useState([])
    const [ check, setCheck ] = useState([])
    const [ userId, setUserId ] = useState("")
    const route = useRoute();

    const { id } = route.params;

    const addToDo = async () => {
        if (text === "") {
            return;
        }
        console.log("addToDo 발동")
        console.log(text)
        const response = await fetch(`http://${ip}:9000/api/board/recommend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                detail: text,
            })
        });
        fetchData();
        setText("");
    }

    const addLike = async () => {
        const response = await fetch(`http://${ip}:9000/api/board/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                boardId: id,
                userId: userId,
            })
        });
        const newData = await response.json();
        console.log(newData)
        const user = newData.recommend.map(item => item.user);

        console.log(user)
        setRecommend(user)
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://${ip}:9000/api/board/content/${id}`);
            const newData = await response.json();
            setTitle(newData.title)
            setDetail(newData.detail)
            console.log("=======================")
            console.log(newData.recommend)
            console.log("=======================")
            setRecommend(newData.recommend.map(item => item.user))
            setRecommendArr(newData.responseRecommendDTO)
            setCheck(newData.state)
        } catch (error) {
            console.log(error);
        }
    };

    // session 값 가져와서 user 상태에 설정
    const checkAdmin = async () => {
        let sessionInfo = await AsyncStorage.getItem('session')
        sessionInfo = JSON.parse(sessionInfo);
        setUserId(sessionInfo.userId)
        if (sessionInfo.userCase === 'ADMIN') {
            const response = await fetch(`http://${ip}:9000/api/board/check/${id}`);
            setIsAdmin(true);
        }
    };

    useEffect(() => {
        checkAdmin();
        fetchData();
    }, []);

    const onChangeText = (payload) => setText(payload);

    const recommendArrComponent = () => {
        if (recommendArr.length !== 0) {
            return (
                <View>
                    {recommendArr.map((recommend, index) => (
                        <View key={index} style={styles.agendaRecommendContainer}>
                            <Text style={styles.agendaTitle}>
                                {recommend.detail}
                            </Text>
                            <Text style={styles.agendaDetail}>
                                {recommend.createDate}
                            </Text>
                        </View>
                    ))}
                </View>
                )
        }
    }

    const renderCommentInput = () => {
        if (isAdmin) {
            return (
                <View>
                    {/* 댓글 입력 컴포넌트 */}
                    <View style={styles.footerContainer}>
                        <View style={styles.footerContainerBack}>
                            <View style={styles.textContainer}>
                                <TextInput
                                    multiline={true}
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
            );
        }
        return null;
    };

    return (
        <View style={{flex: 1}}>
            <Header text={"Civil Voice"}></Header>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        {/* 상단 영역*/}
                        <View style={styles.boardTitleContainer}>
                            <Text style={styles.boardTitleText}>
                                안건 게시판
                            </Text>
                        </View>

                        {/*안건 영역*/}
                        <View style={styles.agendaContainer}>
                            <Text style={styles.agendaTitle}>
                                {title}
                            </Text>
                            <Text style={styles.agendaDetail}>
                                {detail}
                            </Text>
                            <View style={styles.bottomBtnContainer}>
                                <TouchableOpacity
                                    onPress={addLike}
                                >
                                    <View style={!recommend.includes(userId) ? {...styles.bottomBtn, backgroundColor: "white"} : {...styles.bottomBtn, backgroundColor: theme.skyblue} }>
                                        <Fontisto
                                            name={"like"}
                                            size={15}
                                            color={!recommend.includes(userId) ? theme.skyblue : "white"}
                                        />
                                        <Text style={!recommend.includes(userId) ?  styles.bottomBtnText : {...styles.bottomBtnText, color: "white"} }>{recommend.length}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* AsycStorage에서 session 정보를 꺼내오고 해당 정보가 ADMIN이면 댓글을 입력할 수 있는 컴포넌트를 추가 */}
                        {/* 좀더 손봐야함 */}
                        {renderCommentInput()}

                        {/*답변 영역*/}
                        {recommendArrComponent()}


                    </View>
                </ScrollView>
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
        backgroundColor: theme.whiteBlue,
        borderRadius: 20,
        padding: 20,
        borderColor: theme.skyblue,
        borderWidth: 3,
    },
    agendaRecommendContainer : {
        marginVertical: 10,
        width : SCREEN_WIDTH-(4*(SCREEN_WIDTH*0.05)),
        backgroundColor: "#E7E7E7",
        borderRadius: 20,
        padding: 20,
    },
    agendaTitle: {
        fontSize: 18,
        fontWeight: "700",
    },
    agendaDetail: {
        marginTop: 20,
        fontSize: 15,
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
        marginVertical: 10,
        alignItems: 'center',
        width : SCREEN_WIDTH-(4*(SCREEN_WIDTH*0.05)),
        backgroundColor: "white",
        borderWidth: 3,
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: theme.skyblue,
    },
    footerContainerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        fontSize: 18,
    },
    textContainer: {
        width: SCREEN_WIDTH*0.95,
        flex: 1
    },
});

export default BoardDetail;
