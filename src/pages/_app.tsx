import { type AppType } from "next/dist/shared/lib/utils";
import { Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import "~/styles/globals.css";

const font = Noto_Sans_SC({
	subsets: ["latin"],
	weight: ["100"],
	variable: "--font-default",
});

const headingFont = localFont({
	src: "../assets/OPPOSans-L-2.ttf",
	weight: "100",
	variable: "--font-heading",
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={`${font.className} ${headingFont.variable}`}>
			<Head>
				<title>木目 AI</title>
				<meta name="description" content="木目，你的美，刮目“相”看" />
				<link rel="canonical" href="https://mumuxiang.com/" />
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="icon" href="/logo.webp" />
			</Head>
			<Component {...pageProps} />
		</main>
	);
};

export default MyApp;
