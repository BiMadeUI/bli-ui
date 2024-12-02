import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'button-secondary': 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
				'button-hover': 'rgba(29, 78, 216, 0.8) 0px 0px 0px 1px inset'
			},
			colors: {
				primary: '#1d4ed8',
				'primary-text': '#333'
			},
			transitionProperty: {
				height: 'height',
				width: 'width',
				spacing: 'margin, padding'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
