import { cva } from 'class-variance-authority';
import { cn } from '../cn';

// Tailwind styles for the input components
const inputBaseStyles = cva(
	'flex w-full resize-none rounded-3xl border border-gray-300 bg-white px-4 py-1.5 text-base leading-7 text-black transition-colors placeholder:text-black',
);

const inputHoverStyles = cva('hover:border-gray-500');

const inputFocusStyles = cva('focus:border-black focus:ring-transparent');

const inputDisabledStyles = cva(
	'disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:placeholder-gray-300',
);

const inputInvalidStyles = cva(
	'border-notice-500 text-notice-500 placeholder:text-notice-500 hover:border-notice-300 focus:border-notice-500 focus:text-black',
);

// Combine classes with conditional logic into a single string.
export const inputClasses = (isInvalid?: boolean) => {
	return cn(
		inputBaseStyles(),
		inputHoverStyles(),
		inputFocusStyles(),
		inputDisabledStyles(),
		isInvalid && inputInvalidStyles(),
	);
};
