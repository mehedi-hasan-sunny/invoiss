import React from 'react';
import Section from "../../components/styled/component/Section";
import {Container, Grid, Typography} from "@material-ui/core";
import PricingCard from "../../components/pricing/PricingCard";
import SectionInfoCheckItem from "../../components/common/SectionInfoCheckItem";
import AppDownloadButtons from "../../components/common/AppDownloadButtons";

function Pricing(props) {
	
	
	const pricing = [
		{
			title: 'FREE',
			titleColor: '#609286',
			pricePerMonth: 0,
			freeFor: 'Lifetime',
			freeColor: 'orange',
			description: 'Freelancers, individuals or Micro-entreprises with a limited catalog that do not need to process payments online',
			features: [
				{
					"isAvailable": true,
					"text": "Add up to 10 items"
				},
				{
					"isAvailable": true,
					"text": "Add unlimited clients"
				},
				{
					"isAvailable": true,
					"text": "Unlimited estimates and invoices"
				},
				{
					"isAvailable": true,
					"text": "Place unlimited phone order"
				},
				{
					"isAvailable": true,
					"text": "Create tasks for internal users"
				},
				{
					"isAvailable": true,
					"text": "Send out monthly client statement"
				},
				{
					"isAvailable": false,
					"text": "Process payment online"
				},
				{
					"isAvailable": false,
					"text": "Track invoices and payment status"
				},
				{
					"isAvailable": false,
					"text": "Place orders with your vendors"
				},
				{
					"isAvailable": false,
					"text": "Generate monthly Purchase report"
				},
				{
					"isAvailable": false,
					"text": "Inventory Management"
				},
				{
					"isAvailable": true,
					"text": "Additional location ($10/ ea/mo)"
				}
			],
			buttonText: 'Start now',
			buttonBgColor: 'blue'
		},
		{
			title: 'ESSENTIALS',
			titleColor: '#7a6092',
			pricePerMonth: 10,
			freeFor: 'Free for 14 days',
			freeColor: 'text.white',
			description: 'Small businesses with more offerings that may need to accept payments for orders and invoices online and by phone',
			features:[
				{
					"isAvailable": true,
					"text": "Add up to 50 items"
				},
				{
					"isAvailable": true,
					"text": "Add unlimited clients"
				},
				{
					"isAvailable": true,
					"text": "Unlimited estimates and invoices"
				},
				{
					"isAvailable": true,
					"text": "Place unlimited phone order"
				},
				{
					"isAvailable": true,
					"text": "Create tasks for internal users"
				},
				{
					"isAvailable": true,
					"text": "Send out monthly client statement"
				},
				{
					"isAvailable": true,
					"text": "Process payment online"
				},
				{
					"isAvailable": true,
					"text": "Track invoices and payment status"
				},
				{
					"isAvailable": false,
					"text": "Place orders with your vendors"
				},
				{
					"isAvailable": false,
					"text": "Generate monthly Purchase report"
				},
				{
					"isAvailable": false,
					"text": "Inventory Management"
				},
				{
					"isAvailable": true,
					"text": "Additional location ($10/ ea/mo)"
				}
			],
			buttonText: 'Start for free',
			buttonBgColor: 'blue'
		},
		{
			title: 'PRO',
			titleColor: '#3c45ad',
			pricePerMonth: 30,
			freeFor: 'Free for 14 days',
			freeColor: 'text.white',
			description: 'Small businesses that sell many different items and require interaction with suppliers, inventory management, and/or online payment capabilities',
			features: [
				{
					"isAvailable": true,
					"text": "Add up to 1000 items"
				},
				{
					"isAvailable": true,
					"text": "Add unlimited clients"
				},
				{
					"isAvailable": true,
					"text": "Unlimited estimates and invoices"
				},
				{
					"isAvailable": true,
					"text": "Place unlimited phone order"
				},
				{
					"isAvailable": true,
					"text": "Create tasks for internal users"
				},
				{
					"isAvailable": true,
					"text": "Send out monthly client statement"
				},
				{
					"isAvailable": true,
					"text": "Process payment online"
				},
				{
					"isAvailable": true,
					"text": "Track invoices and payment status"
				},
				{
					"isAvailable": true,
					"text": "Place orders with your vendors"
				},
				{
					"isAvailable": true,
					"text": "Generate monthly purchase report"
				},
				{
					"isAvailable": true,
					"text": "Inventory management"
				},
				{
					"isAvailable": true,
					"text": "Additional location ($10/ ea/mo)"
				}
			],
			buttonText: 'Start for free',
			buttonBgColor: 'blue'
		},
		{
			title: 'PREMIUM',
			titleColor: '#1b821e',
			pricePerMonth: "Contact for pricing",
			freeFor: 'Free for 14 days',
			freeColor: 'text.white',
			description: 'Large businesses with multiple locations and advanced needs',
			features: [
				{
					"isAvailable": true,
					"text": "Unlimited items"
				},
				{
					"isAvailable": true,
					"text": "Add unlimited clients"
				},
				{
					"isAvailable": true,
					"text": "Unlimited estimates and invoices"
				},
				{
					"isAvailable": true,
					"text": "Place unlimited phone order"
				},
				{
					"isAvailable": true,
					"text": "Create tasks for internal users"
				},
				{
					"isAvailable": true,
					"text": "Send out monthly client statement"
				},
				{
					"isAvailable": true,
					"text": "Process payment online"
				},
				{
					"isAvailable": true,
					"text": "Track invoices and payment status"
				},
				{
					"isAvailable": true,
					"text": "Place orders with your vendors"
				},
				{
					"isAvailable": true,
					"text": "Generate monthly purchase report"
				},
				{
					"isAvailable": true,
					"text": "Inventory management"
				},
				{
					"isAvailable": true,
					"text": "Additional location ($10/ ea/mo)"
				}
			],
			buttonText: 'Contact Us',
			buttonBgColor: 'white',
			hideButtonIcon: true
		},
	]
	
	return (
			<>
				<Section shapeType={"halfmoon"} backgroundColor={"#161c2d"} isStartContainer={true}>
					<Typography variant={"h2"} textAlign={"center"} color={"text.white"} gutterBottom mt={6}>
						Try it free for 14 days.
					</Typography>
					<Typography variant={"h6"} textAlign={"center"} color={"text.white"} mb={10}>
						Start now
					</Typography>
				</Section>
				<Section sx={{ mt: -25.5, pb: 5, position: 'unset'}} backgroundColor={'#000'}>
					<Container>
						<Grid container spacing={{xs: 2, md: 1.5}}>
							{
								pricing && pricing.map((item, index) => {
									let {pricePerMonth, freeFor, freeColor, description} = item;
									let cardHeader = {pricePerMonth, freeFor, freeColor, description};
									return (
											<Grid item xs={12} md={3}>
												<PricingCard
														key={index}
														hideButtonIcon={item.hideButtonIcon}
														buttonText={item.buttonText}
														buttonColor={item.buttonBgColor}
														pillBgColor={item.titleColor}
														pillColor={'text.white'}
														pillText={item.title}
														cardHeader={cardHeader}
												>
													{
														item.features && item.features.map((feature, i) => {
															return (
																	<SectionInfoCheckItem
																			variant={"small"}
																			mt={0.5}
																			mb={0.1}
																			sx={{fontSize: "0.9rem",marginBottom: '2px'}}
																			fontWeight={"normal"}
																			key={i} color={'text.white'}
																			iconColor={feature.isAvailable ? 'text.green' : 'text.danger'}>
																		{feature.text}
																	</SectionInfoCheckItem>
															)
														})
													}
												</PricingCard>
											</Grid>
									)
								})
							}
						</Grid>
						<AppDownloadButtons marginTop={10}/>
					</Container>
				</Section>
			</>
	);
}

export default Pricing;