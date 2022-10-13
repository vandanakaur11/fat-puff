import Layout from "../src/Layout/Layout";
import "../styles/globals.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "react-multi-carousel/lib/styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5a4fcf",
        },
        secondary: {
            main: "#7b0e0e",
        },
        info: {
            main: "#7b0e0e",
        },
    },
});
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </ThemeProvider>
    );
}

export default MyApp;
