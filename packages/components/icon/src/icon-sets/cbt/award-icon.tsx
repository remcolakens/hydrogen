import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAwardIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M7 21h10M6 2h12v9a6 6 0 0 1-12 0V2ZM12 17v4M6 5v6H5a3 3 0 0 1 0-6h1Zm12 6V5h1a3 3 0 1 1 0 6h-1Z"
			/>
		</Icon>
	);
};
export default SvgAwardIcon;
