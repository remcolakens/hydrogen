import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgArrowLeftIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 12H4M9 18l-6-6 6-6"
			/>
		</Icon>
	);
};
export default SvgArrowLeftIcon;
