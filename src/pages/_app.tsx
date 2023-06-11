import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";

const headingFont = localFont({
	src: "./CangErYuMoW01-2.ttf",
	weight: "400",
	variable: "--font-heading",
});

const font = Noto_Sans_SC({
	subsets: ["latin"],
	weight: ["100"],
	variable: "--font-default",
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={`${font.className} ${headingFont.variable}`}>
			<Component {...pageProps} />
		</main>
	);
};

export default MyApp;
