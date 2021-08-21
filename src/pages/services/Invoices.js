import Parallax from "../../components/Parallax";
import SectionInfoCard from "../../components/common/card/SectionInfoCard";
import {Box, Card, Container, Grid, Stack, Typography} from "@material-ui/core";
import AppDownloadButtons from "../../components/common/AppDownloadButtons";
import React from "react";
import GetStartedCard from "../../components/services/GetStartedCard";
import SummaryItem from "../../components/common/SummaryItem";
import FileIcon from "../../components/icons/FileIcon";
import SelectedFileIcon from "../../components/icons/SelectedFileIcon";
import FlexibilityOnPaymentSection from "../../components/services/FlexibilityOnPaymentSection";
import Pill from "../../components/styled/component/Pill";
import HardDriveIcon from "../../components/icons/HardDriveIcon";
import GetStartedButton from "../../components/common/GetStartedButton";
import KitchenScaleIcon from "../../components/icons/KitchenScaleIcon";
import SectionInfoCheckItem from "../../components/common/SectionInfoCheckItem";

function Invoices(props) {
	
	
	const sectionCard2Info = [
		{
			icon: HardDriveIcon,
			title: 'Database of items',
			description: "Upload your items and create your own unique database."
		},
		{
			icon: KitchenScaleIcon,
			title: 'Units of Measurement',
			description: "A quick and efficient way to accurately reflect your items. Over 100 standard units of measurement are included."
		},
	];
	return (
			<>
				<Parallax imageSrc={require("../../assets/images/invoices-items.png").default} imageAlt="parallax image"
				          scrollTarget={".start-container"}>
					<Container>
						<Typography variant={"h2"} color={"text.white"} textAlign={"center"} px={{xs: 0, md: 20}}>Create unlimited
							Estimates and Invoices</Typography>
					</Container>
				</Parallax>
				
				<Container className={"start-container"} sx={{mt: 5}}>
					<SectionInfoCard
							cardBgColor={"linear-gradient(147deg, rgb(0, 0, 0) 0%, rgb(67, 67, 67) 74%)"}
							imageSrc={require("../../assets/images/invoice-payment.png").default}
							imageAlt="purchasing status png"
							cardTitle={
								(<Typography variant={"h4"} fontWeight={"bold"} textAlign={"center"} color={"text.white"}>
									Personalized estimates and invoices
								</Typography>)
							}
							cardSubheader={
								(
										<>
											<Typography gutterBottom variant={"h4"} fontWeight={"bold"} textAlign={"center"}
											            color={"text.purple-dark"}>
												Get paid faster!
											</Typography>
											<Typography variant={"h5"} fontWeight={"bold"} textAlign={"center"} color={"text.purple-dark"}>
												Create an estimates for your clients and chat with your client in real time
												<br/>
												You can convert that same estimate into an invoice with a click.
											</Typography>
										</>
								)
							}
					>
						
						<Stack justifyContent="center">
							<SummaryItem
									icon={FileIcon}
									mb={3}
									titleProps={{color: "text.purple", fontWeight: "bold"}}
									iconFontSize={"6rem"}
									iconColor={"purple"}
									title={"Estimates"}
									descriptionProps={{color: "text.grey-blue"}}
									description={"Create unlimited estimates with your logo and chat with your clients for their feedback."}/>
							<SummaryItem
									icon={SelectedFileIcon}
									mb={3}
									titleProps={{color: "text.purple", fontWeight: "bold"}}
									iconFontSize={"6rem"}
									iconColor={"purple"}
									title={"Invoices"}
									descriptionProps={{color: "text.grey-blue"}}
									description={"Generate unlimited invoices, include your company logo and let your clients remit payments, chat and more."}/>
							<AppDownloadButtons imageMaxHeight={"4.5rem"} direction={'column'}/>
						</Stack>
					</SectionInfoCard>
					
					<Grid container sx={{my: 4}} spacing={3} alignItems={"center"}>
						<Grid item xs={12} md={6}>
							<SectionInfoCard cardBgColor="linear-gradient(rgb(27, 128, 42), rgb(23, 99, 34))"
							>
							<Box p={{xs: 0, md: 3}}>
								<Typography variant='h4' fontWeight="bold" mb={3} color={"rgb(100, 255, 123)"}>
									PROFESSIONAL GRADE
								</Typography>
								<Typography variant='h5' color={"rgb(100, 255, 123)"} fontWeight="bold" gutterBottom>
									Versatility for your clients <Typography variant={"span"} color={"text.white"}> Invoiss is an
									efficient tool for your clients to interact with your business.</Typography>
								</Typography>
								<Typography variant='h5' color={"text.white"} fontWeight="bold" mb={6}>
									Payments can be made at any time upon receipt of the invoice.
								</Typography>
								<Typography variant='p' color={"#abbcd5"} mb={6}>
									Sign up today and enjoy Free lifetime Estimates and Invoices up to 10 items.
								</Typography>
							</Box>
							</SectionInfoCard>
						</Grid>
						<Grid item xs={12} md={6}>
							<Card sx={{borderRadius: "1.5rem"}}>
								<Box p={{xs: 0, md: 3}}>
									<SectionInfoCheckItem iconColor={"text.green"} mb={6} direction={"row-reverse"} iconStyles={{ml: "auto", mr: 0}}>
										Personalize your estimates & invoices.
										<Typography color={"text.purple-dark"} fontWeight={"bold"} mt={2}>
											A branded estimate has a proven higher chance of approval.
										</Typography>
									</SectionInfoCheckItem>
									
									<SectionInfoCheckItem iconColor={"text.green"} mb={6} direction={"row-reverse"} iconStyles={{ml: "auto", mr: 0}}>
										Accept card payments
										<Typography color={"text.purple-dark"} textAlign={"center"} fontWeight={"bold"} mt={2}>
											Optionally have your clients make payments via debit or credit Card. Integrated payment processing platform
										</Typography>
										<Stack direction={"row"} spacing={6} justifyContent={"center"} mt={2}>
											<img src={require('../../assets/images/stripe.png').default} alt="stripe logo" style={{	maxWidth: '100%', height: "35px"}}/>
											
											<img src={require('../../assets/images/clover.png').default} alt="clover logo" style={{	maxWidth: '100%', height: "35px"}}/>
											
										</Stack>
									</SectionInfoCheckItem>
									
									<SectionInfoCheckItem iconColor={"text.green"} mb={6} direction={"row-reverse"} iconStyles={{ml: "auto", mr: 0}}>
										Actions are recorded
										<Typography color={"text.purple-dark"} fontWeight={"bold"} mt={2}>
											Get notified when your invoice is viewed.
										</Typography>
									</SectionInfoCheckItem>
									
									<SectionInfoCheckItem iconColor={"text.green"} mb={6} direction={"row-reverse"} iconStyles={{ml: "auto", mr: 0}}>
										Reminder
										<Typography color={"text.purple-dark"} fontWeight={"bold"} mt={2}>
											Send reminders to your clients of their due invoices and past due actions.
										</Typography>
									</SectionInfoCheckItem>
									
								</Box>
							</Card>
						</Grid>
					</Grid>
					
					
					<GetStartedCard bgColor="linear-gradient(to right, #b436f4, #2196f3)"
					                heading="Get paid faster"
					                subheading="Create an invoices now."
					                headingColor={"text.white"}
					                subheadingColor={"text.white"}
					                sx={{my: 6}}
					/>
				</Container>
				
				<Parallax imageSrc={require("../../assets/images/mac-purchasing.jpg").default} imageAlt="mac-purchasing image"
				          scrollTarget={".start-container"} height={"30rem"} hideScrollDownButton={true} opacity={0.7}>
				</Parallax>
				
				<Container sx={{mt: 5}}>
					<Box textAlign={"center"} py={5} mb={5}>
						<Pill backgroundColor={"green"} color={"text.white"} mb={3}>PROVEN</Pill>
						<Typography variant={"h4"} fontWeight={"bold"} gutterBottom>
							Used by many companies
						</Typography>
						<Typography fontWeight={"bold"} color={"text.grey-blue"}>
							Many of the greatest companies in the world are using Invoiss to help them in many ways.
						</Typography>
					
					</Box>
					
					<SectionInfoCard
							cardBgColor={"linear-gradient(315deg, #a99bc7 0%, #8e76c1 74%)"}
							imageSrc={require("../../assets/images/item-page-h.png").default}
							imageAlt="item page"
							imageOrder={{md: 1, xs: 2}}
							order={{md: 2, xs: 1}}
					>
						<Stack height="100%" justifyContent="center">
							<span>
								<Pill backgroundColor={"#508eff80"} color={"#fff"} mb={3}>CUSTOMIZE</Pill>
							</span>
							{
								sectionCard2Info.map((item, index) => {
									return (
											<SummaryItem
													key={index}
													icon={item.icon}
													mb={3}
													iconFontSize={"3.5rem"}
													iconColor={"blue"}
													title={item.title}
													titleProps={{color: "text.purple-dark", fontWeight: 'bold'}}
													description={item.description}/>
									)
								})
							}
						</Stack>
					</SectionInfoCard>
					
					
					<FlexibilityOnPaymentSection py={8} hidePaymentDetailsSection={true}/>
					
					<Box textAlign={"center"} mb={4}>
						<GetStartedButton/>
					</Box>
				</Container>
			</>
	);
}

export default Invoices;