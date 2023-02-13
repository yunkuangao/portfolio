
import profile from './profile.jpg';
import {faAppStore, faDocker, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "cloud",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Cloud",
	description: "Learn about the world through technology.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "#",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from Chongqing Three Gorges University National University of Science and Technology (CTGU) in 2018 with a degree in Computer Engineering. I started my career as a Java backend developer working for Jiuyuan Yinhai, a traditional enterprise located in China.",
		"The tech industry is constantly evolving, and I love being able to grow with it while building on the foundations. I open source my code from an empathy standpoint - for future developers, teammates, users, and with accessibility in mind. I also enjoy being part of the community, helping and mentoring new developers, and supporting organizations that promote diversity in technology.",
		"When I'm not programming, I focus on my hobbies: blogging, playing games, meeting people, and growing my network."
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Java Development",
			description: "I code the backend in Java.",
			icons: null,
		},
		{
			title: "Kotlin Development",
			description: "I create any funny program using Kotlin.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "UrlRandom",
			description: "A web program that records urls for random access when needed.",
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
	],
}

export const contact = {
	title: "Get in touch",
	description: "Tea party! Please don't hesitate to post at https://flarum.yunkuangao.com. Alternatively, feel free to contact yun@yunkuangao.com directly via email.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:yun@yunkuangao.com",
			isPrimary: true,
		},
		{
			title: "Post Topic",
			link: "https://flarum.yunkuangao.com",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Cloud | Computer Engineer | Java | Kotlin developer",
	description: "I create websites and applications. I graduated from Chongqing Three Gorges University (NUSTCTGU) in 2018 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@Cloud",
	description: "Computer Engineer | Java | Kotlin Developer",
	cards: [
		{
			title: "My website",
			link: "https://yunkuangao.me/",
		},
		{
			title: "Image Hosting",
			link: "https://yunkuangao.com/",
		},
		{
			title: "Docker home",
			link: "https://hub.docker.com/u/yunkuangao/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/yunkuangao/",
		},
	]
}