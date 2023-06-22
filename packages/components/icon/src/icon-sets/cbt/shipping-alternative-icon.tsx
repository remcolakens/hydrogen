import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgShippingAlternativeIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 80 80" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M10 39h16M16 48h16M16 30h16M39 30.071V48.93L54.5 56M39 30.071l15.5 7.072M39 30.07l7.75-3.535M54.5 56 70 48.929V30.07M54.5 56V37.143M70 30.07 54.5 23l-7.75 3.536M70 30.07l-7.75 3.536m-7.75 3.536 7.75-3.536m-15.5-7.071 15.5 7.071"
			/>
		</Icon>
	);
};
export default SvgShippingAlternativeIcon;
