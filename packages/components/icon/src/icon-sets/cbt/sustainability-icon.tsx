import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSustainabilityIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 80 80" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M26 16.172a27.871 27.871 0 0 1 14-3.746c15.464 0 28 12.536 28 28A27.87 27.87 0 0 1 63 56.4"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={2}
				d="M17.019 24.426a27.871 27.871 0 0 0-5.019 16c0 15.464 12.536 28 28 28a27.87 27.87 0 0 0 14.43-4"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeWidth={2}
				d="M28.999 40.026c0 8.32 7.333 10.4 11 10.4s11-2.08 11-10.4-7.333-13.866-11-15.6c-3.667 1.734-11 7.28-11 15.6Z"
			/>
			<path
				stroke="currentColor"
				strokeWidth={2}
				d="M39.999 24.426v32M29 40.426l11 5 11-5M30.5 34.426l9.5 4 9.5-4"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M27.333 10 25 17h7M53.667 70 56 63h-7"
			/>
		</Icon>
	);
};
export default SvgSustainabilityIcon;
