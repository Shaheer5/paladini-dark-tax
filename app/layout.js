import Head from "next/head";
import "../css/style.css";
import "../css/animation.css";
import "../css/aos.css";
import "../css/bootstrap.css";
import "../css/custom_style.css";

// components
import { BootstrapClient } from "@/components/BootstrapClient";

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
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
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
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#11365a" />
        <title>{metadata.title}</title>
      </Head>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
