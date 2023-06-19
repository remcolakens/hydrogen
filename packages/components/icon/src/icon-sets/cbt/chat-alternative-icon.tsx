import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgChatAlternativeIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M8.824 18.588 4 21l.653-4.573C3.006 15.001 2 13.095 2 11c0-4.418 4.477-8 10-8s10 3.582 10 8-4.477 8-10 8c-1.11 0-2.178-.145-3.176-.412Z"
			/>
		</Icon>
	);
};
export default SvgChatAlternativeIcon;
