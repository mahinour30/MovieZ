import { StyleSheet } from "react-native";
import { calcWidth } from "../../utils";
import { COLORS } from "../../common";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Primary,
        flex: 1,
    },
    search: {
        backgroundColor: COLORS.Secondary,
        padding: calcWidth(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        backgroundColor: COLORS.White,
        borderRadius: calcWidth(12),
        padding: calcWidth(5),
        width: '90%',
    },
    favorite: {
        color: COLORS.Primary,
    },
    activityIndicator: {
        justifyContent: 'center',
        color: COLORS.Primary,
        flex: 1,
    }
})