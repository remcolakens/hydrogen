import { cn } from '@code-internet-applications/tailwind-utils';
import { FC, HTMLAttributes } from 'react';

const Container: FC<HTMLAttributes<HTMLElement>> = ({
	children,
	className,
}) => {
	return (
		<div className={cn('container my-container-spacing', className)}>
			{children}
		</div>
	);
};

Container.displayName = 'Container';

export { Container };
