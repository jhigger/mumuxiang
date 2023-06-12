import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import {
	Section1,
	Section2,
	Section3,
	Section4,
	Section5,
} from "~/components/Sections";
import { type LocaleOption } from "~/locale";

const Home: NextPage = () => {
	const locale: LocaleOption = "zh-cn";

	return (
		<>
			<Head>
				<title>木目 AI</title>
				<meta name="description" content="木目，你的美，刮目“相”看" />
				<link rel="canonical" href="https://mumuxiang.com/" />
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="icon" href="/logo.webp" />
			</Head>
			<div className="relative min-h-[50vh] font-default [word-spacing:1rem]">
				<header className="absolute p-10">
					<Link href="/">
						<div className="flex items-center ">
							<img
								src="logo.webp"
								alt="logo"
								className="h-24 w-24 rounded-xl bg-white"
							/>
							<img
								src="logo name.png"
								alt="logo name"
								className="h-6 px-6"
							/>
						</div>
					</Link>
				</header>
				<Hero localeOption={locale} />
				<Section1 localeOption={locale} />
				<Section2 localeOption={locale} />
				<Section3 localeOption={locale} />
				<Section4 localeOption={locale} />
				<Section5 localeOption={locale} />
				<Footer localeOption={locale} />
			</div>
		</>
	);
};

export default Home;
