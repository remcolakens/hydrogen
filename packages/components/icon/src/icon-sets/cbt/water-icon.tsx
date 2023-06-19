import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgWaterIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M11.5 19C10 19 8 18 8 15.5"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 3c4 4.2 6 8.2 6 12a6 6 0 0 1-12 0c0-3.8 2-7.8 6-12Z"
			/>
		</Icon>
	);
};
export default SvgWaterIcon;
