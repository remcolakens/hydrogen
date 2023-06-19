import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSupportIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M21 12h-2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-4Zm0 0a9 9 0 1 0-18 0m0 0v4a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2H3Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M21 14v4c0 2-.667 3-2 3h-5"
			/>
		</Icon>
	);
};
export default SvgSupportIcon;
