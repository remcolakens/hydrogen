import { cn } from '@code-internet-applications/tailwind-utils';
import type { IIconProps } from './types';

export const Icon: React.FC<IIconProps> = ({
	viewBox = '0 0 24 24',
	focusable = false,
	role,
	className,
	children,
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox}
			focusable={focusable}
			role={role}
			className={cn('h-6 w-6', className)}
			fill="none"
			{...props}
		>
			{children}
		</svg>
	);
};
