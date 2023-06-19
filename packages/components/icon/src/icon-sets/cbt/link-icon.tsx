import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLinkIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M9 7H7a5 5 0 0 0 0 10h2M8 12h8M15 17h2a5 5 0 0 0 0-10h-2"
			/>
		</Icon>
	);
};
export default SvgLinkIcon;
