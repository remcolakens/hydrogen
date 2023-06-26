import { InputHTMLAttributes } from 'react';

export interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
	isInvalid?: boolean;
	placeholder?: string;
}

export type IOptionTypes = InputHTMLAttributes<HTMLOptionElement>;
