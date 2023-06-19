import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgForwardIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M5 8v3a2 2 0 0 0 2 2h11"
			/>
			<path stroke="currentColor" strokeLinecap="square" d="m16 16 3-3-3-3" />
		</Icon>
	);
};
export default SvgForwardIcon;
