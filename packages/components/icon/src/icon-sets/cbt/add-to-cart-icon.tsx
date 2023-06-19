import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAddToCartIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m21.292 6-1.346 8.163a1 1 0 0 1-.986.837H7.043a1 1 0 0 1-.987-.837L4.85 6.837A1 1 0 0 0 3.862 6H2M8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 8h-6M13 5v6"
			/>
		</Icon>
	);
};
export default SvgAddToCartIcon;
