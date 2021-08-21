import {Box, Stack, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';

import {createElement} from "react";
import {useTheme} from "@emotion/react";

SummaryItem.propTypes = {
	icon: PropTypes.func.isRequired,
	iconColor: PropTypes.string,
	iconStyles: PropTypes.object,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	titleProps: PropTypes.object,
	descriptionProps: PropTypes.object,
};

function SummaryItem(props) {
	const theme = useTheme();
	
	const {
		icon,
		iconColor,
		iconFontSize,
		iconStyles,
		title,
		titleProps,
		description,
		descriptionProps,
		...otherProps
	} = props;
	const iconStyle = {
		...iconStyles,
		fontSize: iconFontSize,
		color: theme.palette.text[iconColor] ? theme.palette.text[iconColor] : iconColor
	}
	return (
			<Stack direction="row" spacing={3} {...otherProps}>
				{createElement(icon, {fontSize: iconFontSize, color: iconColor, style: iconStyle})}
				<Box>
					<Typography variant="h6" fontWeight={"medium"} {...titleProps} >
						{title}
					</Typography>
					<Typography color={"text.white"} fontWeight="fontWeightBold" fontSize={"18px"} {...descriptionProps}>
						{description}
					</Typography>
				</Box>
			</Stack>
	);
}

export default SummaryItem;