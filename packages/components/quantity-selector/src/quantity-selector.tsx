import { cn, inputClasses } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { ChangeEvent, forwardRef, useState } from 'react';
import { Button } from '../../button/src';
import { MinusIcon, PlusIcon, TrashIcon } from '../../icon/src';
import type { IQuantitySelectorProps } from './types';

const quantityVariants = cva('relative w-full', {
	variants: {
		size: {
			sm: 'h-12',
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

const QuantitySelector = forwardRef<HTMLInputElement, IQuantitySelectorProps>(
	({ className, isInvalid, size, defaultValue = 1 }, ref) => {
		const [value, setValue] = useState<number>(defaultValue);

		const decrementValue = () => {
			setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue));
		};

		const incrementValue = () => {
			setValue((prevValue) => prevValue + 1);
		};

		const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = parseInt(e.target.value);
			setValue(isNaN(inputValue) ? 0 : inputValue);
		};

		return (
			<div className={cn(quantityVariants({ size }), className)}>
				<Button
					variant="ghost"
					size="sm"
					className="absolute left-1 top-1/2 h-auto -translate-y-1/2 transform p-1.5 text-current hover:text-current active:text-current"
					onClick={decrementValue}
					tabIndex={-1}
				>
					{value <= 1 ? <TrashIcon /> : <MinusIcon />}
				</Button>

				<input
					type="number"
					inputMode="numeric"
					onChange={handleInputChange}
					value={isNaN(value) ? '' : String(value)}
					ref={ref}
					className={cn(
						inputClasses(isInvalid),
						'h-full text-center text-current [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
					)}
				/>

				<Button
					variant="ghost"
					size="sm"
					className="absolute right-1 top-1/2 h-auto -translate-y-1/2 transform p-1.5 text-current hover:text-current active:text-current"
					onClick={incrementValue}
					tabIndex={-1}
				>
					<PlusIcon />
				</Button>
			</div>
		);
	},
);

QuantitySelector.displayName = 'QuantitySelector';

export { QuantitySelector, quantityVariants };
