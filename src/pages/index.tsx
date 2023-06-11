import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import locale, { type SectionKey as SectionIndex } from "~/locale";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Mumuxiang</title>
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="icon" href="/mumu-logo-512.png" />
			</Head>
			<div className="relative min-h-[50vh] ">
				<header className="absolute p-10">
					<Link href="/">
						<img
							src="mumu-logo-512.png"
							alt="logo"
							className="h-16 w-16"
						/>
					</Link>
				</header>
				<Hero />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<footer className="bg-zinc-900 px-12 py-24">
					<div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center text-sm text-white/50 lg:text-lg">
						<p>&copy; 2023 Lorem, ipsum dolor.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quas incidunt magni consequatur pariatur
							impedit maxime minus odio suscipit, culpa
							asperiores!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nulla amet fugit voluptate autem vel adipisci!
						</p>
					</div>
				</footer>
			</div>
		</>
	);
};

const Section5 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1">
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section5" />
				</div>
			</div>
		</section>
	);
};

const Section4 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-r from-[#fbf0d2]">
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section4" />
					<div className="flex flex-wrap justify-center gap-4 lg:justify-start">
						{[...Array(5).keys()].map((i) => {
							return (
								<img
									key={i}
									src="https://placehold.co/80?text=Image"
									alt="illustration"
									className="w-1/4 rounded-xl lg:w-1/6"
								/>
							);
						})}
					</div>
				</div>
			</div>
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

const Section3 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-r from-[#d5d6f2]">
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section3" />
				</div>
			</div>
		</section>
	);
};

const Section2 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#c9f6f0]">
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section2" />
					<div className="flex flex-wrap justify-center gap-4 lg:justify-start">
						{[...Array(5).keys()].map((i) => {
							return (
								<img
									key={i}
									src="https://placehold.co/80?text=Image"
									alt="icon"
									className="w-1/4 rounded-full lg:w-1/6"
								/>
							);
						})}
					</div>
				</div>
			</div>
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

const Section1 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1">
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section1" />
					<div className="flex flex-wrap justify-center gap-4 lg:flex-initial lg:justify-start">
						{[...Array(5).keys()].map((i) => {
							return (
								<img
									key={i}
									src="https://placehold.co/80?text=Image"
									alt="avatar"
									className="w-1/4 rounded-xl lg:w-1/6"
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const Content = ({ section }: { section: SectionIndex }) => {
	const title = locale["zh-cn"][section].title;
	const desc = locale["zh-cn"][section].desc;

	return (
		<div>
			<h2 className="text-[4vw]">{title}</h2>
			<p className="text-[1.75vw]">{desc}</p>
		</div>
	);
};

const Hero = () => {
	const title = locale["zh-cn"].hero.title;
	const desc = locale["zh-cn"].hero.desc;
	const desc2 = locale["zh-cn"].hero.desc2;

	return (
		<section className="flex min-h-screen flex-col items-center justify-center gap-[5vw] bg-gradient-to-br from-[#59D1E9] via-[#D87DDD] to-[#F8C63A] px-2 py-36 sm:px-8 lg:flex-row lg:gap-[10vw] lg:px-14">
			<div className="aspect-[9/19.5] h-[720px] w-full overflow-hidden rounded-xl border-2 sm:w-[350px]">
				<img
					src="https://placehold.co/350x720?text=video"
					alt="section image"
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-center gap-4 lg:items-end">
					<h1 className="text-7xl md:text-8xl lg:text-9xl">
						{title}
					</h1>
					<p className="text-xl md:text-3xl lg:text-5xl">{desc}</p>
					<p className="text-xl md:text-3xl lg:text-5xl">{desc2}</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<img
						src="https://placehold.co/128x128?text=QR"
						alt="qr code"
						className="aspect-square rounded-xl border-2 border-black"
					/>
					<div className="grid grid-rows-2 gap-4">
						<a href="#" className="h-14">
							<img
								src="appstore.png"
								alt="appstore"
								className="h-full"
							/>
						</a>
						<a href="#" className="h-14">
							<img
								src="android.png"
								alt="android"
								className="h-full "
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
