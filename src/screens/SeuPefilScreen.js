import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar/index";
import Aviso from "../components/Aviso";
import Perfil from "../components/Perfil";

const SeuPerfilScreen = () => {
    return (
        <View>
            <Header>
                <SearchBar />
            </Header>
            <Aviso />
            <Perfil />
        </View>
    )
}
export default SeuPerfilScreen;
