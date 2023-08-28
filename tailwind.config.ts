import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				brand: {
					textPrimary: '#E0E0E0',
					textSecondary: '#A0A0A0',
					textTerciary: '#FFF',
					buttonback: '#171717',
					background: '#1c1c1c'
				}
			}
		}
	},
	plugins: []
}
export default config
