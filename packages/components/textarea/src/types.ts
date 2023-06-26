import { TextareaHTMLAttributes } from 'react';

export type ITextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	isInvalid?: boolean;
};
