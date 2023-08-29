export type Project = {
	title: string
	link: string
	tech: string[]
	description: string
}

export const PROJECTS = [
	{
		title: 'Password Generator',
		link: 'https://password-generator-facuperezm.vercel.app/',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
		description:
			"🔐 Password Generator is a simple app that generates a random password based on the user's input."
	},
	{
		title: 'URL Shortening',
		link: 'https://url-facundo.vercel.app/',
		tech: ['Vite.js', 'Tailwind CSS', 'Vercel'],
		description:
			'🔗 URL Shorting is a simple app that allows you to shorten URLs.'
	},
	{
		title: 'Dictionary',
		link: 'https://dictionary-facundo.vercel.app/',
		tech: ['Vite.js', 'Tailwind CSS', 'Vercel', 'React-Query'],
		description:
			'📖 Dictionary is a simple app that allows you to search for words and their definitions.'
	},
	{
		title: "Loco Heraldo's Menu",
		link: 'https://locoheraldo.vercel.app/',
		tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'i18n', 'Google Sheets'],
		description: '🍕 Freelance work for a local restaurant.'
	},
	{
		title: 'e-Store',
		link: 'https://ecommerce-store-facundo.vercel.app/',
		tech: ['Vite', 'Tailwind CSS', 'React-Router-v6', 'Fake Store API'],
		description: '🛒 E-commerce store that uses the Fake Store API.'
	},
	{
		title: 'Adviency 2022',
		link: 'https://adviency-facundo.vercel.app/',
		tech: ['Next.js', 'Tailwind CSS'],
		description:
			'🎄 Adviency is a gift list app that features a budget tracker and uses LocalStorage to store data.'
	},
	{
		title: 'Advice App',
		link: 'https://advice-generator-facundo.vercel.app/',
		tech: ['Next.js', 'Tailwind CSS', 'Advice Slip API'],
		description:
			'🏃‍♂️ Advice Generator is a simple app that generates random advice.'
	},
	{
		title: 'Blogr Landing Page',
		link: 'https://blogr-facundo.netlify.app/',
		tech: ['React', 'Tailwind CSS'],
		description: '🖥 Landing page for a fictional blog.'
	}
] as Project[]
