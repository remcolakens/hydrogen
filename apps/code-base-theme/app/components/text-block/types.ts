import { IButton } from '@code-internet-applications/react';
import { HTMLAttributes } from 'react';

export interface ITextBlockProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	description: string;
	button?: IButton;
}
