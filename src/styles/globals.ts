import { createGlobalStyle, css } from "styled-components";
import { down } from "styled-breakpoints";

const GlobalStyle = createGlobalStyle(
    ({ theme: { colors } }) => css`
        :root {
            min-width: 375px;
            font-size: 16px;
            --primary: red;
            --secondary: #0a84ff;
            --tertiary: #56ace7;
            --error: #e70000;
            --error-secondary: #ff3b30;
            --success: #48bb78;
            --success-secondary: #04c99d;
            --success-tertiary: #34c759;
            --link: #2b5e8c;
            --white: #fff;
            --white-150: #f6f6f9;
            --white-200: #f5f5f5;
            --gray-100: #fafafa;
            --gray-150: #f2f2f2;
            --gray-200: #e1e1e1;
            --gray-210: #d6d5de;
            --gray-220: #d7d7dd;
            --gray-230: #d8d8d8;
            --gray-250: #cfcfcf;
            --gray-300: #bdbdbd;
            --gray-400: #909090;
            --gray-500: #606060;
            --gray-800: #2c2c2c;
            --gray-900: #252526;
            --black-950: #000a12;
            --black: #000;
            --blue-100: #f7f9fc;
            --blue-150: #f5f9fc;
            --blue-200: #eff4fb;
            --blue-300: #e4e9f2;
            --blue-400: #d8dbe1;
            --blue-450: #c5cee0;
            --blue-500: #b7c2d8;
            --blue-600: #8f9bb3;
            --blue-700: #718096;
            --blue-800: #2e3a59;
            --blue-900: #262d40;
            --navy: #0a1220;
            --pale-gray-100: #dad9e2;
            --pale-gray-200: #9b99a9;
            --pale-gray-300: #5f5d70;
            --pale-gray-400: #35343d;

            --swiper-theme-color: white;
            --swiper-navigation-size: 35px;
        }

        *,
        *:before,
        *:after {
            box-sizing: border-box;
        }

        * {
            box-sizing: border-box;
            font-family: "Roboto", "IBM Plex Sans", "Optimus-Princeps",
                sans-serif;
            white-space: pre-line;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        p {
            margin: 0;
        }

        figure {
            width: 100% !important;
            margin: 0;
        }
        img {
            width: 100%;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-user-drag: none;
        }
        // cursor
        button,
        a {
            cursor: pointer;
            &:hover,
            &:active {
                opacity: 0.8;
            }
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        html,
        body {
            width: 100%;
            padding: 0;
            margin: 0;
            font-family: "Roboto", "IBM Plex Sans", "Optimus-Princeps",
                sans-serif;
        }

        #__next {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        header {
            z-index: 999;

            height: 88px;
            width: 100%;
            margin: 0;
            padding: 20px calc((100% - 1220px) / 2);

            box-shadow: 1px 0 10px rgb(0 0 0 / 10%);
            background: ${colors.white};
            color: #000a12;

            display: flex;
            align-items: center;

            ${down("breakPoint")} {
                height: 64px;

                box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.08);
            }
        }

        main {
            flex: 1;
            background: #f6f6f9;
        }

        footer {
            width: 100%;
            margin: auto;
            background: #526582;
            color: ${colors.white};
        }

        a {
            color: ${colors.primary};
        }

        label {
            color: ${colors.text};
            font-size: 1rem;
            line-height: 1.25;
        }

        input {
            padding: 0;
            border: none;
            background: transparent;
            color: ${colors.text};
            caret-color: ${colors.primary};
            font-size: 1rem;
        }

        input:active,
        input:focus,
        input:focus-visible {
            border: none;
            outline: 0;
        }

        input ::placeholder {
            font-size: 1rem;
            line-height: 1.5;
        }

        input[type="checkbox"] {
            width: 16px;
            height: 16px;
            border-radius: 2px;
            border: solid 1px #dad9e2;
            background: ${colors.white};
        }

        input[type="checkbox"]:checked {
            background: ${colors.white} no-repeat center 16px;
        }

        /* button {
            padding: 0;
            border: none;
            background: none;
            color: ${colors.text};
            font-size: 1rem;
            white-space: nowrap;
        } */

        button.link:hover,
        button.link:active {
            color: ${colors.link};
        }

        button.primary {
            background: ${colors.primary};
            color: ${colors.white};
        }

        button.primary:hover,
        button.primary:active {
            opacity: 0.8;
        }

        button.default {
            padding: 4px 27px;
            color: white;
            border-radius: 2px;
            border: solid 1px #dad9e2;
            background-color: #dad9e2;
        }

        .slick-slider,
        .slick-list,
        .slick-track,
        .slick-slide,
        .slick-slide > div {
            height: 100%;
        }
    `
);
export default GlobalStyle;
