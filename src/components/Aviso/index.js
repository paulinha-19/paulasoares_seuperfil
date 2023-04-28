import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { theme } from "../../theme";

const Aviso = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="warning-outline" style={styles.iconWarning} size={24} color={theme.palette.warning.dark} />
            <Text style={styles.textoAviso}>
                <Text style={styles.textoAvisoBold}>Completar perfil</Text>
                <Text>: Preencha suas informações para encontrar pacientes.</Text>
            </Text>
        </View>
    )
}

export default Aviso //