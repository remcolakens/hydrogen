import * as React from 'react';

export interface ButtonProps {
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
	return <button>{props.children}</button>;
};

Button.displayName = 'Button';
