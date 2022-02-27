import { StyleSheet } from "react-native";
import { calcHeight, calcWidth } from "../../utils";
import { COLORS } from "../../common";

export const styles = StyleSheet.create({
    movieCard: {
        flexDirection: 'row',
        margin: calcHeight(15),
        borderColor: COLORS.Secondary,
        backgroundColor: COLORS.White,
        borderRadius: calcWidth(15),
        borderWidth: 1,
    },
    moviePoster: {
        width: calcWidth(150),
        height: calcHeight(250),
    },
    detailsCon: {
        justifyContent: 'space-between',
        flex: 1,
        margin: calcWidth(15),
    },
    movieTitle: {
        fontSize: calcWidth(20),
        flexWrap: 'wrap',
        color: COLORS.Primary,
    },
    releaseDate: {
        fontSize: calcWidth(12),
        flexWrap: 'wrap',
        color: COLORS.silver,
    },
    rate: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    star: {
        color: COLORS.gold,
    },
    vote: {
        color: COLORS.silver,
    },
    lang: {
        color: COLORS.Black,
        alignSelf: 'center',
    },
    rowCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    empty: {
        fontSize: calcWidth(24),
        color: COLORS.White,
        textAlign: 'center',
        margin: calcWidth(20),
    }
})