/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

export const tailwindConfig: Config = {
	darkMode: ['class'],
	content: [],
	corePlugins: {
		container: false,
	},
	theme: {
		dropShadow: {
			none: '0 0 0 rgba(0, 0, 0, 0)',
			sm: '1px 1px 2px rgba(0, 0, 0, 0.06)',
			base: '2px 2px 2px rgba(0, 0, 0, 0.06)',
			md: '4px 4px 4px rgba(0, 0, 0, 0.06)',
			lg: '8px 8px 16px rgba(0, 0, 0, 0.06)',
			xl: '16px 16px 24px rgba(0, 0, 0, 0.06)',
			'2xl': '40px 40px 48px rgba(0, 0, 0, 0.06)',
			inner: 'inset 0px 1px 4px rgba(0, 0, 0, 0.08)',
		},
		screens: {
			xs: '360px',
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1680px',
			'4xl': '1920px',
			'5xl': '2000px',
		},
		fontFamily: {
			heading: ['Poppins', 'sans-serif'],
			body: ['Poppins', 'sans-serif'],
			sans: ['Poppins', 'sans-serif'],
		},
		fontSize: {
			'2xs': '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8em',
		},
		colors: {
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			black: colors.black,
			white: colors.white,
			gray: {
				DEFAULT: '#737373',
				50: '#FAFAFA',
				100: '#F5F5F5',
				200: '#E5E5E5',
				300: '#D4D4D4',
				400: '#A3A3A3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#171717',
			},
			primary: {
				DEFAULT: '#1294D7',
				50: '#E7F4FB',
				100: '#D0EAF7',
				200: '#A0D4EF',
				300: '#71BFE7',
				400: '#41A9DF',
				500: '#1294D7',
				600: '#0E76AC ',
				700: '#0D6897',
				800: '#0B5981',
				900: '#094A6C',
			},
			secondary: {
				DEFAULT: '#FFCC33',
				50: '#FFFAEB',
				100: '#FFF5D6',
				200: '#FFEBAD',
				300: '#FFE085',
				400: '#FFD65C',
				500: '#FFCC33',
				600: '#CCA329',
				700: '#B38F24',
				800: '#997A1F',
				900: '#806619',
			},
			tertiary: {
				DEFAULT: '#C8E4D2',
				50: '#FAFCFB',
				100: '#F4FAF6',
				200: '#E9F4ED',
				300: '#DEEFE4',
				400: '#D3E9DB',
				500: '#C8E4D2',
				600: '#A0B6A8',
				700: '#8CA093',
				800: '#78897E',
				900: '#647269',
			},
			funnel: {
				DEFAULT: '',
				50: '#FFECE8',
				100: '#FEDAD1',
				200: '#FEB4A3',
				300: '#FD8F76',
				400: '#FD6948',
				500: '#FC441A',
				600: '#CA3615',
				700: '#B03012',
				800: '#972910',
				900: '#7E220D',
			},
			positive: {
				DEFAULT: '#34D399',
				50: '#DDF8EE',
				100: '#BCF0DD',
				200: '#9AE9CC',
				300: '#79E2BB',
				400: '#57DBAB',
				500: '#34D399',
				600: '#27B480',
				700: '#1F8F66',
				800: '#186D4E',
				900: '#0F4733',
			},
			negative: {
				DEFAULT: '#FC441A',
				50: '#FFECE8',
				100: '#FEDAD1',
				200: '#FEB4A3',
				300: '#FD8F76',
				400: '#FD6948',
				500: '#FC441A',
				600: '#CA3615',
				700: '#B03012',
				800: '#972910',
				900: '#7E220D',
			},
			info: {
				DEFAULT: '#1294D7',
				50: '#E7F4FB',
				100: '#D0EAF7',
				200: '#A0D4EF',
				300: '#71BFE7',
				400: '#41A9DF',
				500: '#1294D7',
				600: '#0E76AC ',
				700: '#0D6897',
				800: '#0B5981',
				900: '#094A6C',
			},
			notice: {
				DEFAULT: '#FEF1E8',
				50: '#FEF1E8',
				100: '#FEE3D0',
				200: '#FDC7A2',
				300: '#FBAB73',
				400: '#FA8F45',
				500: '#F97316',
				600: '#C75C12',
				700: '#AE500F',
				800: '#95450D',
				900: '#7D390B',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.25rem',
			},
			lineHeight: {
				xs: '1rem',
				sm: '1.25rem',
				base: '1.5rem',
				lg: '1.75rem',
				xl: '1.75rem',
				'2xl': '2rem',
				'3xl': '2.25rem',
				'4xl': '2.5rem',
				'5xl': '3rem',
				'6xl': '3.75rem',
				'7xl': '4.5rem',
				'8xl': '6rem',
				'9xl': '8rem',

				body1: '1.75rem',
				body2: '1.5rem',
				body3: '1.25rem',

				label1: '1.75rem',
				label2: '1.5rem',
				label3: '1.25rem',

				button1: '1.75rem',
				button2: '1.5rem',
				button3: '1.25rem',

				h1: '7.25rem',
				h2: '5.5rem',
				h3: '3.5rem',
				h4: '2.75rem',
				h5: '2.25rem',
				h6: '2rem',
			},
			content: {
				empty: "''",
			},
			spacing: {
				'element-spacing': 'var(--element-spacing)',
				'container-spacing': 'var(--container-spacing)',
				'site-side-spacing': 'var(--site-side-spacing)',
			},
			height: {
				'screen-smallest': ['100vh', '100svh'] as unknown as string,
				'screen-dynamic': ['100vh', '100dvh'] as unknown as string,
				'screen-largest': ['100vh', '100lvh'] as unknown as string,
			},
			maxHeight: {
				'screen-smallest': ['100vh', '100svh'] as unknown as string,
				'screen-dynamic': ['100vh', '100dvh'] as unknown as string,
				'screen-largest': ['100vh', '100lvh'] as unknown as string,
			},
			minHeight: {
				'screen-smallest': ['100vh', '100svh'] as unknown as string,
				'screen-dynamic': ['100vh', '100dvh'] as unknown as string,
				'screen-largest': ['100vh', '100lvh'] as unknown as string,
			},
			width: {
				'screen-smallest': ['100vw', '100svw'] as unknown as string,
				'screen-dynamic': ['100vw', '100dvw'] as unknown as string,
				'screen-largest': ['100vw', '100lvw'] as unknown as string,
			},
			maxWidth: {
				'screen-smallest': ['100vw', '100svw'] as unknown as string,
				'screen-dynamic': ['100vw', '100dvw'] as unknown as string,
				'screen-largest': ['100vw', '100lvw'] as unknown as string,
			},
			minWidth: {
				'screen-smallest': ['100vw', '100svw'] as unknown as string,
				'screen-dynamic': ['100vw', '100dvw'] as unknown as string,
				'screen-largest': ['100vw', '100lvw'] as unknown as string,
			},
			zIndex: {
				dropdown: '1000',
				sticky: '1020',
				fixed: '1030',
				'offcanvas-backdrop': '1040',
				offcanvas: '1045',
				'modal-backdrop': '1050',
				modal: '1055',
				popover: '1070',
				tooltip: '1080',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')({
			className: 'rte',
		}),

		plugin(function ({ addUtilities, addVariant }: PluginAPI) {
			addUtilities({
				'.gap-base': {
					gap: 'var(--grid-row-gap) --grid-col-gap)',
				},
				'.gap-x-base': {
					columnGap: 'var(--grid-col-gap)',
				},
				'.gap-y-base': {
					rowGap: 'var(--grid-row-gap)',
				},
			});

			addVariant('states', ['&:hover', '&:focus', '&:active']);
			addVariant('js', ['.js &']);
			addVariant('no-js', ['.no-js &']);
			addVariant('touch', ['.touch &']);
			addVariant('no-touch', ['.no-touch &']);
			addVariant('disabled', ['&:disabled', '&.disabled']);
		}),
	],
};