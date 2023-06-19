import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPlusBagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 7H5v12h14V7ZM8 7a4 4 0 0 1 8 0M15 13H9M12 10v6"
			/>
		</Icon>
	);
};
export default SvgPlusBagIcon;
