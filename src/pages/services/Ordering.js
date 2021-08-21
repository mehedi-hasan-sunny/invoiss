import React from 'react';
import {Box, Container, Stack, Typography} from "@material-ui/core";
import SectionInfoCard from "../../components/common/card/SectionInfoCard";
import SummaryItem from "../../components/common/SummaryItem";
import AppDownloadButtons from "../../components/common/AppDownloadButtons";
import FlexibilityOnPaymentSection from "../../components/services/FlexibilityOnPaymentSection";
import TimeScheduleIcon from "../../components/icons/TimeScheduleIcon";
import FileDoneIcon from "../../components/icons/FileDoneIcon";
import OutGoingMailIcon from "../../components/icons/OutGoingMailIcon";
import Pill from "../../components/styled/component/Pill";
import GetStartedCard from "../../components/services/GetStartedCard";
import Section from "../../components/styled/component/Section";

function Ordering(props) {
	
	
	const sectionCard2Info = [
		{
			icon: FileDoneIcon,
			title: 'Database of items',
			description: "Tag and change the status of your orders in realtime to keep track of your sales orders."
		},
		{
			icon: TimeScheduleIcon,
			title: 'Order History',
			description: "Predict your upcoming sales volumes by viewing your historical orders."
		},
		{
			icon: OutGoingMailIcon,
			title: 'Provide receipt to your client',
			description: "Provide an instant receipt to your customers for their phone, email or fax orders and get paid right away."
		}
	];
	
	return (
			<>
				<Section isStartContainer={true} shapeType={"blob-right"}>
					<Container>
						<SectionInfoCard
								cardBgColor={"transparent"}
								imageSrc={require("../../assets/images/order-skw.png").default}
								imageAlt="purchasing status png"
								imageOrder={{xs: 1, md: 2}}
								order={{xs: 2, md: 1}}
						>
							<Stack height="100%" justifyContent="center">
								<Typography variant={"h3"} gutterBottom textAlign={"left"}>
									Manage <Typography variant={"span"} color={"text.purple-dark"}>Online and offline orders</Typography>
								</Typography>
								
								
								<Typography mb={5} color={"text.purple-dark"}>
									Getting orders via phone calls, emails or faxes? Leverage Invoiss so you can manage and keep track of
									them.
									Reducing missed orders to <Typography variant={"span"} color={"text.green"}
									                                      fontWeight={"bold"}>ZERO</Typography>.
								</Typography>
								
								<AppDownloadButtons bgColor={"#000"}/>
							
							</Stack>
						</SectionInfoCard>
						
						<FlexibilityOnPaymentSection mt={4} mb={6}/>
						
						
						<SectionInfoCard
								cardBgColor={"linear-gradient(315deg, #3f3f88 0%, #000000 74%)"}
								imageSrc={require("../../assets/images/ordering-demo.png").default}
								imageAlt="purchasing status png"
						>
							<Stack height="100%" justifyContent="center">
								<Typography variant={"h4"} fontWeight={"bold"} color={"text.white"} gutterBottom textAlign={"left"}>
									Keep track of the status of the orders <Typography variant={"span"} color={"text.danger"}>
									in realtime
								</Typography>
								</Typography>
								
								<Typography mb={5} fontSize={"18px"} color={"text.white"}>
									Do away with the paper stack of orders and start enjoying the ease of online orders. View all orders on
									your phone, tablet or laptop and always have visibility of your orders.
								</Typography>
								{
									sectionCard2Info.map((item, index)=>{
										return (
												<SummaryItem
														key={index}
														icon={item.icon}
														mb={3}
														iconFontSize={"3.5rem"}
														iconColor={"purple"}
														title={item.title}
														titleProps={{color: "text.purple", fontWeight: 'bold'}}
														description={item.description}/>
										)
									})
								}
							</Stack>
						</SectionInfoCard>
					</Container>
				</Section>
				<Container>
					<SectionInfoCard
							cardBgColor={"transparent"}
							cardStyles={{borderRadius: 0, padding: '6rem 0'}}
							imageSrc={require("../../assets/images/screen-order-b.png").default}
							imageAlt="purchasing status png"
							imageStyles={{paddingTop: 0}}
							imageOrder={{md: 1, xs: 2}}
							order={{md: 2, xs: 1}}
							cardContentStyles={{padding: '0 !important'}}
					>
						
						<Stack justifyContent="center" height={"100%"}>
							<Box textAlign={"left"} mb={3}>
								<Pill backgroundColor={"#508eff80"} color={"#fff"} sx={{fontSize: '0.9rem'}}>FOR YOUR TEAM</Pill>
							</Box>
							<Typography variant={"h4"} color={"#000"}>
								Standalone link for your teams to collaborate on orders
							</Typography>
							<Typography variant={"h4"} color={"text.purple-dark"} mb={3}>
								Order status appears in realtime
							</Typography>
							<Typography variant={"small"} color={"text.grey-blue"}>
								Place orders from your office and your team at your fulfillment center can manage and tag with updated status.
							</Typography>
						</Stack>
					</SectionInfoCard>
					<GetStartedCard
							heading={"Turn your offline orders online."}
							subheading={"Reducing missed orders to ZERO."}
					/>
				</Container>
				
			</>
	);
}

export default Ordering;