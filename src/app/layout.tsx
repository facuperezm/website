import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import TopBlur from '@/components/top-blur'
import Footer from '@/components/footer-component'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: siteConfig.name,
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
			name: 'Facundo Perez Montalvo',
			url: siteConfig.url
		}
	],
	creator: 'facuperezm',
	themeColor: { media: '(prefers-color-scheme: dark)', color: 'black' },
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		images: ['https://i.imgur.com/kuQHDfm.jpg'],
		description: siteConfig.description,
		creator: '@facuperezm'
	},
	openGraph: {
		type: 'website',
		locale: 'es_AR',
		url: siteConfig.url,
		title: `${siteConfig.name} - Frontend Developer`,
		description: siteConfig.description,
		siteName: siteConfig.name
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico'
	}
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
