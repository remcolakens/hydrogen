import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPlaneIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M18.394 4.364 14 7 6 5 5 6l5.5 4.5L8 14H5l-1 1 2.5 1.5 1 1L9 20l1-1v-3l3.5-2.5L18 19l1-1-2-8 2.636-4.394a.906.906 0 0 0-1.242-1.242Z"
			/>
		</Icon>
	);
};
export default SvgPlaneIcon;
