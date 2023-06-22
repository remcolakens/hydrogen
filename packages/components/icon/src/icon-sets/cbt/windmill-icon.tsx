import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgWindmillIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M11.814 13.125V21m0 0h-1.688m1.688 0h1.688"
			/>
			<circle
				cx={11.814}
				cy={10.875}
				r={2.25}
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M11.814 8.625V3M18.935 14.813 14.064 12M5.064 14.813 9.564 12"
			/>
		</Icon>
	);
};
export default SvgWindmillIcon;
