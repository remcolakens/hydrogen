import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgDeliveryIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M4 17H2V7h13v10H8M20 17h2v-4.444L20 9h-5v8h1"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
			/>
		</Icon>
	);
};
export default SvgDeliveryIcon;
