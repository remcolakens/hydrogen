import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgMinusIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="M20 12H4" />
		</Icon>
	);
};
export default SvgMinusIcon;