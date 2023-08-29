import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

type ProjectProps = {
	children: string
	title: string
	link: string
	tech: string[]
}

function Project({ children, title, link, tech }: ProjectProps) {
	return (
		<div className='flex flex-col w-full p-4 space-y-2 transition duration-300 ease-out transform border rounded-md hover:border-neutral-700 border-neutral-600 hover:ease-in hover:shadow-lg'>
			<Link href={link}>
				<h2 className='group flex items-center gap-1 text-lg font-bold  hover:underline transition duration-500'>
					{title}{' '}
					<span className='group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:scale-105 transition-transform duration-200'>
						<FiArrowUpRight />
					</span>
				</h2>
			</Link>
			<p className='text-brand-textSecondary'>{children}</p>
			<div className='flex gap-1'>
				{tech?.map(tech => (
					<span
						key={tech}
						className='px-2 py-1 text-sm truncate border rounded-md text-brand-textTerciary bg-neutral-800 border-neutral-700'
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	)
}

export default Project
