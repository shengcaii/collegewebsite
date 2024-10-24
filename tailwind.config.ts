import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		fontWeight: {
			hairline: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			'extra-bold': '800',
			black: '900'
		},
		extend: {
			screens: {
				xs: '270px',
			},
			colors:{
				primary:'#007bff',
				accent: '#5bc0de',
				background: '#ffffff',
				text:'#333333',
			}
			
			}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config