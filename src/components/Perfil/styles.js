import { theme } from "../../theme";

export const styles = {
    container: {
        flexDirection: 'column',
        marginHorizontal: 20,
        marginTop: 30,
    },
    tituloPerfil: {
        fontSize: theme.palette.typography.titulo.fontSize,
    },
    containerUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    nomeUsuario: {
        fontWeight: 'bold',
        fontSize: theme.palette.typography.titulo.fontSize,
        paddingBottom: 5
    },
    cidadeUsuario: {
        color: "#b0b0b0",
        fontSize: theme.palette.typography.placeHolder.fontSize,
        paddingBottom: 5
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalRating: {
        marginLeft: 5
    },
    linhaBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginVertical: 25,
    },
    botaoCompletarPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent"
    },
    botaoTexto: {
        color: theme.palette.secondary.contrastText,
        fontSize: theme.palette.typography.button.fontSize,
        fontWeight: 'bold',
        marginRight: 10,
    },
    tituloCapacitacao: {
        fontSize: theme.palette.typography.p2.fontSize
    },
    containerCapacitacoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    textoVermais: {
        color: theme.palette.secondary.contrastText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerInformacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    botaoParceiros: {
        position: 'absolute',
        borderRadius: 5,
        padding: 8,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: "#D48A04"
    },
    botaoCapacitacoes: {
        position: 'absolute',
        borderRadius: 5,
        padding: 8,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: "#3B2D72"
    },
    botaoTextoInformacao: {
        color: theme.palette.primary.contrastText
    },
    containerTextoInformacao: {
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 20,
        marginVertical: 20
    },
    tituloImagemInformacao: {
        color: theme.palette.primary.contrastText,
        fontSize: theme.palette.typography.titulo.fontSize,
        fontWeight: 'bold',
    },
}