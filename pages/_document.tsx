import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
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
      <Html lang="en-US">
        <title>Pedro Henrique | Fullstack developer | Frontend | Backend</title>
        <Head>
        {process.env.NODE_ENV === "production" && (
            <>
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-4859XKBX83"
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-4859XKBX83');
                `}
              </Script>
            </>
          )}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta property="og:type" content="website" />
          <meta
            name="google-site-verification"
            content="QknoFbNAM4A4QAmJVKJvaMROn2gasuAII8y7Q_8XRls"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta property="og:site_name" content="Pedro Henrique's Portfolio" />
          <meta
            property="og:title"
            content="Pedro Henrique | Fullstack developer | Frontend | Backend"
          />
          <meta
            property="og:description"
            content="This is a Pedro Henrique Santos Braga's portfolio. I'm a Fullstack Developer. Here you can find my projects, resume and contact information. Enjoy! :)"
          />
          <meta
            name="description"
            content="This is a Pedro Henrique Santos Braga's portfolio. I'm a Fullstack Developer. Here you can find my projects, resume and contact information. Enjoy! :)"
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
