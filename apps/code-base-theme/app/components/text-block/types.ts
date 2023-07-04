import {
	buttonSizeProps,
	buttonVariantProps,
} from '@code-internet-applications/react';
import { HTMLAttributes } from 'react';

export interface ITextBlockProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	description: string;
	button?: {
		text: string;
		handleClick: () => void;
		size?: buttonSizeProps;
		variant?: buttonVariantProps;
		className?: string;
	};
}
