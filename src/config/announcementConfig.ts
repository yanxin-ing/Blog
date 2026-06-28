import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "お知らせ",
	content: "哼哼，假期，我已归来!",
	closable: true,
	link: {
		enable: true,
		text: "戳我！",
		url: "/about/",
		external: false,
	},
};
