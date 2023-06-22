import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCottonIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				d="M12.671 11.316c-2.918 1.789-2.618 4.004-2.104 4.888.515.884 2.273 2.205 5.192.416 2.918-1.789 3.835-4.75 3.928-6.006-1.122-.512-4.097-1.087-7.016.702Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				d="M11.272 12c-2.164-1.534-6.415-.913-7.307-.577.01.975.646 3.081 2.81 4.615 2.05 1.454 3.373 1.154 3.935.577"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M11.273 17.192V19.5M5.65 10.27c0-3.187 2.518-5.77 5.623-5.77 2.985 0 5.426 2.387 5.61 5.403"
			/>
		</Icon>
	);
};
export default SvgCottonIcon;
