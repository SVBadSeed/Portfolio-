/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding: {
				'24': '24px',
				'fl': '240px 0 100px 0'
			},
			margin: {
				'm140': '-140px'
			},
			maxWidth: {
				'1200': '1200px'
			},
			backgroundColor: {
				'dark': '#151515'
			},
			borderRadius: {
				'64': '64px'
			},
			keyframes: {
				updown: {
					'0%': { transform: 'translateY(-20px)' },
					'50%': { transform: 'translateY(20px)' },
					'100%': { transform: 'translateY(-20px)' }
				}
			},
			animation: {
				updown: 'updown 3s linear infinite'
			},
			top: {
				'c28': '28%'
			},
			zIndex: {
				'm4': '-4'
			},
			translate: {
				'tx50': '-50%',
				'ty50': '-50%'
			},
			width: {
				'100': '100px'
			}
		},
	},
	plugins: [],
}
