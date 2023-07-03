import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const leadingClassGroup = [
	{
		leading: [
			'xs',
			'sm',
			'base',
			'lg',
			'xl',
			'2xl',
			'3xl',
			'4xl',
			'5xl',
			'6xl',
			'7xl',
			'8xl',
			'9xl',
			'body1',
			'body2',
			'body3',
			'label1',
			'label2',
			'label3',
			'button1',
			'button2',
			'button3',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
		],
	},
];

// https://github.com/dcastil/tailwind-merge/blob/v1.13.1/src/lib/default-config.ts
const customTwMerge = extendTailwindMerge({
	theme: {
		borderRadius: ['4xl', '5xl'],
		spacing: ['element-spacing', 'container-spacing', 'site-side-spacing'],
	},
	classGroups: {
		leading: leadingClassGroup,
	},
});

export const cn = (...inputs: ClassValue[]) => {
	return customTwMerge(clsx(inputs));
};
