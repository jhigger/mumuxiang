import locale, { type LocaleOption, type SectionKey } from "~/locale";

const Content = ({
	section,
	localeOption,
}: {
	localeOption: LocaleOption;
	section: SectionKey;
}) => {
	const title = locale[localeOption][section].title;
	const desc = locale[localeOption][section].desc;

	return (
		<div>
			<h2 className="text-[4vw]">{title}</h2>
			<p className="text-[1.75vw]">{desc}</p>
		</div>
	);
};

export default Content;
