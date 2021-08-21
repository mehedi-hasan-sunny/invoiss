import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from "@material-ui/core";
import Pill from "../styled/component/Pill";
import {  withStyles} from "@material-ui/styles";

FlexibilityOnPaymentSection.propTypes = {
	hidePaymentDetailsSection: PropTypes.bool
};

const style = (theme) => ({
	image: {
		maxWidth: '100%',
		height: "40px",
	}
})

function FlexibilityOnPaymentSection(props) {
	const {classes, hidePaymentDetailsSection, children, ...otherProps} = props;
	return (
			<Box textAlign={"center"} {...otherProps}>
				<Typography variant={"h4"} mb={4}>Flexibility on payment plan providers</Typography>
				<Pill backgroundColor={"#19965b"} color={"#fff"}>POWERFUL INTEGRATIONS</Pill>
				<Typography fontSize={"12px"} mb={4} color={"text.grey-blue"}>The list is growing every month ...</Typography>
				<Grid container spacing={2} justifyContent={"center"}>
					<Grid item xs={12} md={4}>
						<img src={require('../../assets/images/stripe.png').default} alt="stripe logo" className={classes.image}/>
						{
							!hidePaymentDetailsSection ?
									(
											<Typography color={"text.grey-blue"} mt={3}>
												Process Credit Cards for your invoices and orders or have your clients to do. Funds deposit to your bank account in realtime.
											</Typography>
									): null
						}
					
					</Grid>
					<Grid item xs={12} md={4}>
						<img src={require('../../assets/images/clover.png').default} alt="clover logo" className={classes.image}/>
						
						{
							!hidePaymentDetailsSection ?
									(
											<Typography color={"text.grey-blue"} mt={3}>
												Process Credit cards from your Invoiss account to your clover account.
												<br/>
												You can also pull your Online Orders to your Invoiss account in realtime.
											</Typography>
									): null
						}
						
					</Grid>
				</Grid>
			</Box>
	);
}

export default withStyles(style)(FlexibilityOnPaymentSection);