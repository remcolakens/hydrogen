import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAccountIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				d="M5.5 17A3.5 3.5 0 0 1 9 13.5h6a3.5 3.5 0 0 1 3.5 3.5v2.5h-13V17Z"
			/>
			<circle cx={12} cy={7} r={3.5} stroke="currentColor" />
		</Icon>
	);
};
export default SvgAccountIcon;
