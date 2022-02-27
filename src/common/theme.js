import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export const COLORS = {
    Primary: '#0d253f',
    Secondary: '#01b4e4',
    Tertiary: '#90cea1',
    White: '#FFFFFF',
    Black: '#000000',
    gold: '#FFD700',
    silver: '#C0C0C0',
};

export const SIZES = {
    width,
    height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;