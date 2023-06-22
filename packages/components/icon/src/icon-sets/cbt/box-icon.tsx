import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBoxIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				d="M3.6 6.857v10.286L12 21M3.6 6.857l8.4 3.857M3.6 6.857 7.8 4.93M12 21l8.4-3.857V6.857M12 21V10.714m8.4-3.857L12 3 7.8 4.929m12.6 1.928-4.2 1.929M12 10.714l4.2-1.928M7.8 4.929l8.4 3.857"
			/>
		</Icon>
	);
};
export default SvgBoxIcon;
