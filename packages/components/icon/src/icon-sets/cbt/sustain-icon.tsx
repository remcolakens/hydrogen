import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSustainIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M6.694 11.844c-1.148 1.987-.08 3.266.596 3.657.677.39 2.318.675 3.465-1.312 1.147-1.988.559-4.094.12-4.899-.915.023-3.034.567-4.181 2.554Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M6.706 11.647c-1.304-.978-2.96-.476-3.462-.33-.187.643-.286 2.202.808 3.296 1.044 1.044 2.057.754 2.512.35M14.941 6.941H22v4.706h-7.059zM18.47 11.647v7.235a1 1 0 0 1-1 1H8.883a1 1 0 0 1-1-1v-3.117"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M16.706 6.941V4M20.236 6.941V4"
			/>
		</Icon>
	);
};
export default SvgSustainIcon;
