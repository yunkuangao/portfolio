
import profile from './profile.jpg';
import {faAppStore, faDocker, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "yun",
	links: [
		{
			title: "关于",
			link: "#about",
		},
		{
			title: "项目",
			link: "#projects",
		},
		{
			title: "联系",
			link: "#contact",
		},
		{
			title: "链接",
			link: "/links",
		},
	],
}
export const intro = {
	title: "你好，我是yun",
	description: "通过技术了解世界",
	image: profile.src,
	buttons: [
		{
			title: "联系我",
			link: "#contact",
			isPrimary: true,
		},
		// {
		// 	title: "简历",
		// 	link: "#",
		// 	isPrimary: false,
		// },
	],
}

export const about = {
	title: "我是谁",
	description: [
		"我于 2018 年毕业于重庆三峡学院计算机工程专业。 我的职业生涯始于中国传统企业久远银海的 Java 后端开发人员。",
		"科技行业在不断发展，我喜欢在打好基础的同时与它一起成长。 我从同理心的角度开源我的代码——为了未来的开发人员、队友、用户，并且考虑到可访问性。 我也喜欢成为社区的一员，帮助和指导新的开发人员，并支持促进技术多样性的组织。",
		"当我休息的时候，我会专注于我的爱好：写博客、玩游戏、结识新朋友以及拓展我的站群。"
	],
}

export const work = {
	title: "我做什么",
	cards: [
		{
			title: "Java开发(鸽了很久)",
			description: "作为后端开发",
			icons: null,
		},
		{
			title: "Kotlin开发(也快鸽了)",
			description: "作为后端开发",
			icons: null,
		},
		{
			title: "nodejs开发",
			description: "作为后端开发",
			icons: null,
		},
	],
}

export const projects = {
	title: "项目",
	cards: [
		{
			title: "UrlRandom",
			description: "记录url以供随机链接访问",
			icons: [
				{
					icon: faDocker,
					link: "https://hub.docker.com/r/yunkuangao/url-random",
				},
				{
					icon: faGithub,
					link: "https://github.com/yunkuangao/url-random",
				},
			]
		},
		{
			title: "UrlRandom",
			description: "一个kotlin的时间轴数据生成工具",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/yunkuangao/timeline-data",
				},
			]
		},
	],
}

export const contact = {
	title: "保持联系",
	description: "闲聊！ 请不要犹豫，在 https://ele.yka.moe(matrix客户端) 上与 @yun:im.yka.moe 联系。 或者，随时通过电子邮件直接联系 yun@yka.moe",
	buttons: [
		{
			title: "发送邮件",
			link: "mailto:yun@yka.moe",
			isPrimary: true,
		},
		{
			title: "云聊天",
			link: "https://ele.yka.moe",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "yun | 软件工程师 | 自由主义者",
	description: "创建并维护云站群，并与世界时刻保持联系。",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@yun",
	description: "Computer Engineer | Java | Kotlin Developer",
	cards: [
		{
			title: "云站群",
			link: "https://home.yka.moe/",
		},
		{
			title: "Docker",
			link: "https://hub.docker.com/u/yunkuangao/",
		},
		{
			title: "Github",
			link: "https://github.com/yunkuangao/",
		},
	]
}
