import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgChatIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m13 17-6 4v-4H3V4h18v13h-8Z"
			/>
		</Icon>
	);
};
export default SvgChatIcon;
