import { StyleSheet } from "react-native";
import { COLORS } from "../../common";
import { calcHeight, calcWidth } from "../../utils";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Primary,
        flex: 1,
    },
    scrollCon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    moviePoster: {
        width: '90%',
        height: calcHeight(600),
        alignSelf: 'center',
    },
    info: {
        fontSize: calcWidth(16),
        color: COLORS.silver,
        fontWeight: '300',
        flexWrap: 'wrap',
        margin: calcHeight(10),
        textAlign: 'center',
    },
    title: {
        fontSize: calcWidth(18),
        color: COLORS.White,
        fontWeight: '600',
        flexWrap: 'wrap',
        marginVertical: calcHeight(10),
        textAlign: 'center',
    },
})