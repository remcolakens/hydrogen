import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgReturnsIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 80 80" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M27 32v16l13 6M27 32l13 6m-13-6 6.5-3M40 54l13-6V32M40 54V38m13-6-13-6-6.5 3M53 32l-6.5 3M40 38l6.5-3m-13-6 13 6"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M26 15.746A27.871 27.871 0 0 1 40 12c15.464 0 28 12.536 28 28a27.871 27.871 0 0 1-5 15.973"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M26.333 10 24 17h7M53.667 70 56 63h-7"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={2}
				d="M17.019 24A27.871 27.871 0 0 0 12 40c0 15.464 12.536 28 28 28 5.279 0 10.216-1.46 14.43-4"
			/>
		</Icon>
	);
};
export default SvgReturnsIcon;
