import dynamic from "next/dynamic";
import Head from "next/head";
import { AppProps } from "next/app";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";

// Global Style
import GlobalStyle from "../styles/global";

// Custom Components
const PageHeader = dynamic(() => import("@/components/Page/Header"));
const PageFooter = dynamic(() => import("@/components/Page/Footer"));

function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState("dark");

  const switchTheme = () => {
    setThemeType((lastThemeType) =>
      lastThemeType === "dark" ? "light" : "dark"
    );
  };

  const theme = {
    type: themeType,
    palette: {
      success: "#34d691",
      successLight: "#03ac08",
      successDark: "#5e845d",
    },
  };

  return (
    <RecoilRoot>
      <GeistProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />

        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>

        <Page dotBackdrop={true} style={{ paddingTop: "1rem" }}>
          <PageHeader themeType={themeType} switchTheme={switchTheme} />

          <Page.Content>
            <Component {...pageProps} />
          </Page.Content>

          <PageFooter />
        </Page>
      </GeistProvider>
    </RecoilRoot>
  );
}

export default App;
