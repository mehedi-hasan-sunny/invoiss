import React from 'react';
import PropTypes from 'prop-types';
import {Box, Card, CardContent, CardHeader, Stack, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Pill from "../styled/component/Pill";
import {withStyles} from "@material-ui/styles";

PricingCard.propTypes = {
	hideButtonIcon: PropTypes.bool,
	buttonText: PropTypes.string.isRequired,
	buttonColor: PropTypes.string.isRequired,
	buttonProps: PropTypes.object,
	pillText: PropTypes.string.isRequired,
	pillColor: PropTypes.string.isRequired,
	pillBgColor: PropTypes.string.isRequired,
	cardHeader: PropTypes.objectOf(
			PropTypes.shape({
				pricePerMonth: PropTypes.number,
				freeFor: PropTypes.string.isRequired,
				freeColor: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
			})),
};

const styles = (theme) => (
		{
			card: {
				background: 'rgb(255,255,255,0.2) !important',
				backdropFilter: 'blur(2px)',
				border: '1px solid #fff',
				borderRadius: '10px'
			},
			cardHeader: {
				padding: '0.75rem !important',
				textAlign: "center"
			},
			cardContent: {
				padding: '0 0.75rem 0.75rem !important'
			},
			box: {
				minHeight: '5rem'
			}
		}
)

function PricingCard(props) {
	const {
		classes,
		hideButtonIcon,
		buttonText,
		buttonColor,
		buttonProps,
		pillText,
		pillColor,
		pillBgColor,
		cardHeader,
		...otherProps
	} = props
	return (
			<Card variant="outlined" className={classes.card}>
				<CardHeader
						className={classes.cardHeader}
						title={(<Pill color={pillColor} backgroundColor={pillBgColor} sx={{mb: 3}}>{pillText}</Pill>)}
						subheader={
							(
									<>
										<Box sx={{minHeight: "7.5rem"}}>
											{
												typeof cardHeader.pricePerMonth == "number" ?
														(
																<Stack direction={"row"} justifyContent={"center"} color={"text.primary"} sx={{letterSpacing: '-0.02em'}}>
																	<Typography textAlign={"center"} variant={"h4"} mt={1} sx={{lineHeight: 0.7}}>
																		$
																	</Typography>
																	<Typography textAlign={"center"} variant={"h2"} fontWeight={400} sx={{fontSize: "3.8125rem", letterSpacing: '-0.02em'}}>
																		{cardHeader.pricePerMonth}
																	</Typography>
																	<Typography textAlign={"center"} variant={"h4"} display={"inline-flex"} alignItems={"flex-end"}
																	            sx={{lineHeight: 1.35}}>
																		/mo
																	</Typography>
																</Stack>
														):
														(
																<Typography variant={"h4"} mb={1.5} mt={1}>
																	{cardHeader.pricePerMonth}
																</Typography>
														)
											}
											
											<Typography mt={1} color={cardHeader.freeColor}>
												{cardHeader.freeFor}
											</Typography>
										</Box>
									</>
							)
						}
				>
				
				
				</CardHeader>
				<Typography px={2} color={"text.purple"} textAlign={"center"} sx={{fontSize: '0.9rem', minHeight: "4.9rem"}}>
					{cardHeader.description}
				</Typography>
				<CardContent  className={classes.cardContent} {...otherProps}/>
				<CardContent className={classes.cardContent}>
					<Button size={"large"} color={buttonColor} variant={"contained"}
					        endIcon={hideButtonIcon ? hideButtonIcon : <ArrowForwardIcon/>}
					        fullWidth {...buttonProps}>
						{buttonText}
					</Button>
				</CardContent>
			</Card>
	);
}

export default withStyles(styles)(PricingCard);