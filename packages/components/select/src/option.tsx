import { FC } from 'react';
import { IOptionTypes } from './types';

const Option: FC<IOptionTypes> = ({ value, children, ...props }) => {
	return (
		<option value={value} {...props}>
			{children}
		</option>
	);
};

Option.displayName = 'Option';

export { Option };
