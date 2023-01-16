import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        border: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            error: string;
            error_secondary: string;
            success: string;
            success_secondary: string;
            success_tertiary: string;
            link: string;

            white: string;
            white_150: string;
            white_200: string;

            gray_100: string;
            gray_150: string;
            gray_200: string;
            gray_210: string;
            gray_220: string;
            gray_230: string;
            gray_250: string;
            gray_300: string;
            gray_400: string;
            gray_500: string;
            gray_800: string;
            gray_900: string;

            black_950: string;
            black: string;

            blue_100: string;
            blue_150: string;
            blue_200: string;
            blue_300: string;
            blue_400: string;
            blue_450: string;
            blue_500: string;
            blue_600: string;
            blue_700: string;
            blue_800: string;
            blue_900: string;
            blue_1000: string;

            navy: string;

            paleGray_100: string;
            paleGray_200: string;
            paleGray_300: string;
            paleGray_400: string;

            text: string;
            placeholder: string;
        };
    }
}
