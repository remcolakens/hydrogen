import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgShippingIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 80 80" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M26.197 52.464H10m11.32-26.038H53.02v26.038H36.038M65.472 52.464H70v-11.32l-4.852-9.057H53.02v20.377h3.396"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M31.51 56.992a4.528 4.528 0 1 0 0-9.056 4.528 4.528 0 0 0 0 9.056ZM60.943 56.992a4.528 4.528 0 1 0 0-9.056 4.528 4.528 0 0 0 0 9.056ZM19.057 34.35h11.32M14.528 43.407H25.85"
			/>
		</Icon>
	);
};
export default SvgShippingIcon;
