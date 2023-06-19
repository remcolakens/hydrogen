import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgControlsHorizontalIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M9 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 6h3M11 6h9M9 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 18h3M11 18h9M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 12h9M17 12h3"
			/>
		</Icon>
	);
};
export default SvgControlsHorizontalIcon;
