// Tailwind styles for the input components
const inputBaseStyles =
	'flex w-full rounded-3xl border border-gray-300 bg-white px-4 py-1.5 text-base leading-7 text-black transition-colors placeholder:text-black resize-none';

const inputHoverStyles = 'hover:border-gray-500';

const inputFocusStyles = 'focus:border-black focus:ring-transparent';

const inputDisabledStyles =
	'disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:placeholder-gray-300';

const inputInvalidStyles =
	'border-notice-500 text-notice-500 placeholder:text-notice-500 hover:border-notice-300 focus:border-notice-500 focus:text-black';

// Combine classes with conditional logic into a single string.
export const inputClasses = (
	isInvalid?: boolean,
	additionalClasses?: string[],
): string => {
	const inputStyles = [
		inputBaseStyles,
		inputHoverStyles,
		inputFocusStyles,
		inputDisabledStyles,
	];

	if (isInvalid) {
		inputStyles.push(inputInvalidStyles);
	}

	if (additionalClasses) {
		inputStyles.push(...additionalClasses);
	}

	const allClasses = [...inputStyles];

	return allClasses.join(' ');
};
