import { cn, inputClasses } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { IInputProps } from './types';

const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ isInvalid, className, type, ...props }, ref) => (
		<input
			type={type}
			className={cn(inputClasses(isInvalid, ['h-10']), className)}
			ref={ref}
			{...props}
		/>
	),
);

Input.displayName = 'Input';

export { Input };
