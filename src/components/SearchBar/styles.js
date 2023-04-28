import { theme } from "../../theme";

export const styles = {
    container: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        bottom:50
    },
    textInput: {
        flex: 1,
        marginLeft: 20,
        fontSize: 14,
    },
};