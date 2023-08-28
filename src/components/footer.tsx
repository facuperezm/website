import { LINKS } from '@/config/site'
import Link from 'next/link'

function Footer() {
	return (
		<div className='py-3 text-sm text-center text-brand-textSecondary'>
			&copy; {new Date().getFullYear()} | Built with 🖤 by{' '}
			<Link href={LINKS.LINKEDIN_URL} className='hover:underline'>
				Facundo
			</Link>
		</div>
	)
}

export default Footer
