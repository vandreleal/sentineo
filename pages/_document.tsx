import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import { Fragment } from "react"

import { CssBaseline } from "@geist-ui/core"
import packageData from "package.json"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: [
        <Fragment key="initial">
          {initialProps.styles}
          {styles}
        </Fragment>,
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/icons/favicon.ico" rel="icon" />
          <meta content={packageData.description} name="description" />
          <meta content={packageData.keywords.toString()} name="keywords" />
          <meta content={packageData.author} name="author" />
          <meta content={packageData.displayName} name="application-name" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta
            content="default"
            name="apple-mobile-web-app-status-bar-style"
          />
          <meta
            content={packageData.displayName}
            name="apple-mobile-web-app-title"
          />
          <meta content={packageData.description} name="description" />
          <meta content="telephone=no" name="format-detection" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta
            content="/icons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="#555" name="msapplication-TileColor" />
          <meta content="no" name="msapplication-tap-highlight" />
          <meta content="#000000" name="theme-color" />
          <link
            href="/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/manifest.json" rel="manifest" />
          <link
            color="#555"
            href="/icons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          {/* Twitter */}
          <meta content="summary" name="twitter:card" />
          <meta content={packageData.url} name="twitter:url" />
          <meta content={packageData.displayName} name="twitter:title" />
          <meta content={packageData.description} name="twitter:description" />
          <meta
            content="/icons/android-chrome-192x192.png"
            name="twitter:image"
          />
          {/* Open Graph */}
          <meta content="website" property="og:type" />
          <meta content={packageData.displayName} property="og:title" />
          <meta content={packageData.description} property="og:description" />
          <meta content={packageData.displayName} property="og:site_name" />
          <meta content={packageData.url} property="og:url" />
          <meta content="/icons/apple-touch-icon.png" property="og:image" />
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
    )
  }
}

export default MyDocument
