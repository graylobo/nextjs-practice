import { ThemeProvider } from "styled-components";
import Globals from "../styles/globals";

import type { AppProps } from "next/app";
import theme, { breakPointTheme } from "../styles/theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={{ ...theme, ...breakPointTheme }}>
                <Globals />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
