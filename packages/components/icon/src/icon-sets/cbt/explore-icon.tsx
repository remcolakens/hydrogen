import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgExploreIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M14.12 14.121 7.05 16.95l2.829-7.071 7.07-2.829-2.828 7.071Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
			/>
		</Icon>
	);
};
export default SvgExploreIcon;
