import { type VariantProps } from 'class-variance-authority';
import { textVariants } from './text';

export type ITextHTMLTypes = 'span' | 'p';
export type ITextTypes =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl'
	| 'body1'
	| 'body2'
	| 'body3'
	| 'label1'
	| 'label2'
	| 'label3'
	| 'button1'
	| 'button2'
	| 'button3'
	| null
	| undefined;

export interface ITextProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof textVariants> {
	as?: ITextHTMLTypes;
}
