import { Balancer } from "react-wrap-balancer";
import locale, { type LocaleOption, type SectionKey } from "~/locale";

const Content = ({
	section,
	localeOption,
}: {
	localeOption: LocaleOption;
	section: SectionKey;
}) => {
	const title = locale[localeOption].sections[section].title;
	const desc = locale[localeOption].sections[section].desc;

	return (
		<div>
			<Balancer>
				<h2 className="font-heading text-[4vw]">{title}</h2>
				<p className="text-[1.75vw]">{desc}</p>
			</Balancer>
		</div>
	);
};

export default Content;
