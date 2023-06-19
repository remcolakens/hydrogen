import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCrossIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m6.343 6.343 11.314 11.314m-11.314 0L17.657 6.343"
			/>
		</Icon>
	);
};
export default SvgCrossIcon;
