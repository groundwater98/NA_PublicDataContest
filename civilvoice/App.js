import Home from "./src/page/Home";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "./src/page/Chat";
import Board from "./src/page/Board";
import {StatusBar} from "expo-status-bar";
import BoardDetail from "./src/component/BoardDetail";

const Stack = createNativeStackNavigator();

export default function App() {

    return (

        <NavigationContainer>
            <StatusBar style={"light"}/>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                />
                <Stack.Screen
                    name="Board"
                    component={Board}
                />
                <Stack.Screen
                    name="BoardDetail"
                    component={BoardDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

