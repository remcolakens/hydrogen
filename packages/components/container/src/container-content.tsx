import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import type { IContainerProps } from './types';

const containerVariants = cva(
	'container mx-auto mb-element-spacing w-full px-site-side-spacing last:mb-0',
	{
		variants: {
			size: {
				sm: 'max-w-screen-sm',
				md: 'max-w-screen-md',
				lg: 'max-w-screen-lg',
				xl: 'max-w-screen-xl',
				'2xl': 'max-w-screen-2xl',
				wide: 'max-w-full',
				full: 'max-w-full px-0',
			},
		},
		defaultVariants: {
			size: '2xl',
		},
	},
);

const ContainerContent: FC<IContainerProps> = ({
	children,
	size,
	className,
}) => {
	return (
		<div className={cn(containerVariants({ size }), className)}>{children}</div>
	);
};

ContainerContent.displayName = 'ContainerContent';

export { ContainerContent, containerVariants };
