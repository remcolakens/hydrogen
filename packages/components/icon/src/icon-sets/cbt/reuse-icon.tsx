import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgReuseIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="m19.299 6.066-.546 3.789-3.434-1.162M4.702 17.934l.546-3.789 3.433 1.162"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M5.483 9.265a7.11 7.11 0 0 1 13.034 0M18.517 14.735a7.11 7.11 0 0 1-13.033 0"
			/>
		</Icon>
	);
};
export default SvgReuseIcon;
