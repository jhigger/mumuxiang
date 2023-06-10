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
			<div className="relative min-h-[50vh] ">
				<header className="absolute p-10">
					<img
						src="https://placehold.co/145x47?text=LOGO"
						alt="logo"
					/>
				</header>
				<Hero />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<footer className="bg-zinc-900 py-24">
					<div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center text-lg text-white/50">
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
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#Section5]">
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-4">
					<p className="text-7xl">Lorem ipsum dolor</p>
					<p className="text-5xl">Lorem ipsum dolor sit.</p>
					<div className="flex gap-4">
						{[...Array(5).keys()].map((i) => {
							return (
								<img
									src="https://placehold.co/80?text=Image"
									alt="logo"
									className="rounded-xl"
								/>
							);
						})}
					</div>
				</div>
			</div>
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="logo"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

const Section4 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1  bg-gradient-to-r from-[#d5d6f2]">
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="logo"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-4">
					<p className="text-7xl">Lorem ipsum dolor</p>
					<p className="text-5xl">Lorem ipsum dolor sit.</p>
				</div>
			</div>
		</section>
	);
};

const Section3 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#c9f6f0]">
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-4">
					<p className="text-7xl">Lorem ipsum dolor</p>
					<p className="text-5xl">Lorem ipsum dolor sit.</p>
					<div className="flex gap-4">
						{[...Array(5).keys()].map((i) => {
							return (
								<img
									src="https://placehold.co/80?text=Image"
									alt="logo"
									className="rounded-full"
								/>
							);
						})}
					</div>
				</div>
			</div>
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="logo"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

const Section2 = () => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1">
			<img
				src="https://placehold.co/900x900?text=Image"
				alt="logo"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-4">
					<p className="text-7xl">Lorem ipsum dolor</p>
					<p className="text-5xl">Lorem ipsum dolor sit.</p>
					<div className="flex gap-4">
						{[...Array(5).keys()].map((i) => {
							return (
								<img
									src="https://placehold.co/80?text=Image"
									alt="logo"
									className="rounded-xl"
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const Hero = () => {
	return (
		<section className="flex h-max items-center justify-evenly gap-[10vw] bg-gradient-to-br from-[#fdb4cd] to-[#c9f6f0] p-36">
			<div className="aspect-[9/16] h-[720px] w-[350px] rounded-xl border-2">
				<img
					src="https://placehold.co/350x720?text=video"
					alt="logo"
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-end gap-4">
					<img
						src="https://placehold.co/600x150?text=LOGO"
						alt="logo"
					/>
					<p className="text-7xl">Lorem ipsum</p>
				</div>
				<div className="flex items-center justify-center gap-4">
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
