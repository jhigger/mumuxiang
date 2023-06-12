import { type LocaleOption } from "~/locale";
import Content from "./Content";

export const Section1 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1">
			<img
				src="images/image1.jpg"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section1" {...props} />
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

export const Section2 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#c9f6f0]">
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section2" {...props} />
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
				src="images/image2.jpg"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

export const Section3 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-r from-[#d5d6f2]">
			<img
				src="images/image3.jpg"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section3" {...props} />
				</div>
			</div>
		</section>
	);
};

export const Section4 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#fbf0d2]">
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section4" {...props} />
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
				src="images/image4.jpg"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

export const Section5 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-r from-rose-200">
			<img
				src="images/image5.jpg"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section5" {...props} />
				</div>
			</div>
		</section>
	);
};
