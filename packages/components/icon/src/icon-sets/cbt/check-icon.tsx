import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCheckIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path stroke="currentColor" strokeLinecap="square" d="m4 13 5 5L20 7" />
		</Icon>
	);
};
export default SvgCheckIcon;
