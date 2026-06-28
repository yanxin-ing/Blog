import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

export const friendsPageConfig: FriendsPageConfig = {
	title: "",
	description: "",
	showCustomContent: true,
	showComment: false,
	randomizeSort: false,
};

export const friendsConfig: FriendLink[] = [
	{
		title: "今朝酒",
		imgurl: "https://www.kesazake.top/assets/images/%E8%8A%B1%E3%82%88%E3%82%8A%E5%BC%BE%E4%B8%B8.avif",
		desc: "你好，我是今朝酒。",
		siteurl: "https://www.kesazake.top/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "孤蛍",
		imgurl: "https://www.kohotaru.top/_astro/my_avatar.Cr_QqJX1_1LiwTq.webp",
		desc: "欢迎来到我的秘密小屋",
		siteurl: "https://www.kohotaru.top/",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
];

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
