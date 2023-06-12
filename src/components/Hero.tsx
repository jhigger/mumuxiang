import { Balancer } from "react-wrap-balancer";
import locale, { type LocaleOption } from "~/locale";

const Hero = ({ localeOption }: { localeOption: LocaleOption }) => {
	const title = locale[localeOption].hero.title;
	const desc = locale[localeOption].hero.desc;

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
				<div className="flex flex-col items-center gap-4 text-center lg:max-w-[99%]">
					{localeOption === "zh-cn" ? (
						<img
							src="logo name.png"
							alt="mumuxiang ai"
							className="w-1/2"
						/>
					) : (
						<h1 className="font-heading text-6xl md:text-7xl lg:text-8xl">
							{title}
						</h1>
					)}
					<p className="text-lg md:text-2xl lg:text-4xl">
						<Balancer>{desc}</Balancer>
					</p>
				</div>
				{/* No app yet */}
				{/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
