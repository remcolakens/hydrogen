import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLeafIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M6.5 11.4c0 4.48 3.667 5.6 5.5 5.6 1.833 0 5.5-1.12 5.5-5.6 0-4.48-3.667-7.467-5.5-8.4-1.833.933-5.5 3.92-5.5 8.4Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M12 17v4"
			/>
		</Icon>
	);
};
export default SvgLeafIcon;
