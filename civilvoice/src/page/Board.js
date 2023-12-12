import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {theme, ip} from "../../color";
import Header from "../component/Header";
import {useNavigation, useRoute} from "@react-navigation/native";
import BoardRead from "../component/BoardRead";
import axios from "axios";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const Board = ({route}) => {

    const {params} = route;
    const [ recommend, setRecommend ] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0); // 페이지 번호, 초기값은 0
    const [fetchResult, setFetchResult] = useState(true); // 페이지 번호, 초기값은 0
    const [request, setRequest] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // 화면이 focus 될 때마다(fetchData 함수 실행)
            fetchData();
        });

        return unsubscribe; // Clean-up 함수, 컴포넌트가 unmount 될 때 이벤트 구독 해제
    }, [navigation]); // navigation이 변경될 때마다 useEffect가 재실행되도록 설정

    const fetchData = async () => {
        setLoading(true);

        console.log(page)

        if (request === true) {
            try {
                const response = await fetch(`http://${ip}:9000/api/board/list?page=${page}`);
                if (response.ok) {
                    const newData = await response.json();
                    console.log(newData.content)
                    if (newData.content && newData.content.length > 0) {
                        setData(data.concat(newData.content)); // 기존 데이터와 새 데이터 합치기
                        setPage(page + 1); // 페이지 번호 증가
                    } else {
                        console.log('No more data available.');
                        setRequest(false);
                    }
                }
            } catch (error) {
                setFetchResult(false);
                console.error('Error fetching data:', error);
                console.log("fetch result ==== " + fetchResult)
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // 컴포넌트가 처음 마운트될 때 데이터 로딩
    }, []);

    const handleLoadMore = () => {
        // 스크롤이 일정 위치에 도달하면 추가 데이터 로딩
        if (!loading) {
            fetchData();
        }
    };

    const requestFail = () => {
        return !fetchResult ?
            <View style={styles.frame}>
                <View>
                    <Text style={styles.title}> 서버 오류입니다. </Text>
                </View>
            </View>
            : null
    };

    const renderFooter = () => {
        return (
            !request ? (
                <View style={styles.frame}>
                    <View>
                        <Text style={styles.title}> 모든 데이터를 불러왔습니다. </Text>
                    </View>
                </View>
            ) : requestFail()
        )
    };



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
                            keyExtractor={(_) => _.id}
                            style={styles.agendaContainer}
                            renderItem={({ item }) => {
                                const { id ,title, recommend, check } = item;
                                return (
                                    <BoardRead id={id} title={title} like={recommend} check={check}/>
                                )
                            }}
                            onEndReached={handleLoadMore} // 스크롤이 끝에 도달했을 때 호출
                            onEndReachedThreshold={0.1} // 끝에 도달하기 전 스크롤 위치 비율
                            ListFooterComponent={renderFooter} // 추가 데이터 로딩 중일 때 표시될 컴포넌트
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
        height: SCREEN_HEIGHT*0.9,
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
    emptyAgendaContainer : {
        width : SCREEN_WIDTH-(4*(SCREEN_WIDTH*0.05)),
        height : SCREEN_HEIGHT,
    },
    frame: {
        marginBottom: 30,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#E7E7E7",
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
});

export default Board;
