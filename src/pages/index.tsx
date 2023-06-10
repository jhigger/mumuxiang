import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Mumuxiang</title>
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#ad1d00] to-[#2c058c]">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
					<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
						木目
					</h1>
				</div>
			</main>
		</>
	);
};

export default Home;
