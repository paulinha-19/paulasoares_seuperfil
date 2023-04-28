import { theme } from "../../theme";

export const styles = {
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: theme.palette.warning.light,
        borderColor: theme.palette.warning.light,
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 25,
    },
    textoAviso: {
        fontSize: theme.palette.typography.placeHolder.fontSize,
        fontWeight: theme.palette.typography.placeHolder.fontWeight,
        color: theme.palette.warning.dark
    },
    textoAvisoBold: {
        fontWeight: "bold",
        fontSize: theme.palette.typography.placeHolder.fontSize
    },
    iconWarning: {
        paddingRight: 10
    }

}