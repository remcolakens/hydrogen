import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAddToBagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M8 7a4 4 0 0 1 6.769-2.887M13.676 7c0-1.06-.284-2.733 1.152-2.828-.428.028-.04-.04-.06-.059M13.677 7c.9 0-.872.8.124.8l2.698 2.662H19V19H5V7h8.676Zm0 0 .124-2.2.969-.687"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M24 6a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-5.5-3.5v3h3v1h-3v3h-1v-3h-3v-1h3v-3h1Z"
				clipRule="evenodd"
			/>
		</Icon>
	);
};
export default SvgAddToBagIcon;
