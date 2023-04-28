import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const CapacitacaoProfissional = () => {
    return (
        <View >
            <View style={styles.containerCapacitacoes}>
                <Text style={styles.tituloCapacitacao}>
                    Capacitações profissionais
                </Text>
                <TouchableOpacity >
                    <Text style={styles.textoVermais}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerInformacao}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_960_720.jpg' }}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.botaoParceiros}>
                        <Text style={styles.botaoTextoInformacao}>Parceiros</Text>
                    </TouchableOpacity>
                    <View style={styles.containerTextoInformacao}>
                        <Text style={styles.tituloImagemInformacao}>
                            Diabetes: alimentos
                            <Text> para evitar.</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1608451344486-ca608cbfc507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.botaoCapacitacoes}>
                        <Text style={styles.botaoTextoInformacao}>Capacitações</Text>
                    </TouchableOpacity>
                    <View style={styles.containerTextoInformacao}>
                        <Text style={styles.tituloImagemInformacao}>
                            Como ministrar doses
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default CapacitacaoProfissional