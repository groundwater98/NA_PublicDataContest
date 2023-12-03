import React from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme, maxWidth} from "../../color";
import Header from "../component/Header";
import {useNavigation} from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get("window").width;
const text = "목적:\n" +
    "법률 상담의 효율성과 접근성을 향상시키기 위해 인공지능(AI)을 활용한 법률상담 서비스 도입을 제안함으로써 국민들의 법률 지식 습득 및 상담 접근성을 높이고자 함.\n" +
    "\n" +
    "내용:\n" +
    "\n" +
    "AI 법률상담 플랫폼 구축\n" +
    "\n" +
    "AI 기술을 활용하여 법률상담을 위한 플랫폼을 개발 및 구축하여 국민들에게 법률적인 문제에 대한 손쉬운 접근을 제공함으로써 시간과 공간의 제약 없이 법률 상담을 받을 수 있도록 함.\n" +
    "다양한 법률 정보 제공\n" +
    "\n" +
    "인공지능을 활용하여 다양한 법률 문제에 대한 정보를 제공하고, 사용자의 질문에 빠르고 정확하게 답변함으로써 법률에 대한 기본적인 이해를 돕고 문제 해결에 도움을 줌.\n" +
    "데이터 보안 및 개인정보 보호 강화\n" +
    "\n" +
    "개인 정보 보호 및 데이터 보안에 대한 철저한 시스템을 구축하여 사용자의 개인정보를 안전하게 보호하며, 기밀성을 유지하여 신뢰성 있는 서비스를 제공함.\n" +
    "법률 전문가와의 협력\n" +
    "\n" +
    "AI 시스템의 한계를 극복하기 위해 법률 전문가와 협력하여 복잡한 법률 문제에 대한 상담 및 해결 방안을 제시함으로써 고도화된 법률상담 서비스를 제공함.\n" +
    "사용자 편의성 증진\n" +
    "\n" +
    "다양한 인터페이스를 통해 모바일 애플리케이션, 웹 사이트 등을 활용하여 사용자들이 편리하게 서비스를 이용할 수 있도록 함."

const recomment = "인공지능(AI)을 활용한 법률상담 서비스 도입은 현재와 미래를 위한 뚜렷한 필요성을 가진 제안입니다. 법률 상담의 효율성과 접근성을 높이는 이 방안은 국민들의 법률 지식 습득과 상담 접근성을 혁신적으로 개선할 것으로 기대됩니다.\n" +
    "\n" +
    "AI 법률상담 플랫폼의 구축은 사회적으로 중요한 문제를 해결하는 데 있어 뛰어난 방안으로 각광받을 것입니다. 국민들이 언제 어디서나 법률적 문제에 대한 신속하고 정확한 지식을 얻을 수 있는 환경을 조성함으로써, 법률적 불확실성으로부터 비롯된 문제를 사전에 예방하는 데 큰 도움이 될 것입니다.\n" +
    "\n" +
    "데이터 보안과 개인정보 보호 강화는 이 서비스의 핵심적인 부분입니다. 신뢰성 있는 서비스 제공을 위해서는 철저한 보안 시스템의 구축이 필수적이며, 이는 국민들에게 안심감을 제공할 것입니다.\n" +
    "\n" +
    "이 서비스는 AI 기술과 법률 전문가의 협업을 통해 고도화되고, 사용자 편의성 증진을 위해 다양한 인터페이스를 제공함으로써 국민들에게 혁신적이고 효과적인 법률상담 서비스를 제공할 것으로 기대됩니다."

const BoardDetail = () => {
    const navigation = useNavigation();
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
                                인공지능 기반 법률상담 서비스 도입을 위한 제안
                            </Text>
                            <Text style={styles.agendaDetail}>
                                {text}
                            </Text>
                            <View style={styles.bottomBtnContainer}>
                                <TouchableOpacity>
                                    <View style={styles.bottomBtn}>
                                        <Fontisto
                                            name={"like"}
                                            size={15}
                                            color={theme.skyblue}
                                        />
                                        <Text style={styles.bottomBtnText}>15</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/*답변 영역*/}
                        <View style={styles.agendaContainer}>
                            <Text style={styles.agendaTitle}>
                                국회의원 김지수입니다
                            </Text>
                            <Text style={styles.agendaDetail}>
                                {recomment}
                            </Text>
                        </View>


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
    }
});

export default BoardDetail;
