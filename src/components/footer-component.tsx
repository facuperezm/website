import { siteConfig } from '@/config/site'
import Link from 'next/link'

function Footer() {
	return (
		<footer className='py-3 text-sm text-center text-brand-textSecondary'>
			&copy; {new Date().getFullYear()} | Built with 🖤 by{' '}
			<Link href={siteConfig.links.linkedin} className='hover:underline'>
				Facundo
			</Link>
		</footer>
	)
}

export default Footer
