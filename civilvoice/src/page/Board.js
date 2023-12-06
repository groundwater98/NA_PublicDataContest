import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {theme} from "../../color";
import Header from "../component/Header";
import {useNavigation} from "@react-navigation/native";
import BoardRead from "../component/BoardRead";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Board = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); // 페이지 번호, 초기값은 1

    const navigation = useNavigation();
    const testdata = [
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


    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(`http://172.20.1.22:9000/api/board/list?page=${page}`);
            if (response.ok) {
                const newData = await response.json();
                if (newData !== null) {
                    setData(data.concat(newData)); // 기존 데이터와 새 데이터 합치기
                    setPage(page + 1); // 페이지 번호 증가
                } else {
                    console.log('No more data available.');
                    // 서버로부터 데이터가 더 이상 없는 경우 처리
                    // 이때 "데이터가 없습니다."를 표시하거나 다른 필요한 작업 수행
                }
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
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

    const renderFooter = () => {
        // 추가 데이터 로딩 중일 때 로딩 표시
        return loading ? <ActivityIndicator size="large" color= {theme.skyblue} /> : null;
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
                        {data == null ? (
                        <FlatList
                            data={testdata}
                            keyExtractor={(_) => _.no}
                            style={styles.agendaContainer}
                            renderItem={({ item }) => {
                                const { title, like, check } = item;
                                return (
                                    <BoardRead title={title} like={like} check={check} no={item.no.toString()}/>
                                )
                            }}
                            onEndReached={handleLoadMore} // 스크롤이 끝에 도달했을 때 호출
                            onEndReachedThreshold={0.1} // 끝에 도달하기 전 스크롤 위치 비율
                            ListFooterComponent={renderFooter} // 추가 데이터 로딩 중일 때 표시될 컴포넌트
                        />
                        ) : (
                            <View style={styles.emptyAgendaContainer}>
                                <Text>데이터가 없습니다.</Text>
                            </View>
                        )}

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
    emptyAgendaContainer : {
        marginVertical: 10,
        width : SCREEN_WIDTH-(4*(SCREEN_WIDTH*0.05)),
    },
});

export default Board;
