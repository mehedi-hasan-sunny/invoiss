import {SvgIcon} from '@material-ui/core';
import {useTheme} from "@emotion/react";
import PropTypes from "prop-types";

const PhoneIcon = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
				<g id="Stockholm-icons-/-Devices-/-Phone" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<rect id="bound" x="0" y="0" width="24" height="24"/>
					<path d="M7.13888889,4 L7.13888889,19 L16.8611111,19 L16.8611111,4 L7.13888889,4 Z M7.83333333,1 L16.1666667,1 C17.5729473,1 18.25,1.98121694 18.25,3.5 L18.25,20.5 C18.25,22.0187831 17.5729473,23 16.1666667,23 L7.83333333,23 C6.42205272,23 5.75,22.0187831 5.75,20.5 L5.75,3.5 C5.75,1.98121694 6.42205272,1 7.83333333,1 Z" id="Combined-Shape" fill="currentColor"/>
					<polygon id="Combined-Shape" fill="currentColor" opacity="0.3" points="7 4 7 19 17 19 17 4"/>
					<circle id="Oval" fill="currentColor" cx="12" cy="21" r="1"/>
				</g>
			</SvgIcon>
	);
};
PhoneIcon.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default PhoneIcon;