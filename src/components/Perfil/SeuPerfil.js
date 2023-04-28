import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { theme } from "../../theme";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SeuPerfil = () => {
    const navigation = useNavigation();
    const handleCompletarPerfilClick = () => {
        navigation.navigate('CompletarPerfil')
    }
    return (
        <View>
            <Text style={styles.tituloPerfil}>
                Seu perfil
            </Text>
            <View style={styles.containerUsuario}>
                <Ionicons name="person-circle" size={80} color="grey" />
                <View>
                    <Text style={styles.nomeUsuario}>Carolina Magalhães</Text>
                    <Text style={styles.cidadeUsuario}>São Paulo</Text>
                    <View style={styles.containerRating}>
                        <AntDesign name="star" size={24} color="#b0b0b0" />
                        <AntDesign name="star" size={24} color="#b0b0b0" />
                        <AntDesign name="star" size={24} color="#b0b0b0" />
                        <AntDesign name="star" size={24} color="#b0b0b0" />
                        <AntDesign name="star" size={24} color="#b0b0b0" />
                        <Text style={styles.totalRating}>(0)</Text>
                    </View>
                </View>
            </View>
            <View style={styles.linhaBottom}></View>
            <TouchableOpacity style={styles.botaoCompletarPerfil} onPress={handleCompletarPerfilClick}>
                <Text style={styles.botaoTexto}>Completar perfil</Text>
                <AntDesign name="arrowright" size={24} color={theme.palette.secondary.contrastText} />
            </TouchableOpacity>
        </View>
    )
}

export default SeuPerfil