export type LocaleOption = keyof typeof locale;
export type SectionKey = keyof (typeof locale)["zh-cn"];

type LocaleType = {
	"zh-cn": {
		hero: {
			title: string;
			desc: string;
		};
		section1: {
			title: string;
			desc: string;
		};
		section2: {
			title: string;
			desc: string;
		};
		section3: {
			title: string;
			desc: string;
		};
		section4: {
			title: string;
			desc: string;
		};
		section5: {
			title: string;
			desc: string;
		};
		footer: {
			title: string;
			a: string;
			desc: string;
		};
	};
	"en-us": {
		hero: {
			title: string;
			desc: string;
		};
		section1: {
			title: string;
			desc: string;
		};
		section2: {
			title: string;
			desc: string;
		};
		section3: {
			title: string;
			desc: string;
		};
		section4: {
			title: string;
			desc: string;
		};
		section5: {
			title: string;
			desc: string;
		};
		footer: {
			title: string;
			a: string;
			desc: string;
		};
	};
};

const locale: LocaleType = {
	"zh-cn": {
		hero: {
			title: "木目AI",
			desc: "彻底改变拍摄方式",
		},
		section1: {
			title: "百变风格，由你定义",
			desc: "输入文字描述或是参考照片，多变造型，你来主宰。",
		},
		section2: {
			title: "一键生成，无限可能",
			desc: "别止步于想象，动动手指，拥有万千可能。",
		},
		section3: {
			title: "即刻呈现，完美照片",
			desc: "真实的质感，精美的画面，一键出片无需再P。",
		},
		section4: {
			title: "一次训练，随心切换",
			desc: "告别传统的拍照流程，好看的照片，无需等待。",
		},
		section5: {
			title: "尽心打造，你的专属",
			desc: "基于独家专利的人像AI技术，针对亚洲面孔表现更为出色。",
		},
		footer: {
			title: "上海潜存网络科技有限公司",
			a: "营业执照",
			desc: " | 增值电信业务经营许可证：沪B2-20230335 | 联系方式：info@mumuxiang.com",
		},
	},
	"en-us": {
		hero: {
			title: "Mumu AI",
			desc: "Revolutionizing the way you take photos",
		},
		section1: {
			title: "Versatile Styles, Defined by You",
			desc: "Describe in text or reference photos, with ever-changing styles under your control.",
		},
		section2: {
			title: "One-Click Generation, Infinite Possibilities",
			desc: "Go beyond imagination and explore a multitude of possibilities with a simple touch.",
		},
		section3: {
			title: "Instant Presentation, Perfect Photos",
			desc: "Realistic texture, exquisite visuals, one-click output without the need for post-processing.",
		},
		section4: {
			title: "One Training, Switch Freely",
			desc: "Say goodbye to traditional photography workflows. Beautiful photos without waiting.",
		},
		section5: {
			title: "Dedicated Creation, Your Exclusive Style",
			desc: "Based on exclusive patented portrait AI technology, outstanding performance for Asian faces.",
		},
		footer: {
			title: "Shanghai QianCheng Network Technology Co Ltd",
			a: "Business License",
			desc: " | Value-added Telecommunications Business License: Hu B2-20230335 | Contact: info@mumuxiang.com",
		},
	},
};

export default locale;
