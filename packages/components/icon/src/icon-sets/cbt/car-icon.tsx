import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCarIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m3 12 2-5h2m-4 5H2v5h1m0-5h4m0-5v5m0-5h5m-5 5h5m6 0-2-5h-4m6 5h2a2 2 0 0 1 2 2v3h-2m-2-5h-6m0-5v5m-5 5h9"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
			/>
		</Icon>
	);
};
export default SvgCarIcon;
