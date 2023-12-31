const localeKeys = ["zh-cn"] as const;
export type LocaleOption = (typeof localeKeys)[number];

const sectionKeys = [
	"section1",
	"section2",
	"section3",
	"section4",
	"section5",
] as const;
export type SectionKey = (typeof sectionKeys)[number];

type LocaleType = Record<
	LocaleOption,
	{
		hero: {
			title: string;
			desc: string;
			subtext: string;
		};
		sections: Record<
			SectionKey,
			{
				title: string;
				desc: string;
			}
		>;
		footer: {
			p1: string;
			a: string;
			p2: string;
		};
	}
>;

const locale: LocaleType = {
	"zh-cn": {
		hero: {
			title: "木目AI",
			desc: "彻底改变拍摄方式 一键生成精美照片",
			subtext: "即将上线 敬请期待",
		},
		sections: {
			section1: {
				title: "百变风格 由你定义",
				desc: "输入文字描述或是参考照片 多变造型 你来主宰",
			},
			section2: {
				title: "一次AI模型训练 多变应用场景",
				desc: "告别传统的拍摄流程 好看的照片 无需等待",
			},
			section3: {
				title: "一键生成 无限可能",
				desc: "别止步于想象 动动手指 拥有万千可能",
			},
			section4: {
				title: "即刻呈现 精美照片",
				desc: "真实的质感 精美的画面 一键出片无需再P",
			},
			section5: {
				title: "尽心打造 你的专属",
				desc: "基于独家专利的人像AI技术 针对亚洲面孔表现更为出色",
			},
		},
		footer: {
			p1: "上海潜存网络科技有限公司",
			a: "营业执照",
			p2: " | 增值电信业务经营许可证：沪B2-20230335 | 联系方式：info@mumuxiang.com",
		},
	},
};

export default locale;
