import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global style
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Nezox - Cyber Security Company React Nextjs Template</title>
      </Head>

      <Component {...pageProps} />

      <GoTop />
    </>
  );
}
