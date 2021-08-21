import {SvgIcon} from '@material-ui/core';
import {useTheme} from "@emotion/react";
import PropTypes from "prop-types";

const FileIcon = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
				<g id="Stockholm-icons-/-Files-/-File" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<polygon id="Shape" points="0 0 24 0 24 24 0 24"/>
					<path
							d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
							id="Combined-Shape" fill="currentColor" opacity="0.3"/>
					<rect id="Rectangle" fill="currentColor" x="6" y="11" width="9" height="2" rx="1"/>
					<rect id="Rectangle-Copy" fill="currentColor" x="6" y="15" width="5" height="2" rx="1"/>
				</g>
			</SvgIcon>
	);
};
FileIcon.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default FileIcon;