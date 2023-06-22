import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from './badge';

export interface IBadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}
