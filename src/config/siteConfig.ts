import type { SiteConfig } from "@/types/siteConfig";

const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "陋隅",
	subtitle: "寄宿喜怒哀乐",
	site_url: "https://ataka.top",
	description:
		"这是这个人：“阿獭佧”的个人博客，他会在这里分享一些文字、艺术、游戏、音乐相关的内容",
	keywords: [
		"family",
		"ACG",
		"music",
		"Reflections",
		"博客",
		"技术博客",
		"静态博客",
	],

	themeColor: {
		hue: 330,
		fixed: false,
		defaultMode: "light",
	},

	pageWidth: 100,

	card: {
		border: true,
		followTheme: false,
	},

	favicon: [
		{
			src: "/assets/images/Icon.png",
			theme: "dark",
			sizes: "32x32",
		},
	],

	navbar: {
		logo: {
			type: "image",
			value: "/assets/images/sakura.png",
			alt: "🍀",
		},
		title: "aTaKa",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},

	siteStartDate: "2026-01-01",
	timezone: "Asia/Shanghai",

	pages: {
		friends: true,
		sponsor: false,
		guestbook: false,
		bangumi: false,
		gallery: true,
		anime: false,
	},

	categoryBar: true,
	foldArticle: true,

	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: true,
			columnWidth: 320,
		},
	},

	post: {
		rehypeCallouts: {
			theme: "github",
			enablePythonMarkdownAdmonitions: false,
		},
		showLastModified: true,
		outdatedThreshold: 30,
		sharePoster: true,
		generateOgImages: false,
	},

	bangumi: {
		userId: "1163581",
		mode: "dynamic",
		apiUrl: "https://bgmapi.anibt.net",
		subjectBaseUrl: "https://bgmmi.anibt.net/subject/",
		categoryOrder: ["anime", "book", "music", "game"],
	},

	anime: {
		bilibili: {
			uid: "",
		},
	},

	pagination: {
		postsPerPage: 10,
	},

	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [],
	},

	lang: SITE_LANG,
};
