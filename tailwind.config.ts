import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
			},
			screens: {
				'2xl': '1400px'
			},
			spacing: {
				'128': '32rem',
        '144': '36rem',
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('header-closed', 'body:has(#header-open:not(:checked)) &')
		}),
	],
	safelist: ['action'],
}
export default config
