import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Container,
	createStyles,
	Grid,
	Stack,
	Typography
} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import ServiceItem from "../components/welcome/ServiceItem";
import VendorOrderingIcon from "../components/icons/VendorOrderingIcon";
import InventoryIcon from "../components/icons/InventoryIcon";
import OrderManagementIcon from "../components/icons/OrderManagementIcon";
import InvoiceIcon from "../components/icons/InvoiceIcon";
import SectionInfoCard from "../components/common/card/SectionInfoCard";
import SectionInfoCheckItem from "../components/common/SectionInfoCheckItem";
import React, {Component} from "react";
import AppDownloadButtons from "../components/common/AppDownloadButtons";
import GetStartedButton from "../components/common/GetStartedButton";
import SummaryItem from "../components/common/SummaryItem";
import TimeScheduleIcon from "../components/icons/TimeScheduleIcon";
import Stats from "../components/icons/Stats";
import Switch from "../components/icons/Switch";
import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import Pill from "../components/styled/component/Pill";
import Button from "@material-ui/core/Button";
import Section from "../components/styled/component/Section";
import MediaLoopIcon from "../components/icons/MediaLoopIcon";

const services = [
	{
		icon: VendorOrderingIcon,
		title: 'Vendor Ordering',
		description: 'Place orders with your supplier and check & receive items upon delivery.',
	}, {
		icon: InventoryIcon,
		title: 'Inventory',
		description: 'Taking inventory has never been easier when using the Invoiss app with your phone camera.',
	}, {
		icon: OrderManagementIcon,
		title: 'Order Management',
		description: 'Track On-line and Off-line orders, you can also tag the order with its status, so other team members can be aware of the progress.',
	}, {
		icon: InvoiceIcon,
		title: 'Invoicing & Estimate',
		description: 'Create invoices and estimates and allow your customers to view, remit payments and chat with you in real time.',
	},

];

// const businessTypes = ['small sized', "medium sized", 'enterprise'];

const styles = ((theme) =>
				createStyles({
					'@global': {
						".hero-section": {
							minHeight: '100vh',
							maxHeight: '100%',
							background: "radial-gradient(closest-side, rgb(222 118 118 / 70%), rgba(228, 79, 79, 0)) 600% 500% / 90% 90% no-repeat, radial-gradient(closest-side, rgba(228, 79, 79, 0.7), rgba(228, 79, 79, 0)) 600% 180% / 90% 90% no-repeat, radial-gradient(closest-side, rgba(250, 250, 218, 0.2), rgba(250, 250, 218, 0)) 100% 150% / 75% 50% no-repeat, radial-gradient(closest-side, rgba(250, 250, 218, 0.3), rgba(250, 250, 218, 0)) -400% -100% / 90% 80% no-repeat, radial-gradient(closest-side, rgba(94, 225, 249, 0.8), rgba(94, 225, 249, 0)) -100% -250% / 85% 80% no-repeat, radial-gradient(closest-side, rgba(94, 225, 249, 0.6), rgba(94, 225, 249, 0)) -170% 100% / 70% 60% no-repeat, linear-gradient(30deg, rgb(101 36 160) 10%, rgba(110, 16, 206, 0) 70%, rgba(255, 255, 255, 0) 90%) 50% 50% / 100% 100% no-repeat, linear-gradient(144deg, rgba(233, 235, 104, 0), rgba(233, 235, 104, 0.3)) no-repeat, linear-gradient(90deg, rgba(104, 184, 235, 0.11), rgba(15, 216, 223, 0.11)) no-repeat, rgb(93 131 202)",
							
							'& .hero-image': {
								boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
								background: '#ffffff',
								width: '200px',
								height: '200px',
								borderRadius: ' 2rem'
							}
						},
						".run-business-section": {
							backgroundColor: '#1f2236'
						},
						".purchase-team": {
							"& .animate-streamline::before": {
								content: "attr(data-business-first)",
								overflow: 'hidden',
								width: 0,
								display: 'block',
								borderRight: '.15em solid currentColor',
								whiteSpace: 'nowrap',
								margin: '0',
								paddingRight: '5px',
								animation: "typing 2s steps(30, end) alternate infinite, change-text 12s linear infinite, blink-caret .5s step-end infinite",
							}
						},
						"@keyframes typing": {
							"from": {
								width: 0,
								paddingRight: 0
							},
							"to": {
								width: "100%",
								paddingRight: '5px',
							}
						},
						"@keyframes change-text": {
							"0%, 33.33%": {
								content: "attr(data-business-first)",
							},
							"33.34%, 66.66%": {
								content: "attr(data-business-second)",
								
							},
							"66.67%, 100%": {
								content: "attr(data-business-third)",
							}
						},
					},
					grid: {
						overflowX: 'hidden',
						height: "100%"
					}
				})
)


const premiumContents = [
	"Add unlimited Clients",
	"Unlimited estimates and invoices",
	"Live chat with your clients and vendors.",
	"Create team members and assign permissions",
	"Detailed Sales & purchase Report",
	"Process Payment Online",
	"Track invoices, orders and Payment status",
	"Monthly Client Statement generator",
	"Place orders with your vendors",
	"Generate monthly Purchase report",
	"Take inventory using your phone camera"
];


class Welcome extends Component {
	
	
	componentDidMount() {
	
	}
	
	componentWillUnmount() {
	
	}
	
	render() {
		return (
				<>
					{/*hero section*/}
					<section className="hero-section">
						<Container sx={{pt: '48px', pb: 4}}>
							<Grid container className={this.props.classes.grid} spacing={2} sx={{my: {xs: 9, md: 0}}} alignItems="center" justifyContent="center" minHeight={'30rem'}>
								<Grid item className={"slide-left"} xs={12} md={8} data-aos="fade-right" order={{xs: 2, md: 1}}>
									<Typography variant='h3' fontWeight={"medium"} textAlign={'center'} color={'text.white'}>
										Manage your sales and purchases
									</Typography>
									<Box textAlign={"center"} mt={4}>
										<GetStartedButton/>
									</Box>
								</Grid>
								<Grid item xs={12} md={4} textAlign={'center'} data-aos="fade-left" order={{xs: 1, md: 2}}>
									<img src={require('../assets/images/favicon.png').default} className="hero-image" alt="invoiss icon"/>
								</Grid>
							</Grid>
							<Grid container className={this.props.classes.grid} spacing={2} data-aos="fade-up">
								{services.map((item, index) => (
										<Grid item xs={12} md={6} lg={3} key={index}>
											<ServiceItem {...item}/>
										</Grid>
								))}
							</Grid>
							<AppDownloadButtons marginTop={8}/>
						</Container>
					</section>
					
					{/*run business*/}
					<section className="run-business-section">
						<Container sx={{pb: 4}}>
							<Grid container className={this.props.classes.grid} spacing={2} alignItems="center" sx={{minHeight: '25rem'}}>
								<Grid item xs={12} sm={9} md={7} lg={6}>
									<Typography variant='h2' className="text-white" mb={5}>An easier way to run your business</Typography>
									<Typography variant='h4' className="text-white">Take inventory, control your purchases, create
										estimates, invoices and more.</Typography>
								</Grid>
							</Grid>
							<Grid container className={this.props.classes.grid} spacing={2}>
								<Grid item xs={12} md={8} lg={8} data-aos="fade-right">
									<SectionInfoCard
											imageSrc={require('../assets/images/invoices-app.png').default}
											imageAlt="App invoice screen"
											imageOrder={{md: 1, xs: 2}}
											order={{md: 2, xs: 1}}
											cardBgColor="#84a3ff"
									>
										<Typography variant='h4' fontWeight="bold" mb={6}>Unlimited estimates & invoices</Typography>
										
										<SectionInfoCheckItem variant='h6'>
											Create customized invoices
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6'>
											Chat live with your clients
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6'>
											Get paid faster
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6'>
											Send auto monthly statements
										</SectionInfoCheckItem>
									</SectionInfoCard>
								</Grid>
								<Grid item xs={12} md={4} lg={4} data-aos="fade-left">
									<SectionInfoCard cardBgColor="#eaeaea" cardStyles={{height: '100%'}} px={4}>
										<Stack direction="row" justifyContent={"center"} alignItems="center" height={"100%"}>
											<Box p={3} data-aos="fade-left">
												<Typography variant='h4' textAlign={"center"} fontWeight="bold" mb={4}>
													<MediaLoopIcon color={"#6261b1"} fontSize={"3.5rem"}/>
													<br/>
													Setup Recurring invoices, orders and purchases.
												</Typography>
												<SectionInfoCheckItem variant='h6'>Weekly</SectionInfoCheckItem>
												<SectionInfoCheckItem
														variant='h6'>Monthly</SectionInfoCheckItem>
												<SectionInfoCheckItem variant='h6'>Yearly</SectionInfoCheckItem>
											</Box>
										</Stack>
									</SectionInfoCard>
								</Grid>
							</Grid>
						</Container>
						<Container sx={{pb: 4}}>
							<Grid container className={this.props.classes.grid} spacing={2}>
								<Grid item xs={12} md={4} lg={5} data-aos="fade-right">
									<SectionInfoCard
											cardBgColor="linear-gradient(rgb(241 172 232 / 95%), rgb(98 102 208 / 90%)) rgb(72 40 113)"
											cardStyles={{height: '100%'}} px={4}>
										<Stack direction="row" justifyContent={"center"} alignItems="center" height={"100%"}>
											<Box p={0.5}>
												<Box textAlign={"center"} sx={{mb: 2}}>
													<img src={require('../assets/images/clover.png').default} alt="Clover logo"
													     style={{maxWidth: '16rem', margin: 'auto'}}/>
												</Box>
												<Typography variant='h4' textAlign={"center"} fontWeight="bold" mb={4}>
													Are you a Clover user?
												</Typography>
												
												
												<Typography variant='h5' color="#fff" textAlign="center">
													See your items, clients, and online orders all in one place
												</Typography>
												<SectionInfoCheckItem color="#fff">
													Create invoices and orders for your Clover Clients
												</SectionInfoCheckItem>
												<SectionInfoCheckItem color="#fff">
													Collect payments using your Clover account gateway
												</SectionInfoCheckItem>
											</Box>
										</Stack>
									</SectionInfoCard>
								</Grid>
								<Grid item xs={12} md={8} lg={7} data-aos="fade-left">
									<SectionInfoCard
											imageSrc={require('../assets/images/ordering-demo.png').default}
											imageAlt="App invoice screen"
											imageOrder={{lg: 2, sm: 2}}
											order={{lg: 1, sm: 1}}
											cardBgColor="linear-gradient(147deg, #000000 0%, #434343 74%)"
									>
										<Typography variant='h4' color="#fff" fontWeight="bold" mb={6}>
											Organize your offline and online orders
										</Typography>
										
										<SectionInfoCheckItem variant='h6' color="#fff">
											Place phone, fax and email orders
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6' color="#fff">
											Process payments
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6' color="#fff">
											Update status for each order
										</SectionInfoCheckItem>
										<Box sx={{ml: 3}}>
											<SectionInfoCheckItem iconColor="#19965b" color="#fff">
												Out for delivery
											</SectionInfoCheckItem>
											<SectionInfoCheckItem iconColor="#19965b" color="#fff">
												Delivered
											</SectionInfoCheckItem>
											<SectionInfoCheckItem iconColor="#19965b" color="#fff">
												and more
											</SectionInfoCheckItem>
										</Box>
									</SectionInfoCard>
								</Grid>
							</Grid>
						</Container>
						<Container sx={{pb: 4}}>
							<SectionInfoCard
									imageSrc={require('../assets/images/ordering-demo.png').default}
									imageAlt="App invoice screen"
									imageOrder={{sm: 1, xs: 2}}
									order={{sm: 2, xs: 1}}
									cardBgColor="#eaeaea"
							>
								<Typography variant='h4' fontWeight="bold" mb={6}>
									Vendor Ordering
								</Typography>
								<Typography variant='h5' fontWeight="bold" mb={6}>
									A strong connection between you and your vendors.
								</Typography>
								
								<SectionInfoCheckItem>
									Place orders with your vendors
								</SectionInfoCheckItem>
								<SectionInfoCheckItem>
									Setup recurring purchases
								</SectionInfoCheckItem>
								<SectionInfoCheckItem>
									Catch errors and report to your vendor
								</SectionInfoCheckItem>
								<SectionInfoCheckItem>
									Live Chat with your vendor
								</SectionInfoCheckItem>
							</SectionInfoCard>
						</Container>
						<Container sx={{pb: 4}}>
							<Grid container className={this.props.classes.grid} spacing={2}>
								<Grid item xs={12} md={4} lg={4} data-aos="fade-right">
									<SectionInfoCard cardBgColor="#131313">
										<Stack height={"100%"} justifyContent={"flex-end"}>
											<img src={require('../assets/images/inventory-h.png').default} alt="Inventory history"
											     style={{width: '100%', marginBottom: "-24px"}} data-aos="fade-up"/>
										</Stack>
									</SectionInfoCard>
								</Grid>
								<Grid item xs={12} md={8} lg={8} data-aos="fade-left">
									<SectionInfoCard
											imageSrc={require('../assets/images/scanning-barcode.png').default}
											imageAlt="Scanning screen"
											imageOrder={{lg: 2, sm: 2}}
											imageStyles={{marginRight: '-12.5rem'}}
											order={{lg: 1, sm: 1}}
											cardBgColor="linear-gradient(315deg, #09c6f9 0%, #353cad 74%)"
									>
										<Typography variant='h4' color="#fff" fontWeight="bold" mb={6}>
											Take Inventory
										</Typography>
										<Typography variant='h5' color="#fff" fontWeight="bold" mb={6}>
											The fastest way to take inventory
										</Typography>
										
										<SectionInfoCheckItem variant='h6' color="#fff">
											Generate barcode for your items
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6' color="#fff">
											Take inventory with multiple phones simultaneously
										</SectionInfoCheckItem>
										<SectionInfoCheckItem variant='h6' color="#fff">
											Always access your inventory history
										</SectionInfoCheckItem>
									</SectionInfoCard>
								</Grid>
							</Grid>
						</Container>
						<Container sx={{pb: 6}}>
							<Typography variant="h3" fontWeight={"bold"} color="#fff" my={3} textAlign={"center"}>Flexibility on
								payment
								plan providers</Typography>
							<Stack direction="row" justifyContent={"space-around"} alignItems={"center"} maxWidth={'25rem'}
							       marginX={"auto"}>
								<img src={require('../assets/images/stripe.png').default} alt="Clover logo"
								     style={{maxWidth: '8rem'}}/>
								<img src={require('../assets/images/clover.png').default} alt="Clover logo"
								     style={{maxWidth: '9rem'}}/>
							</Stack>
						</Container>
					</section>
					
					<section>
						<Container sx={{my: 4}}>
							<SectionInfoCard
									imageSrc={require('../assets/images/chat-d2.png').default}
									imageAlt="Scanning screen"
									imageOrder={{lg: 2, sm: 2}}
									order={{lg: 1, sm: 1}}
									cardBgColor="linear-gradient(315deg, #d5d5ff 0%, #707ac7 64%)"
							>
								<Typography variant='h3' fontWeight="bold" mb={3}>
									Powerful tools to control your business
								</Typography>
								<Typography variant='h3' color="#fff" fontWeight="bold" mb={6}>
									It's never been easier.
								</Typography>
								<Typography variant='h5' color="#fff" fontWeight="bold" mb={6}>
									Invoiss provides tools to eliminate human errors and improve your business performance.
								</Typography>
								
								<SectionInfoCheckItem variant='h6' color="#fff">
									Generate barcode for your items
								</SectionInfoCheckItem>
								<SectionInfoCheckItem variant='h6' color="#fff">
									Take inventory with multiple phones simultaneously
								</SectionInfoCheckItem>
								<SectionInfoCheckItem variant='h6' color="#fff">
									Always access your inventory history
								</SectionInfoCheckItem>
							</SectionInfoCard>
						</Container>
					</section>
					<section className={"purchase-team"}>
						<Container sx={{my: 4}}>
							<SectionInfoCard
									imageSrc={require('../assets/images/purchase-teams.png').default}
									imageAlt="Scanning screen"
									imageOrder={{md: 1, sm: 2}}
									order={{md: 2, sm: 1}}
									cardBgColor="#060819"
							>
								<Typography variant='h5' textAlign={"left"} fontWeight="bold" color={"#1dbf73"}>
									Leverage Invoiss to streamline your
								</Typography>
								<Box display={"flex"}>
									<div>
										<Typography
												variant='h5' className={"animate-streamline"} color={"#1dbf73"}
												data-business-first={"small sized"}
												data-business-second={"medium sized"}
												data-business-third={"enterprise"}
										>
										</Typography>
									</div>
								</Box>
								<Typography variant='h5' textAlign={"left"} fontWeight="bold" color={"#1dbf73"} mb={3}>
									business
								</Typography>
								<Typography variant='h3' color="#fff" mb={6}>
									Access your accounting anywhere anytime.
								</Typography>
								
								<SummaryItem
										icon={TimeScheduleIcon}
										mb={3}
										iconFontSize={"3.5rem"}
										titleProps={{color: "text.green"}}
										iconColor={"green"}
										title={"Daily activities"}
										description={"View and monitor all activities for all locations by all users."}/>
								
								<SummaryItem
										icon={Stats}
										mb={3}
										titleProps={{color: "text.green"}}
										iconFontSize={"3.5rem"}
										iconColor={"green"}
										title={"Generate Reports"}
										description={"View your weekly, monthly and yearly business performance in graphs. and generate reports at anytime."}/>
								
								<SummaryItem
										titleProps={{color: "text.green"}}
										icon={Switch}
										iconFontSize={"3.5rem"}
										iconColor={"green"}
										title={"Give roles to your employees"}
										description={"Invoiss allows you to assign permission to employees and have them access only to certain areas. Create limited-rights accounts by assigning permissions to employees for each department."}/>
							</SectionInfoCard>
						</Container>
					</section>
					
					<Section sx={{zIndex: 1}}>
						<Container>
							<Grid container className={this.props.classes.grid} my={20}>
								<Grid item xs={12} md={10} lg={8} xl={8}>
									<Typography variant={"h3"} fontWeight={"bold"} mb={4}>
										Advance Reporting <Typography variant={"span"} color={"text.purple-dark"}>Valuable insights at a
										glance</Typography>
									</Typography>
									<Typography variant={"h4"} mb={4}>
										The detailed reports will help you track your sales, purchases and inventory.
									</Typography>
									
									<SummaryItem
											icon={ArrowDownIcon}
											iconFontSize={"3.5rem"}
											iconColor={"purple"}
											title={"Generate reports at any given time"}
											titleProps={{fontWeight: "bold"}}
											description={"Self-generated real time reports ensure the accuracy of your COGs (Cost of goods) and Sales."}
											descriptionProps={{color: "text.purple-dark"}}
									/>
								</Grid>
							</Grid>
							<Typography textAlign={"center"} variant={"h4"} mb={1}>
								Try it for free
							</Typography>
							<Typography textAlign={"center"} mb={6}>
								Limited time only
							</Typography>
							<Grid container className={this.props.classes.grid} mt={20} alignItems={"center"} spacing={{xs: 2, md: 0}}>
								<Grid item xs={12} md={6}>
									<Card elevation={0}
									      sx={{borderRadius: "1.5rem", background: "linear-gradient(to right, #96c93d, #00b09b)"}}>
										<CardHeader sx={{textAlign: 'center', padding: "3rem 1rem 0"}} title={(
												<Pill backgroundColor={"#508eff80"} color={"text.white"}>PREMIUM</Pill>
										)}
										            subheader={(
												            <Stack direction={"row"} justifyContent={"center"} color={"text.primary"} mt={3}>
													            <Typography textAlign={"center"} variant={"h4"}>
														            $
													            </Typography>
													            <Typography textAlign={"center"} variant={"h1"}>
														            0
													            </Typography>
												            </Stack>
										            )}
										/>
										<CardContent>
											{
												premiumContents && premiumContents.map((item, index) => {
													return (
															<SectionInfoCheckItem
																	iconColor={"text.green"}
																	key={index} fontWeight={"normal"}
																	variant={"span"} mt={0.5}
																	color={"text.white"}>
																{item}
															</SectionInfoCheckItem>
													)
												})
											}
										
										</CardContent>
										
										<CardActions sx={{padding: 0}}>
											<Button color={"primary"} fullWidth sx={{padding: "1rem"}}>Get started Now</Button>
										</CardActions>
									
									</Card>
								</Grid>
								
								<Grid item xs={12} md={6}>
									<Card elevation={0} variant={"outlined"} sx={{borderRadius: "1.5rem"}}>
										<CardHeader sx={{textAlign: 'center', padding: "3rem 1rem"}} title={(
												<Pill backgroundColor={"#508eff80"} color={"text.white"}>24/7 SUPPORT</Pill>
										)}/>
										<CardContent>
											<Typography textAlign={"center"} variant={"h6"} mb={6} mx={{xs: 0, md: 4}}>
												We are here when you need us. Our expert staff can help with inventory entry, use of features,
												review of procedures, and items entries.
											</Typography>
										</CardContent>
										
										<CardActions sx={{backgroundColor: '#d9e2ef', padding: 0}}>
											<Button fullWidth color={"primary"} sx={{padding: "1rem"}}>Contact Us</Button>
										</CardActions>
									
									</Card>
								</Grid>
							</Grid>
						
						</Container>
					</Section>
					
					<Section backgroundColor={'#000'} sx={{pt: 50, mt: -30, zIndex: 0}}>
						<Container>
							<Grid container className={this.props.classes.grid} spacing={{xs: 2, md: 2.5}}>
								<Grid item xs={12} md={6}>
									<SectionInfoCheckItem
											iconColor={"text.green"}
											fontWeight={"normal"}
											variant={"span"} mt={0.5}
											color={"text.white"}
											index={"?"}
									>
										How can I upload my items to my Invoiss account?
										<Typography color={"text.grey-blue"} mt={2}>
											You have two options:
											<ol>
												<li>
													You can upload your items using bulk uploading or one at the time. Very easy tool to use!
												</li>
												<li>
													Or send us your items, and we will upload them to your account within 2 business days.
												</li>
											</ol>
										</Typography>
									
									</SectionInfoCheckItem>
									<SectionInfoCheckItem
											iconColor={"text.green"}
											fontWeight={"normal"}
											variant={"span"} mt={0.5} mb={1}
											color={"text.white"}
											index={"?"}
									>
										How can I set up my Inventory?
										<Typography color={"text.purple-dark"} mt={2}>
											Invoiss’s advanced inventory process is streamlined and seamless. We provide you with everything
											you need. Scan with your phone camera and take inventory in the fastest possible way. A true
											turn-key solution.
										</Typography>
									</SectionInfoCheckItem>
									
									<SectionInfoCheckItem
											iconColor={"text.green"}
											fontWeight={"normal"}
											variant={"span"} mt={0.5}
											color={"text.white"}
											index={"?"}
									>
										
										Can I view my online orders too?
										<Typography color={"text.purple-dark"} mt={2}>
											The short answer is “yes.” We are constantly growing and integrating point of sale systems into
											Invoiss platform. Currently, with the Clover point of sale system you can see your online orders.
											Let us know what POS you use and we will add that to our to-do list.
										</Typography>
									</SectionInfoCheckItem>
								</Grid>
								<Grid item xs={12} md={6}>
									<SectionInfoCheckItem
											iconColor={"text.green"}
											fontWeight={"normal"}
											variant={"span"} mt={0.5} mb={2}
											color={"text.white"}
											index={"?"}
									>
										Can my clients pay for their invoices online?
										<Typography color={"text.purple-dark"} mt={2}>
											Yes, your clients will have a payment button to pay for their invoices and orders partially or in
											full with a credit card or debit card.
										</Typography>
									</SectionInfoCheckItem>
									<SectionInfoCheckItem
											iconColor={"text.green"}
											fontWeight={"normal"}
											variant={"span"} mt={0.5} mb={3}
											color={"text.white"}
											index={"?"}
									>
										
										Do I need to inform my supplier about using Invoiss as my purchasing platform?
										<Typography color={"text.purple-dark"} mt={2}>
											No, not required. Once you add your vendors with their items you can send a test order and then follow up with them.
										</Typography>
									</SectionInfoCheckItem>
									<SectionInfoCheckItem
											iconColor={"text.green"}
											fontWeight={"normal"}
											variant={"span"} mt={0.5} mb={3}
											color={"text.white"}
											index={"?"}
									>
										
										How can I upload my suppliers’ items?
										<Typography color={"text.purple-dark"} mt={2} mb={4}>
											We made it simple; you have three options;
										</Typography>
										<Typography color={"text.grey-blue"}>
											<ol>
												<li>
													You can upload your items using bulk uploading or one at the time.
												</li>
												<li>
													From the Invoiss purchasing page, enter your supplier’s information and submit "Request items", your supplier will be able to upload your items for you
												</li>
												<li>
													Send us your items and your suppliers’ information. We’ll set you up in 2 business days.
												</li>
											</ol>
										</Typography>
									</SectionInfoCheckItem>
								</Grid>
							</Grid>
							<Box textAlign={"center"} pt={5}>
								<GetStartedButton/>
							</Box>
						</Container>
					
					</Section>
				
				</>
		);
	}
}


export default withStyles(styles)(Welcome);