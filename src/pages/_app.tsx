import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Noto_Sans_SC } from "next/font/google";

const font = Noto_Sans_SC({
	subsets: ["latin"],
	weight: ["100"],
	variable: "--font-default",
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={font.className}>
			<Component {...pageProps} />
		</main>
	);
};

export default MyApp;
