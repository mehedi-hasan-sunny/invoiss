import {SvgIcon} from '@material-ui/core';
import PropTypes from "prop-types";
import {useTheme} from "@emotion/react";

const Stats = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
				<g id="Stockholm-icons-/-Shopping-/-Chart-bar#2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<rect id="bound" x="0" y="0" width="24" height="24"/>
					<rect id="Rectangle-62-Copy" fill="currentColor" opacity="0.3" x="17" y="4" width="3" height="13"
					      rx="1.5"/>
					<rect id="Rectangle-62-Copy-2" fill="currentColor" opacity="0.3" x="12" y="9" width="3" height="8"
					      rx="1.5"/>
					<path
							d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
							id="Path-95" fill="currentColor"/>
					<rect id="Rectangle-62-Copy-4" fill="currentColor" opacity="0.3" x="7" y="11" width="3" height="6"
					      rx="1.5"/>
				</g>
			</SvgIcon>
	);
};

Stats.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default Stats;