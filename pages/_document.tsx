import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { CssBaseline } from '@geist-ui/react'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styles = CssBaseline.flush()
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/icons/favicon.ico" rel="icon" />
          <meta content="Near-Earth Objects Viewer" name="description" />
          <meta content="NASA, NEO, APOD" name="keywords" />
          <meta content="Vandré Leal" name="author" />
          <meta content="Sentineo" name="application-name" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="default" name="apple-mobile-web-app-status-bar-style" />
          <meta content="Sentineo" name="apple-mobile-web-app-title" />
          <meta content="Near-Earth Objects Viewer" name="description" />
          <meta content="telephone=no" name="format-detection" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="/icons/browserconfig.xml" name="msapplication-config" />
          <meta content="#555" name="msapplication-TileColor" />
          <meta content="no" name="msapplication-tap-highlight" />
          <meta content="#000000" name="theme-color" />
          <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/manifest.json" rel="manifest" />
          <link color="#555" href="/icons/safari-pinned-tab.svg" rel="mask-icon" />
          {/* Twitter */}
          <meta content="summary" name="twitter:card" />
          <meta content="https://sentineo.app" name="twitter:url" />
          <meta content="Sentineo" name="twitter:title" />
          <meta content="Near-Earth Objects Viewer" name="twitter:description" />
          <meta content="https://sentineo.app/icons/android-chrome-192x192.png" name="twitter:image" />
          {/* Open Graph */}
          <meta content="website" property="og:type" />
          <meta content="Sentineo" property="og:title" />
          <meta content="Near-Earth Objects Viewer" property="og:description" />
          <meta content="Sentineo" property="og:site_name" />
          <meta content="https://sentineo.app" property="og:url" />
          <meta content="https://sentineo.app/icons/apple-touch-icon.png" property="og:image" />
          {/* Font: Space Mono */}
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
