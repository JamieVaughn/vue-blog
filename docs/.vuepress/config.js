const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'yield ✴️ star',
	description: 'A thought generator about programming practices',
	base: '/blog/',
	themeConfig: {
		nav: [
			{
				text: 'Menu',
				ariaLabel: 'Menu',
				items: [
					{ text: 'Home', link: '/' }, 
					{ text: 'Posts', link: '/posts/' },
					{ text: 'Archive', link: '/archive/' },
					{ text: 'Portfolio', link: 'https://wjv.io' },
					{ text: 'Repo', link: 'https://github.com/jamievaughn/blog' },
					// { text: 'Manage Cookies', link: "./", action: "window.Metomic('ConsentManager:show')", rel: false }
				]
			}
		],
		logo: '/logo.png',
		pageSize: 20,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-162434857-1' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
	// 	['script', {
	// 		src: "https://config.metomic.io/config.js?id=prj:c95a1ed6-f111-4069-bbd3-c61bc3c3fe06", 
	// 		crossorigin: 'anonymous',
	// 		charset: 'utf-8'
	// 	}],
	// 	['script', {
	// 		src: 'https://consent-manager.metomic.io/embed.js', 
	// 		crossorigin: 'anonymous',
	// 		charset: 'utf-8'
	// 	}],
	// 	['script', {
	// 		async: true,
	// 		src: 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X'
	// 	}],
	// 	['script', {}, `
	// 		window.dataLayer = window.dataLayer || [];
	// 		function gtag(){dataLayer.push(arguments);}
	// 		gtag('js', new Date());
		
	// 		gtag('config', 'UA-XXXXXXXXX-X');
	// 	`],
	]
}
