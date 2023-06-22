import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgHamburgerIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M6 7h12M6 12h12M6 17h12"
			/>
		</Icon>
	);
};
export default SvgHamburgerIcon;
