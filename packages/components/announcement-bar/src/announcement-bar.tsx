import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { Text } from '../../text';
import type { IAnnouncementBarProps } from './types';

const announcementBarVariants = cva('w-full py-1.5 text-center', {
	variants: {
		variant: {
			primary: ' bg-primary text-white',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

const AnnouncementBar: FC<IAnnouncementBarProps> = ({
	text,
	variant,
	className,
	...props
}) => {
	return (
		<div
			className={cn(announcementBarVariants({ variant }), className)}
			{...props}
		>
			<Text size="label1" className="hidden md:block">
				{text}
			</Text>

			<Text size="label3" className="block md:hidden">
				{text}
			</Text>
		</div>
	);
};

export { AnnouncementBar, announcementBarVariants };
