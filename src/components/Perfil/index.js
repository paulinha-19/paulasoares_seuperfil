import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import SeuPerfil from "./SeuPerfil";
import CapacitacaoProfissional from "./CapacitacaoProfissional";

const Perfil = () => {
    return (
        <View style={styles.container}>
            <SeuPerfil />
            <CapacitacaoProfissional />
        </View>
    )
}

export default Perfil