import {
	Button,
	IButton,
	buttonVariants,
} from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { Link } from '@remix-run/react';
import { FC } from 'react';

const HeroImageButton: FC<IButton> = ({
	text,
	handleClick,
	href,
	size,
	variant,
	className,
}) => {
	if (handleClick && text) {
		return (
			<Button
				variant={variant ?? 'primary'}
				size={size ?? 'lg'}
				className={cn(className, 'mt-8')}
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
						variant: variant ?? 'primary',
						size: size ?? 'lg',
					}),
					className,
					'mt-8',
				)}
			>
				{text}
			</Link>
		);
	}

	return null;
};

export { HeroImageButton };
