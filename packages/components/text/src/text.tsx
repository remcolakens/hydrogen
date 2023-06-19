import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { ITextProps } from './types';

const textVariants = cva('', {
	variants: {
		variant: {
			regular: ['font-normal'],
			bold: ['font-semibold'],
		},
		size: {
			xs: ['text-xs leading-xs'],
			sm: ['text-sm leading-sm'],
			base: ['text-base leading-base'],
			lg: ['text-lg leading-lg'],
			xl: ['text-lg leading-lg'],
			'2xl': ['text-2xl leading-2xl'],
			'3xl': ['text-3xl leading-3xl'],
			'4xl': ['text-4xl leading-4xl'],
			'5xl': ['text-5xl leading-5xl'],
			'6xl': ['text-6xl leading-6xl'],
			'7xl': ['text-7xl leading-7xl'],
			'8xl': ['text-8xl leading-8xl'],
			'9xl': ['text-9xl leading-9xl'],

			body1: ['text-base leading-body1'],
			body2: ['text-sm leading-body2'],
			body3: ['text-xs leading-body3'],

			label1: ['text-base leading-label1'],
			label2: ['text-sm leading-label2'],
			label3: ['text-xs leading-label3'],

			button1: ['text-base leading-button1'],
			button2: ['text-sm leading-button2'],
			button3: ['text-xs leading-button3'],
		},
	},
	defaultVariants: {
		variant: 'regular',
		size: 'base',
	},
});

const Text: React.FC<ITextProps> = ({
	children,
	className,
	variant,
	size,
	as = 'p',
	...props
}) => {
	const Component = as;

	return (
		<Component
			className={cn(textVariants({ size, className, variant }))}
			{...props}
		>
			{children}
		</Component>
	);
};

export { Text, textVariants };
