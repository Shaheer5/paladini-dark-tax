import Head from "next/head";
import Script from "next/script";
import "../css/style.css";
import "../css/animation.css";
import "../css/aos.css";
import "../css/bootstrap.css";
import "../css/custom_style.css";

// components
import { BootstrapClient } from "@/components/BootstrapClient";
// import { CustomJS } from "@/components/CustomJS";

export const metadata = {
  title: "Paladini Law",
  description: "Paladini Law Detail Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/media/paladini.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/media/paladini.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/media/paladini.ico"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/custom_style.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/animation.css" />
        <link
          rel="preload"
          as="image"
          href="/media/BradPicture.webp"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/media/BradPicture@2x.webp"
          fetchpriority="high"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.5/vivus.min.js" defer></script>
      </Head>
      <body>
        {children}
        <BootstrapClient />
        {/* <CustomJS /> */}
      </body>
    </html>
  );
}
