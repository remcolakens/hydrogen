import { VariantProps } from 'class-variance-authority';
import { logoVariants } from './logo';

export interface ILogoProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof logoVariants> {
	brand?: boolean;
}
