import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgTrashIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				fill="currentColor"
				d="M20 6.5h.5v-1H20v1Zm-16-1h-.5v1H4v-1ZM15 4h.5a.5.5 0 0 0-.5-.5V4ZM9 4v-.5a.5.5 0 0 0-.5.5H9ZM6.5 6v-.5h-1V6h1Zm12 0v-.5h-1V6h1ZM15 3.5H9v1h6v-1ZM5.5 6v14h1V6h-1Zm0 14c0 .41.103.81.396 1.104.294.293.694.396 1.104.396v-1c-.256 0-.357-.064-.396-.104-.04-.04-.104-.14-.104-.396h-1ZM7 21.5H17v-1H7v1Zm10 0c.41 0 .81-.103 1.104-.396.293-.294.396-.694.396-1.104h-1c0 .256-.064.357-.104.396-.04.04-.14.104-.396.104v1Zm1.5-1.5V6h-1v14h1ZM9 5.5H4v1h5v-1ZM8.5 4v2h1V4h-1ZM20 5.5h-5v1h5v-1Zm-5 0H9v1h6v-1ZM14.5 4v2h1V4h-1Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M10 10v7M14 10v7"
			/>
		</Icon>
	);
};
export default SvgTrashIcon;
