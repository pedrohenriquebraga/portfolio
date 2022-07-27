import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <title>Pedro Henrique | Fullstack developer | Frontend | Backend</title>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="QknoFbNAM4A4QAmJVKJvaMROn2gasuAII8y7Q_8XRls" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          property="og:site_name"
          content="Pedro Henrique Santos Braga's Portfolio"
        />
        <meta
          property="og:title"
          content="Pedro Henrique | Fullstack developer | Frontend | Backend"
        />
        <meta
          property="og:description"
          content="This is a Pedro Henrique Santos Braga's portfolio. Here you can find my projects, resume and contact information. Enjoy! :)"
        />
        <meta
          name="description"
          content="This is a Pedro Henrique's portfolio. Here you can find my projects, resume and contact information. Enjoy! :)"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
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
