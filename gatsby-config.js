module.exports = {
	siteMetadata: {
		title: 'Bespoke Engineering',
		author: 'Justin Richer',
		imageUrl: 'https://bspk.io/bspk.png',
		description: 'Bespoke Engineering, LLC is an independent consultancy focused on internet security architecture and standards.',
		keywords: `Consultant, Security, Cybersecurity, OAuth, XYZ, OAuth 2, OIDC, OpenID Connect, OpenID, JOSE, JWT`,
		twitter: 'https://twitter.com/bspkio',
		github: `https://github.com/bspk`,
		medium: 'https://medium.com/@justinsecurity',
		siteUrl: `https://bspk.io/`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/bspk-sq.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
