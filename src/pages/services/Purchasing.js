import {Box, Container, Grid, Stack, Typography} from "@material-ui/core";
import GetStartedCard from "../../components/services/GetStartedCard";
import SectionInfoCard from "../../components/common/card/SectionInfoCard";
import AppDownloadButtons from "../../components/common/AppDownloadButtons";
import SummaryItem from "../../components/common/SummaryItem";
import SectionInfoCheckItem from "../../components/common/SectionInfoCheckItem";
import GetStartedButton from "../../components/common/GetStartedButton";
import Pill from "../../components/styled/component/Pill";
import Chat from "../../components/icons/Chat";
import FileDoneIcon from "../../components/icons/FileDoneIcon";
import Section from "../../components/styled/component/Section";

function Purchasing(props) {
	return (
			<>
				<Container className={"start-container"} sx={{mt: 3}}>
					<SectionInfoCard
							cardBgColor={"linear-gradient(316deg, #6247aa 0%, #4d3d9a 74%)"}
							imageSrc={require("../../assets/images/purchasing-status.png").default}
							imageAlt="purchasing status png"
							imageOrder={{md: 1, xs: 2}}
							order={{md: 2, xs: 1}}
					>
						<Stack height="100%" justifyContent="center">
							<Typography variant={"h3"} fontWeight={"bold"} mb={3} textAlign={"left"}>
								A powerful tool for Vendor Ordering
							</Typography>
							<Typography variant={"h4"} color={"text.white"} mb={3}>
								Keep a record for what you buy from your suppliers<Typography variant={"span"}>.</Typography>
							</Typography>
							
							<Typography gutterBottom variant={"h6"} color={"text.white"}>
								A purchase report can help your business budget more efficiently.
							</Typography>
						
						</Stack>
					</SectionInfoCard>
					<AppDownloadButtons bgColor={"#000"}/>
				</Container>
				<section>
					<SectionInfoCard
							cardBgColor={"#000000"}
							cardStyles={{borderRadius: 0}}
							imageSrc={require("../../assets/images/vendorOrdering.png").default}
							imageAlt="purchasing status png"
							imageStyles={{paddingTop: 0}}
							imageOrder={{md: 1, xs: 2}}
							order={{md: 2, xs: 1}}
							cardTitle={
								(
										<>
											<Box textAlign={"center"} mb={3}>
												<Pill backgroundColor={"#508eff80"} color={"text.white"}>PURCHASING</Pill>
											</Box>
											<Typography variant={"h4"} fontWeight={"bold"} textAlign={"center"} color={"text.white"} mb={3}>
												Get setup with purchasing <Typography variant={"span"} color={"text.purple-dark"}>in 3 easy
												steps</Typography>
											</Typography>
										</>
								)
							}
							cardSubheader={
								(
										<Typography gutterBottom variant={"h5"} fontWeight={"bold"} textAlign={"center"}
										            color={"text.blue"}>
											Create or upload a list of the items you need from your vendors. You can also track your purchase
											history and view previous orders.
										</Typography>
								)
							}
					>
						
						<Stack justifyContent="center" height={"100%"}>
							<SectionInfoCheckItem index={1} variant={"div"} mb={3}>
								<Typography variant={"h5"} fontWeight={"bold"} color={"text.white"} gutterBottom>
									Add your vendors
								</Typography>
								<Typography color={"text.blue"}>
									Add your vendor information. View & manage all vendors in one central location.
								</Typography>
							</SectionInfoCheckItem>
							<SectionInfoCheckItem variant={"div"} index={2} mb={3}>
								<Typography variant={"h5"} fontWeight={"bold"} color={"text.white"} gutterBottom>
									Add your vendor items
								</Typography>
								<Typography color={"text.blue"}>
									Once you have all the vendors' items added you are ready to place orders with your suppliers.
								</Typography>
							</SectionInfoCheckItem>
							<SectionInfoCheckItem variant={"div"} index={3}>
								<Typography variant={"h5"} fontWeight={"bold"} color={"text.white"} gutterBottom>
									Delegate purchasing task
								</Typography>
								<Typography color={"text.blue"}>
									Finally, assign vendor ordering to specific employees with limited viewing rights.
								</Typography>
							</SectionInfoCheckItem>
						</Stack>
					</SectionInfoCard>
				</section>
				
				
				<Container sx={{my: 3}}>
					<GetStartedCard
							heading={"Communicate with your vendor in an easier way."}
							subheading={"Live Chat with your supplier contact person and make sure for more accurate delivery"}
							elevation={0}
					/>
				</Container>
				
				<Section backgroundColor={"#f1f4f8"}>
					<Container>
						<SectionInfoCard
								cardBgColor={"transparent"}
								cardStyles={{borderRadius: 0, padding: '6rem 0'}}
								imageSrc={require("../../assets/images/recurringw.png").default}
								imageAlt="purchasing status png"
								imageStyles={{paddingTop: 0}}
								cardContentStyles={{padding: '0 !important'}}
						>
							
							<Stack justifyContent="center" height={"100%"}>
								<Box textAlign={"left"} mb={3}>
									<Pill backgroundColor={"#508eff80"} color={"#fff"} sx={{fontSize: '0.9rem'}}>STANDING ORDERS</Pill>
								</Box>
								<Typography variant={"h4"} color={"#000"} mb={3}>
									Place orders with your vendor <Typography variant={"span"} color={"text.purple-dark"}> on a recurring
									basis</Typography>.
								</Typography>
								<Typography color={"text.grey-blue"} mb={5}>
									Save time, make your orders more accurate and don’t miss any vendor orders by using the recurring
									feature.
								</Typography>
								<Typography color={"text.grey-blue"} mb={2}>
									You are in full control of the frequency of these orders.
								</Typography>
								<Grid container>
									<Grid item xs={6}>
										<SectionInfoCheckItem variant={"p"} fontWeight={"normal"} mt={0.5} color={""}>
											Specific Dates
										</SectionInfoCheckItem>
									</Grid>
									<Grid item xs={6}>
										<SectionInfoCheckItem variant={"p"} fontWeight={"normal"} mt={0.5}>
											Monthly basis
										</SectionInfoCheckItem>
									</Grid>
									<Grid item xs={6}>
										<SectionInfoCheckItem variant={"p"} fontWeight={"normal"} mt={0.5}>
											Weekly Basis
										</SectionInfoCheckItem>
									</Grid>
									<Grid item xs={6}>
										<SectionInfoCheckItem variant={"p"} fontWeight={"normal"} mt={0.5}>
											Yearly basis
										</SectionInfoCheckItem>
									</Grid>
								</Grid>
							</Stack>
						</SectionInfoCard>
					</Container>
				</Section>
				<section>
					<Container sx={{my: 3}}>
						
						<SectionInfoCard
								cardBgColor={"linear-gradient(to right, #000000, #093028)"}
								imageSrc={require("../../assets/images/chat-d.png").default}
								imageAlt="purchasing status png"
						>
							<Stack height="100%" justifyContent="center">
								<Typography variant={"h4"} fontWeight={"bold"} color={"text.blue"} gutterBottom textAlign={"left"}>
									Informative, efficient, powerful
								</Typography>
								<Typography variant={"h5"} color={"text.white"} fontWeight={"bold"} mb={4}>
									Send orders and reminders
								</Typography>
								
								<Typography mb={5} fontSize={"18px"} color={"#d09267"}>
									Stay in control by having the auto reminder turned on for your vendor so they don't miss your orders.
									Your vendors can view and accept your order in real time.
								</Typography>
								
								<SummaryItem
										icon={Chat}
										mb={3}
										iconFontSize={"3.5rem"}
										iconColor={"white"}
										title={"Chat with your vendor"}
										titleProps={{color: "text.blue"}}
										description={"Communicate with your vendor in real time. A proper communication helps for a better outcome."}/>
								<SummaryItem
										icon={FileDoneIcon}
										mb={3}
										iconFontSize={"3.5rem"}
										iconColor={"white"}
										title={"Order tracking Status"}
										titleProps={{color: "text.blue"}}
										description={"View the status of your orders and proactively address any purchase issues with your vendors."}/>
							
							</Stack>
						</SectionInfoCard>
						
						<Box textAlign={"center"} mt={5}>
							<GetStartedButton/>
						</Box>
					
					</Container>
				</section>
			
			</>
	
	);
}

export default Purchasing;