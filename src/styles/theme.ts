import { DefaultTheme } from "styled-components";
import { createTheme } from "styled-breakpoints";

export const breakPointTheme = createTheme({
    breakPoint: "601px",
    mobile: "601px",
    tablet: "992px",
    pc: "1220px",
});

const theme: DefaultTheme = {
    border: "solid 1px rgba(53, 52, 61, 0.04)",
    colors: {
        primary: "red",
        secondary: "#0a84ff",
        tertiary: "#56ace7",
        error: "#E70000",
        error_secondary: "#ff3b30",
        success: "#48BB78",
        success_secondary: "#04c99d",
        success_tertiary: "#34c759",
        link: "#1E90FF",

        white: "#FFFFFF",
        white_150: "#f6f6f9",
        white_200: "#f5f5f5",

        gray_100: "#FAFAFA",
        gray_150: "#F2F2F2",
        gray_200: "#E1E1E1",
        gray_210: "#d6d5de",
        gray_220: "#d7d7dd",
        gray_230: "#d8d8d8",
        gray_250: "#CFCFCF",
        gray_300: "#BDBDBD",
        gray_400: "#909090",
        gray_500: "#606060",
        gray_800: "#2c2c2c",
        gray_900: "#252526",

        black_950: "#000a12",
        black: "#000000",

        blue_100: "#F7F9FC",
        blue_150: "#F5F9FC",
        blue_200: "#EFF4FB",
        blue_300: "#E4E9F2",
        blue_400: "#D8DBE1",
        blue_450: "#C5CEE0",
        blue_500: "#B7C2D8",
        blue_600: "#8F9BB3",
        blue_700: "#718096",
        blue_800: "#2E3A59",
        blue_900: "#262D40",
        blue_1000: "#0A1220",

        navy: "#0a1220",

        paleGray_100: "#dad9e2",
        paleGray_200: "#9b99a9",
        paleGray_300: "#5f5d70",
        paleGray_400: "#35343d",

        text: "yellow",
        placeholder: "#DAD9E2",
    },
};

export default theme;
