import {Box, Card, CardContent, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/styles";
import GetStartedButton from "../common/GetStartedButton";
import React from "react";

GetStartedCard.propTypes = {
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string.isRequired,
	elevation: PropTypes.number,
	bgColor: PropTypes.string,
	headingColor: PropTypes.string,
	subheadingColor: PropTypes.string,
};

GetStartedCard.defaultProps = {
	elevation: 6,
};

const useStyles = (theme) => ({
	card: (props) => {
		return {
			background: props.bgColor ? props.bgColor : '#fff',
			borderRadius: '1.5rem',
			textAlign: "center",
			my: 3
		}
	},
	cardContent: (props) => {
		return {
			padding: props.padding ? props.padding : '3rem 2rem !important',
		}
	},
});

function GetStartedCard(props) {
	const {classes, elevation, heading, bgColor, subheading, headingColor, subheadingColor, ...otherProps} = props;
	
	return (
			<Card elevation={elevation}
			      className={classes.card} {...otherProps}>
				<CardContent className={classes.cardContent}>
					<Typography fontWeight={"bold"} variant={"h5"} gutterBottom color={headingColor}>
						{heading}
					</Typography>
					<Typography fontWeight={"bold"} variant={"small"} gutterBottom color={subheadingColor}>
						{subheading}
					</Typography>
					<Box pt={3}>
						<GetStartedButton/>
					</Box>
				</CardContent>
			</Card>
	);
}

export default withStyles(useStyles)(GetStartedCard);