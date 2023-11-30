import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {theme} from "../../color";
import { Fontisto } from '@expo/vector-icons';

import React from 'react';

const Home = ({navigation}) => {

    const imagePath = require('../../assets/gov.png')

    return (
        <LinearGradient
            colors={[theme.skyblue, 'white']}
            style={styles.container}
        >
            <View style={styles.maintop}>
                <TouchableOpacity
                    // 버튼을 클릭하면 Test용 User 계정으로 로그인 하는 버튼
                    // onPress={user}
                >
                    <Text
                        style={styles.account}
                    >
                        user
                        <Fontisto name={"male"} size={25}></Fontisto>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    // 버튼을 클릭하면 Test용 Admin 계정으로 로그인 하는 버튼
                    // onPress={admin}
                    style={styles.account}
                >
                    <Text
                        style={styles.account}
                    >
                        admin
                        <Fontisto name={"spinner-cog"} size={30}></Fontisto>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.serviceName}>
                <Text style={styles.serviceNameText}>
                    Civil Voice
                </Text>
                <TouchableOpacity
                    // 버튼을 클릭하면 게시판으로 이동하는 버튼
                    style={styles.mainbtn}
                    onPress={() => navigation.navigate('Board')}
                >
                    <Text
                        style={styles.mainbtnText}
                    >
                        메인화면 바로가기
                    </Text>
                </TouchableOpacity>
                <View style={styles.govIcon}>
                    <Image
                        source={imagePath}
                    />
                </View>
            </View>
            <View style={styles.mainbottom}>
                <TouchableOpacity
                    style={styles.chatIcon}
                    // 버튼을 클릭시 채팅방으로 이동할 수 있도록
                    onPress={() => navigation.navigate('Chat')}
                >
                    <Fontisto
                        name={"comments"}
                        size={40}
                        color={"white"}
                    />
                </TouchableOpacity>
                <Text style={styles.chatText}>채팅 시작</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    maintop: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 50,
    },
    mainbottom: {
        flex: 2,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    account: {
        fontSize: 30,
        fontWeight: "600",
        color: "white",
    },
    serviceNameText: {
        fontSize: 30,
        fontWeight: "700",
        color: "white",
        marginBottom: 10,
    },
    serviceName: {
        flex: 6,
    },
    mainbtn: {
        width: 200,
        backgroundColor: theme.skyblue,
        borderRadius: 15,
    },
    mainbtnText: {
        padding: 15,
        fontSize: 25,
        fontWeight: "600",
        color: "white",
        textAlign: "center",

    },
    chatIcon: {
        backgroundColor: theme.skyblue,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:100,
    },
    chatText: {
        fontSize: 20,
        fontWeight: "700",
        color: "black",
        marginTop: 5,
    },
    govIcon: {
        marginTop: 170,
        marginRight: 20,
        alignItems:'flex-end',
    },
    govIconStyle: {
        color: "white"
    }
});

export default Home;
