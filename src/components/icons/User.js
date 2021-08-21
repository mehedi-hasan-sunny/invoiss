import {SvgIcon} from '@material-ui/core';
import PropTypes from "prop-types";
import {useTheme} from "@emotion/react";

const User = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
			<g id="Stockholm-icons-/-General-/-User" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<polygon id="Shape" points="0 0 24 0 24 24 0 24"/>
					<path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" id="Mask" fill="currentColor" opacity="0.3"/>
					<path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" id="Mask-Copy" fill="currentColor"/>
				</g>
			</SvgIcon>
	);
};

User.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default User;