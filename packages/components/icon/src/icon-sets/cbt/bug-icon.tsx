import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBugIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M4 13h3m8-6a2 2 0 0 1 2 2v7.459a2 2 0 0 1-.853 1.638L12 21l-4.147-2.903A2 2 0 0 1 7 16.46v-7.46a2 2 0 0 1 2-2 3 3 0 0 1 6 0ZM3 7l2 2h2M21 7l-2 2h-2M3 19l2-2h2M17 17h2l2 2M17 13h3"
			/>
		</Icon>
	);
};
export default SvgBugIcon;
