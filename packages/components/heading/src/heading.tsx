import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { IHeadingProps } from './types';

const headingVariants = cva('', {
	variants: {
		weight: {
			regular: ['font-normal'],
			bold: ['font-semibold'],
		},
		size: {
			heading1: ['text-8xl leading-h1'],
			heading2: ['text-7xl leading-h2'],
			heading3: ['text-5xl leading-h3'],
			heading4: ['text-4xl leading-h4'],
			heading5: ['text-2xl leading-h5'],
			heading6: ['text-lg leading-h6'],
		},
	},
	defaultVariants: {
		weight: 'bold',
		size: 'heading3',
	},
});

const Heading: FC<IHeadingProps> = ({
	children,
	className,
	weight,
	size,
	as = 'h2',
	...props
}) => {
	const Component = as;

	return (
		<Component
			className={cn(headingVariants({ size, weight }), className)}
			{...props}
		>
			{children}
		</Component>
	);
};

export { Heading, headingVariants };
