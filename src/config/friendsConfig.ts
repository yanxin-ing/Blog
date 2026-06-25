import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
	
	{
		title: "今朝酒",
		imgurl: "https://www.kesazake.top/assets/images/%E8%8A%B1%E3%82%88%E3%82%8A%E5%BC%BE%E4%B8%B8.avif",
		desc: "你好，我是今朝酒。",
		siteurl: "https://www.kesazake.top/",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},

	{
		title: "孤蛍",
		imgurl: "https://www.kohotaru.top/_astro/my_avatar.Cr_QqJX1_1LiwTq.webp",
		desc: "欢迎来到我的秘密小屋",
		siteurl: "https://www.kohotaru.top/",
		tags: ["Blog"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight); // 按权重降序排序
	
};