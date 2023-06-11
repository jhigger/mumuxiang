export type SectionKey = keyof (typeof locale)["zh-cn"];

const locale = {
	"zh-cn": {
		hero: {
			title: "木目AI",
			desc: "你的美，刮目“相”看",
			desc2: "彻底改变拍摄方式",
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
	},
	"en-us": {},
};

export default locale;
