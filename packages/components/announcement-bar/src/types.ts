import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { announcementBarVariants } from './announcement-bar';

export interface IAnnouncementBarProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof announcementBarVariants> {
	text: string;
}
