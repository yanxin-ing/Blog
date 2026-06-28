import type { CoverImageConfig } from "../types/coverImageConfig";

export const coverImageConfig: CoverImageConfig = {
	enableInPost: true,

	randomCoverImage: {
		enable: false,
		apis: [
			"https://t.alcy.cc/pc",
			"https://www.dmoe.cc/random.php",
			"https://uapis.cn/api/v1/random/image?category=acg&type=pc",
		],
		fallback: "assets/images/cover.avif",
		showLoading: false,
	},
};
