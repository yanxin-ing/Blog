import type { SidebarLayoutConfig } from "../types/sidebarConfig";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "both",
	tabletSidebar: "left",
	showBothSidebarsOnPostPage: true,

	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: false,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 20,
			},
		},
	],

	rightComponents: [
		{
			type: "stats",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "siteInfo",
			enable: true,
			position: "top",
			showOnPostPage: true,
			specificConfig: {
				siteInfo: {
					unknownBuildPlatform: "Unknown CI",
				},
			},
		},
		{
			type: "calendar",
			enable: true,
			showTitle: false,
			position: "sticky",
			showOnPostPage: false,
			specificConfig: {
				calendar: {
					showHeatmap: true,
				},
			},
		},
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],

	mobileBottomComponents: [
		{
			type: "profile",
			enable: true,
			showOnPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			enable: true,
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 20,
			},
		},
		{
			type: "stats",
			enable: true,
			showOnPostPage: true,
		},
		{
			type: "siteInfo",
			enable: true,
			showOnPostPage: true,
			specificConfig: {
				siteInfo: {
					unknownBuildPlatform: "Unknown CI",
				},
			},
		},
	],
};
