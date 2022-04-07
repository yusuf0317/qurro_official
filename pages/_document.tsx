import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;600&family=Nunito:wght@200;300&display=swap" rel="stylesheet"></link>
        </Head>
        <body
          className="bg-neutral-100 text-gray-800 dark:bg-gray-800
        dark:text-white"
        ></body>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
