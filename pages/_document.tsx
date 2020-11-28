import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { CssBaseline } from "@geist-ui/react";
import { ServerStyleSheet } from "styled-components";
import * as types from "styled-components/cssprop";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styles = CssBaseline.flush();
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
          <meta name="description" content="Near-Earth Objects Viewer" />
          <meta name="keywords" content="NASA, NEO, APOD" />
          <meta name="author" content="Vandré Leal" />
          <meta name="application-name" content="Sentineo" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Sentineo" />
          <meta name="description" content="Near-Earth Objects Viewer" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#555" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#555"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://sentineo.app" />
          <meta name="twitter:title" content="Sentineo" />
          <meta
            name="twitter:description"
            content="Near-Earth Objects Viewer"
          />
          <meta
            name="twitter:image"
            content="https://sentineo.app/icons/android-chrome-192x192.png"
          />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sentineo" />
          <meta property="og:description" content="Near-Earth Objects Viewer" />
          <meta property="og:site_name" content="Sentineo" />
          <meta property="og:url" content="https://sentineo.app" />
          <meta
            property="og:image"
            content="https://sentineo.app/icons/apple-touch-icon.png"
          />

          {/* Font: Space Mono */}
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
