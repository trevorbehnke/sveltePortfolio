let projects = [
	{
		src: './portfolio.png',
		alt: 'Trevor Behnke Website',
		title: 'This Website',
		description:
			"I built this very website with SvelteKit (pre beta)! It's currently SSG and hosted on Vercel. I'm continuously adding new features as the framework evolves.",
		siteLink: 'https://svelte-portfolio-five.vercel.app//',
		sourceLink: 'https://github.com/trevorbehnke/sveltePortfolio'
	},
	{
		src: './cryptoTracker.png',
		alt: 'CryptoTracker Landing Page',
		title: 'Crypto Tracker',
		description:
			'This project pulls data from the coinstats.app API. Tutorial project from this blog post -> https://blog.openreplay.com/a-practical-introduction-to-svelte.',
		siteLink: 'https://svelte-crypto-tracker-4ilvlf8yv-trevorbehnke.vercel.app/',
		sourceLink: 'https://github.com/trevorbehnke/svelteCryptoTracker'
	},
	{
		src: './svelteKitPoll.png',
		alt: 'Poll Website Landing Page',
		title: 'Polling App',
		description:
			"This was the second project from the Net Ninja playlist for Svelte on YouTube. It's a polling app where users can create a poll and then vote on it. The state is tracked in a dedicated store file and persisted with local storage.",
		siteLink: 'https://svelte-poll-zeta.vercel.app/',
		sourceLink: 'https://github.com/trevorbehnke/sveltePoll'
	},
	{
		src: './FakerDex.png',
		alt: 'FakerDex Landing Page',
		title: 'Rolodex',
		description:
			'This is the first project I created with SvelteKit. It was a way to learn about dynamic routing and the search functionality which is lightning fast in Svelte! The user information if pulled from the Faker API and avatars are created with the dicbear.com API.',
		siteLink: 'https://sveltekit-fakerdex.netlify.app/',
		sourceLink: 'https://github.com/trevorbehnke/svelteKitFakerDex'
	},
	{
		src: './neuGlassCards.png',
		alt: 'Glass Cards Landing Page',
		title: 'neuGlass Cards',
		description:
			'Created in React, user profiles are dynamically generated with Faker. The goal here was to combine neumorphism with glassmorphism styling and I think it turned out pretty well!',
		siteLink: 'https://trevorbehnke.github.io/neuGlassCards/',
		sourceLink: 'https://github.com/trevorbehnke/neuGlassCards'
	},
	{
		src: './TheTaxExperience.png',
		alt: 'The Tax Experience Landing Page',
		title: 'The Tax Experience',
		description:
			'I built this website for a client who runs her own tax company. Although it was built using Squarespace, I think it turned out well and includes a lot of functionality including scheduling and payment processing.',
		siteLink: 'https://www.thetaxexperience.com',
		sourceLink: 'https://www.thetaxexperience.com'
	},
	{
		src: './cameoparison.png',
		alt: 'Cameoparison Landing Page',
		title: 'Cameoparison Game',
		description:
			'This is the official tutorial from Rich Harris (the guy who created Svelte) on Front End Masters. It showcases some unique features in Svelte like transitions and motion, as well as life cycle methods that create a great page rendering experience.',
		siteLink: 'https://cameoparison-trevorbehnke.vercel.app/',
		sourceLink: 'https://github.com/trevorbehnke/cameoparison'
	}
];

export default projects;
