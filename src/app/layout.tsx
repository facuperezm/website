import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import TopBlur from '@/components/top-blur'
import Footer from '@/components/footer-component'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: [
		'Frontend Developer',
		'React',
		'Next.js',
		'Tailwind CSS',
		'Vercel',
		'Next.js 13'
	],
	authors: [
		{
			name: siteConfig.name,
			url: siteConfig.url
		}
	],
	creator: 'facuperezm',
	themeColor: { media: '(prefers-color-scheme: dark)', color: 'black' },
	twitter: {
		title: siteConfig.name,
		card: 'summary_large_image',
		images: ['https://i.imgur.com/kuQHDfm.jpg'],
		description: siteConfig.description,
		creator: '@facuperezm'
	},
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: 'es_AR',
		type: 'website'
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
		other: {
			rel: 'android-chrome-192x192',
			url: '/android-chrome-192x192.png'
		}
	},
	manifest: '/site.webmanifest'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'bg-brand-background text-brand-textPrimary min-h-screen antialiased',
					inter.className
				)}
			>
				<TopBlur />
				{children}
				<hr className='h-px mt-6 border-0 bg-neutral-800' />
				<Footer />
			</body>
		</html>
	)
}
