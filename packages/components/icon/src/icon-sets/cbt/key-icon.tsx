import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgKeyIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M21 16v-4h-9M7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 15v-3"
			/>
		</Icon>
	);
};
export default SvgKeyIcon;
