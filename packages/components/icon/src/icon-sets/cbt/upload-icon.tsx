import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgUploadIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 4v13M7 8l5-5 5 5M20 21H4"
			/>
		</Icon>
	);
};
export default SvgUploadIcon;
