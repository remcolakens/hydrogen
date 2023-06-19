import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgChevronDownIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path stroke="currentColor" strokeLinecap="square" d="m6 10 6 6 6-6" />
		</Icon>
	);
};
export default SvgChevronDownIcon;
