import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompletarPerfil from "../screens/CompletarPerfilScreen";

const MainStack = createStackNavigator();
export default () => {
    return (
        <MainStack.Navigator
            screenOptions={{
            }}
        >
            <MainStack.Screen name="CompletarPerfil" component={CompletarPerfil}></MainStack.Screen>
        </MainStack.Navigator>
    )
}