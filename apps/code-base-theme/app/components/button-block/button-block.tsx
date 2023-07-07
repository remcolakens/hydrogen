import {
	Button,
	IButton,
	buttonVariants,
} from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { Link } from '@remix-run/react';
import { FC } from 'react';

const ButtonBlock: FC<IButton> = ({
	text,
	handleClick,
	href,
	size = 'lg',
	variant = 'primary',
	className,
}) => {
	if (handleClick && text) {
		return (
			<Button
				variant={variant}
				size={size}
				className={cn(className)}
				onClick={handleClick}
			>
				{text}
			</Button>
		);
	}

	if (href && text) {
		return (
			<Link
				to={href}
				className={cn(
					buttonVariants({
						variant: variant,
						size: size,
					}),
					className,
				)}
			>
				{text}
			</Link>
		);
	}

	return null;
};

export { ButtonBlock };
