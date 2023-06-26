import { InputHTMLAttributes } from 'react';

export interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
	isInvalid?: boolean;
}

export type IOptionTypes = InputHTMLAttributes<HTMLOptionElement>;
