import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPlusIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path stroke="currentColor" strokeLinecap="square" d="M12 4v16M20 12H4" />
		</Icon>
	);
};
export default SvgPlusIcon;
