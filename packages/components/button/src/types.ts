import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button';

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	icon?: boolean;
}
