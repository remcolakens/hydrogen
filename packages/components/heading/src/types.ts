import { type VariantProps } from 'class-variance-authority';
import { headingVariants } from './heading';

export type IHeadingHTMLTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type IHeadingTypes =
	| 'heading1'
	| 'heading2'
	| 'heading3'
	| 'heading4'
	| 'heading5'
	| 'heading6'
	| null
	| undefined;

export interface IHeadingProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof headingVariants> {
	as?: IHeadingHTMLTypes;
}
