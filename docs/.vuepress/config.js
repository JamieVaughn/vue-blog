const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'yield ✴️star',
	description: 'A thought generator about programming practices',
	base: '/blog/',
	themeConfig: {
		repo: 'https://github.com/jamievaughn/blog',
		repoLabel: 'Repo',
		nav: [
			{ text: 'Home', link: '/' }, 
			{ text: 'Posts', link: '/posts/' },
			{ text: 'Archive', link: '/archive/' },
			{ text: 'Portfolio', link: 'https://wjv.io' }
		],
		logo: '/logo.png',
		pageSize: 5,
		startPage: 0
	},
	// plugins: [
	// 	[
	// 		'@vuepress/google-analytics',
	// 		{
	// 			ga: '' // UA-00000000-0
	// 		}
	// 	],
	// 	[
	// 		'vuepress-plugin-rss',
	// 		{
	// 			base_url: '/',
	// 			site_url: 'https://vuepressblog.org',
	// 			filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
	// 			count: 20
	// 		}
	// 	],
	// 	'vuepress-plugin-reading-time',
	// 	'vuepress-plugin-janitor'
	// ],
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	]
}
