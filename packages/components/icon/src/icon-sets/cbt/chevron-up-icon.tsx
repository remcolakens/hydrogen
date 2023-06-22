import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgChevronUpIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="m6 14 6-6 6 6" />
		</Icon>
	);
};
export default SvgChevronUpIcon;
