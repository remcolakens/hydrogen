import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 7H5v12h14V7ZM8 7a4 4 0 0 1 8 0"
			/>
		</Icon>
	);
};
export default SvgBagIcon;
