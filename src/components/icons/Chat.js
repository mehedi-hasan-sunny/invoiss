import {SvgIcon} from '@material-ui/core';
import {useTheme} from "@emotion/react";
import PropTypes from "prop-types";

const Chat = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
				<g fill="none" fillRule="evenodd">
					<path d="M0 0h24v24H0z"/>
					<path
							d="M22 15.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18H6a3 3 0 01-3-3V6a3 3 0 013-3h13a3 3 0 013 3v9.01z"
							fill="currentColor" opacity=".3"/>
					<path
							d="M7.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
							fill="currentColor" opacity=".3"/>
				</g>
			</SvgIcon>
	);
};
Chat.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default Chat;