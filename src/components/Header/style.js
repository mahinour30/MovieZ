import { StyleSheet } from "react-native";
import { calcHeight, calcWidth } from "../../utils";
import { COLORS } from "../../common";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.Secondary,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: calcHeight(15),
        marginBottom: calcHeight(15),
        flexDirection: 'row',
    },
    headerText: {
        color: COLORS.Primary,
        fontSize: calcWidth(18),
    },
    headerTextCon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    favIcon: {
        marginEnd: calcWidth(15),
        alignSelf: 'center',
    }
})