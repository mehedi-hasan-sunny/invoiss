import {Box, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@material-ui/core";
import SectionInfoCard from "../../components/common/card/SectionInfoCard";
import SectionInfoCheckItem from "../../components/common/SectionInfoCheckItem";
import AppDownloadButtons from "../../components/common/AppDownloadButtons";
import Section from "../../components/styled/component/Section";
import GetStartedCard from "../../components/services/GetStartedCard";
import PropTypes from "prop-types";
import React, {createElement} from "react";
import Pill from "../../components/styled/component/Pill";
import SummaryItem from "../../components/common/SummaryItem";
import FileIcon from "../../components/icons/FileIcon";
import Parallax from "../../components/Parallax";
import GetStartedButton from "../../components/common/GetStartedButton";
import User from "../../components/icons/User";
import Upload from "../../components/icons/Upload";
import Barcode from "../../components/icons/Barcode";
import FileDoneIcon from "../../components/icons/FileDoneIcon";
import TimeScheduleIcon from "../../components/icons/TimeScheduleIcon";
import OutGoingMailIcon from "../../components/icons/OutGoingMailIcon";
import PhoneIcon from "../../components/icons/PhoneIcon";
import LockOverTurningIcon from "../../components/icons/LockOverTurningIcon";
import SelectIcon from "../../components/icons/SelectIcon";


InventoryStep.propTypes = {
	dividerLeft: PropTypes.bool,
	dividerRight: PropTypes.bool,
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.func.isRequired,
};

function InventoryStep({dividerLeft, dividerRight, index, title, text, icon}) {
	return (
			<>
				<Grid container mb={2} alignItems={"center"}>
					<Grid item xs={false} md={4}>
						{
							dividerLeft ? (<Divider sx={{borderColor: "#fff"}}/>) : null
						}
					</Grid>
					
					<Grid item xs={12} md={4} textAlign={"center"}>
						{createElement(icon, {color: "text.white", fontSize: "3.5rem"})}
					</Grid>
					<Grid item xs={false} md={4}>
						{
							dividerRight ? (<Divider sx={{borderColor: "#fff"}}/>) : null
						}
					</Grid>
				
				</Grid>
				<SectionInfoCheckItem iconColor={"text.grey-blue"} index={index} justifyContent={"center"}
				                      color={"text.white"} variant={"h5"}>
					{title}
				</SectionInfoCheckItem>
				<Typography textAlign={"center"} color={"text.white"} mb={{xs: 3, md: 0}}>
					{text}
				</Typography>
			</>
	)
}

const sectionInfoCard2Items = [
	{
		icon: PhoneIcon,
		title: 'Complete inventory package',
		description: "A  complete turn key solution that address your inventory."
	},
	{
		icon: SelectIcon,
		title: 'Multi barcode scanner support',
		description: "Invoiss is not only barcode scanner agnostic, but it allows for collaborative scanning via multiple units."
	},
	{
		icon: TimeScheduleIcon,
		title: 'Inventory history report',
		description: "Leverage your previous inventory levels, to predict your future inventory levels, budget, and shrinkage."
	},
	{
		icon: LockOverTurningIcon,
		title: 'Assign Inventory permissions',
		description: "Assign inventory task to specific employees without full rights to the rest of your data."
	}
]
function BadgeCard({title, text, badge}) {
	return (
			<Box sx={{position: 'relative'}}>
				<Pill backgroundColor={"#6c8aec"} color={"white"} sx={{
					padding: "6px 12px",
					fontSize: '0.75rem',
					position: 'absolute',
					top: '-1rem',
					right: '-0.5rem'
				}}>{badge}</Pill>
				<Card elevation={3} sx={{width: "100%"}}>
					<CardContent style={{padding: '2.5rem'}}>
						<Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
							{title}
						</Typography>
						<SectionInfoCheckItem variant={"p"} fontWeight={"normal"} mt={0.5}>
							{text}
						</SectionInfoCheckItem>
					</CardContent>
				</Card>
			</Box>
	)
}

function Inventory(props) {
	
	const badgeCards = [
		{
			title: 'Upload inventory items',
			text: 'Add your items',
			badge: 'Easy tool'
		},
		{
			title: 'Generate Barcode',
			text: 'In a matter of a click!',
			badge: 'Full support'
		},
		{
			title: 'Download Invoiss app',
			text: 'Start your inventory',
			badge: 'Enjoy'
		}
	];
	return (
			<>
				<Section backgroundColor={"#000"} isStartContainer={true} shapeBottom={true}>
					<Container sx={{py: 5}}>
						<SectionInfoCard
								cardBgColor={"transparent"}
								imageSrc={require("../../assets/images/inventory-sc.png").default}
								imageAlt="inventory sc png"
								imageStyles={{paddingTop: 0}}
								cardContentStyles={{padding: '0 !important'}}
								paddingLeft={0}
						>
							
							<Stack justifyContent="center" height={"100%"}>
								<Typography variant={"h4"} color={"text.green"} fontWeight={"bold"} mb={3}>
									Inventory Management
								</Typography>
								<Typography variant={"h4"} color={"text.white"} fontWeight={"bold"} gutterBottom>
									Protect your assets via accurate inventory control.
								</Typography>
								<Typography color={"text.white"} variant={"h5"}>
									Experience what world class corporations do for their inventory!
								</Typography>
							</Stack>
						</SectionInfoCard>
						<AppDownloadButtons marginTop={8} marginBottom={8}/>
					</Container>
				</Section>
				
				<Section sx={{paddingTop: 3}}>
					<Container>
						<Box textAlign={"center"} mb={4}>
							<Pill mb={3} color={"text.white"} backgroundColor={"#508eff80"}>INVENTORY MANAGEMENT</Pill>
							<Typography variant={"h4"} gutterBottom fontWeight={"bold"}>The fastest way to take inventory</Typography>
							<Typography variant={"h4"} gutterBottom fontWeight={"bold"} color={"text.purple-dark"}>in 3 easy
								steps</Typography>
							<Typography gutterBottom color={"text.purple-dark"}>
								Scanning barcode is an invaluable efficiency and accuracy tool
							</Typography>
						</Box>
						
						<Card sx={{background: "linear-gradient(to right, #6261b1, #6f77d8)", my: 10, borderRadius: '1.5rem'}}
						      data-aos="fade-right">
							<CardContent>
								<Grid container>
									<Grid item xs={12} md={4}>
										<InventoryStep
												icon={User}
												dividerRight={true}
												index={1}
												title={"Create your account"}
												text={"One-click sign up. No personal data is required."}/>
									</Grid>
									<Grid item xs={12} md={4}>
										<InventoryStep
												icon={Upload}
												dividerLeft={true}
												dividerRight={true}
												index={2}
												title={"Upload your data"}
												text={"Upload your inventory items in Bulk. Or we would take care of it for you."}/>
									</Grid>
									<Grid item xs={12} md={4}>
										<InventoryStep
												icon={Barcode}
												dividerLeft={true}
												index={3}
												title={"Start Scanning"}
												text={"And actually start enjoying the inventory process."}/>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						
						
						<GetStartedCard heading={"Take inventory in minutes"} subheading={"Accuracy is at our core."}
						                data-aos="fade-left"/>
					</Container>
				</Section>
				
				<Section backgroundColor={"#000"}>
					<Container className={"start-container"} sx={{mt: 5, pb: 0}}>
						<SectionInfoCard
								cardBgColor={"linear-gradient(147deg, #17181b 0%, rgb(67, 67, 67) 80%)"}
								cardStyles={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
								imageSrc={require("../../assets/images/scanning-barcode.png").default}
								imageAlt="purchasing status png"
								cardTitle={
									(
											<Box textAlign={"center"}>
												<Pill backgroundColor={"#508eff80"} color={"text.white"} mb={3}>COMPLETE CONTROL</Pill>
												<Typography variant={"h4"} fontWeight={"bold"} textAlign={"center"} color={"text.white"}>
													Monitor and analyze usage patterns.
												</Typography>
											</Box>
									)
								}
								cardSubheader={
									(
											<Typography gutterBottom variant={"h6"} textAlign={"center"}
											            color={"text.white"}>
												keep track of what is happening with your inventory and run reports anytime even while off-site.
											</Typography>
									)
								}
						>
							
							<Stack justifyContent="center">
								
								{
									sectionInfoCard2Items.map((item, index)=>{
										return (
												<SummaryItem
														key={index}
														icon={item.icon}
														mb={3}
														iconFontSize={"3.5rem"}
														iconColor={"white"}
														title={item.title}
														titleProps={{color: "#b1490b", fontWeight: "bold"}}
														description={item.description}
														descriptionProps={{color: "text.white", variant: 'p'}}
												/>
										)
									})
								}
							
							</Stack>
						</SectionInfoCard>
					</Container>
				</Section>
				
				<Section>
					<Parallax imageSrc={require("../../assets/images/branding.png").default} imageAlt="branding image"
					          hideScrollDownButton={true} height={"27.5rem"}>
						<GetStartedButton borderRadius={"1.5rem"}/>
					</Parallax>
					<Container>
						<Grid container mb={3} mt={-10} spacing={5}>
							{
								badgeCards.map((item, index) => {
									return (
											<Grid item xs={12} md={4} key={index}>
												<BadgeCard {...item} key={index}/>
											</Grid>
									)
								})
							}
						</Grid>
					</Container>
				</Section>
			
			</>
	);
}

export default Inventory;