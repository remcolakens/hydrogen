import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgRulerIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				d="M5.25 14.25 3 16.5 7.5 21 21 7.5 16.5 3l-2.25 2.25m-9 9 1.125 1.125M5.25 14.25 7.5 12m0 0 2.25 2.25M7.5 12l2.25-2.25m0 0 1.125 1.125M9.75 9.75 12 7.5m0 0 2.25 2.25M12 7.5l2.25-2.25m0 0 1.125 1.125"
			/>
		</Icon>
	);
};
export default SvgRulerIcon;
