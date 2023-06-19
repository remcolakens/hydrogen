import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBikeIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 18v-4l-3-2 3-3 2 2 2 1M6 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			/>
		</Icon>
	);
};
export default SvgBikeIcon;
