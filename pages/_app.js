import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "@vime/core/themes/default.css";
import "@vime/core/themes/light.css";

import Seo from "../src/components/Common/Seo";
import Layout from "../src/components/Common/Layout";
import ScrollTop from "../src/components/Common/ScrollTop";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Seo />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
          <Layout key={router.route}>
            <Component {...pageProps} />
            <ScrollTop />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
