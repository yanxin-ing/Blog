import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "お知らせ", // 公告标题
	content: "哼哼，假期，我已归来!", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "戳我！", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};
