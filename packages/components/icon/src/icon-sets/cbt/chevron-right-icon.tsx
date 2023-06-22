import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgChevronRightIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="m10 6 6 6-6 6" />
		</Icon>
	);
};
export default SvgChevronRightIcon;
