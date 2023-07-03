import { cn, inputClasses } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { ChevronDownIcon } from '../../icon/src';
import { Option } from './option';
import { ISelectProps } from './types';

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
	({ isInvalid, placeholder, children, className, ...props }, ref) => {
		return (
			<div className="relative">
				<select
					ref={ref}
					className={cn(
						inputClasses(isInvalid),
						'h-10 bg-none pr-10',
						className,
					)}
					{...props}
				>
					{placeholder ? <Option value="">{placeholder}</Option> : null}
					{children}
				</select>

				<ChevronDownIcon
					className={cn(
						'absolute right-4 top-3 h-4 w-4',
						isInvalid && 'text-notice-500',
					)}
				/>
			</div>
		);
	},
);

Select.displayName = 'Select';

export { Select };
