import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Noto_Sans_TC } from "next/font/google";

const font = Noto_Sans_TC({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={font.className}>
			<Component {...pageProps} />
		</main>
	);
};

export default MyApp;
