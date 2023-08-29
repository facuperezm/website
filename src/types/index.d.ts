export type SiteConfig = {
	name: string
	description: string
	url: string
	ogImage: string
	links: {
		twitter: string
		github: string
		linkedin: string
	}
}

declare module 'next/font/google'
