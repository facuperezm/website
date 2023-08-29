import { cn } from '@/lib/utils'

export default function Button({
	children,
	variant
}: {
	children: React.ReactNode
	variant: 'github' | 'linkedin'
}) {
	const buttonStyles = {
		github:
			'flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-out transform border rounded-md align-center hover:text-white hover:bg-neutral-700 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 hover:ease-in hover:shadow-lg',
		linkedin:
			'flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-out transform border border-transparent rounded-md align-center bg-neutral-600 hover:bg-gray-400 hover:text-black hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-2 hover:ease-in hover:shadow-lg'
	}

	return <button className={cn(buttonStyles[variant])}>{children}</button>
}
