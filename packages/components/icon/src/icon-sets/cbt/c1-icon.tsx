import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgC1Icon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path stroke="currentColor" strokeLinecap="square" d="M21 3H3v18h18V3Z" />
		</Icon>
	);
};
export default SvgC1Icon;
