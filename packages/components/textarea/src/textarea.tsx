import { cn, inputClasses } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { ITextareaProps } from './types';

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
	({ isInvalid, className, ...props }, ref) => (
		<textarea
			className={cn(inputClasses(isInvalid), 'min-h-[84px]', className)}
			ref={ref}
			{...props}
		/>
	),
);

Textarea.displayName = 'Textarea';

export { Textarea };
