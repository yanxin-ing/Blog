import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	switchable: true,
	playerEnable: false,

	src: {
		desktop: "/assets/images/d1.jpg",
		mobile: "/assets/images/M4.jpg",
		playerUrl: [],
	},

	common: {
		dimOpacity: 0.2,
		playerMode: "order",
		homeText: {
			enable: false,
			switchable: true,
			title: "Lovely firefly!",
			titleSize: "3.8rem",
			subtitle: [
				"In Reddened Chrysalis, I Once Rest",
				"From Shattered Sky, I Free Fall",
				"Amidst Silenced Stars, I Deep Sleep",
				"Upon Lighted Fyrefly, I Soon Gaze",
				"From Undreamt Night, I Thence Shine",
				"In Finalized Morrow, I Full Bloom",
			],
			subtitleSize: "1.5rem",
			typewriter: {
				enable: false,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		navbar: {
			transparentMode: "semifull",
			enableBlur: true,
			blur: 5,
		},
		waves: {
			enable: {
				desktop: true,
				mobile: true,
			},
			switchable: true,
		},
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "10%",
			switchable: true,
		},
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "zoom",
			switchable: true,
		},
	},

	banner: {
		position: "0% 20%",
	},

	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		opacity: 0.8,
		blur: 10,
		cardOpacity: 0.5,
	},

	fullscreen: {
		position: "center",
	},
};
