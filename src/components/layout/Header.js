import PropTypes from 'prop-types';
import {
	AppBar,
	CssBaseline,
	IconButton,
	Toolbar,
	useScrollTrigger,
	useMediaQuery,
	MenuItem,
	Container, Box, Stack, Divider, Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarButton from "../styled/buttons/NavbarButton";
import NavbarLink from "../styled/buttons/NavbarLink";
import StyledMenu from "../styled/component/StyledMenu";
import CloseIcon from '@material-ui/icons/Close';

function ElevationScroll(props) {
	const {children, window} = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});
	
	return React.cloneElement(children, {
		style: {
			backgroundColor: trigger ? "rgba(255, 255, 255, 0.7)" : 'transparent',
		}
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const Header = (props) => {
	const [anchor, setAnchor] = React.useState(null);
	const [serviceAnchorEl, setServiceAnchorEl] = React.useState(null);
	const open = Boolean(anchor);
	const serviceMenuOpen = Boolean(serviceAnchorEl);
	const handleMenu = (event) => {
		setAnchor(event.currentTarget);
	};
	
	const handleServicesMenu = (event) => {
		
		setServiceAnchorEl(event.currentTarget);
	};
	const handleServicesMenuClose = (event) => {
		setServiceAnchorEl(null);
	};
	
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
	
	const servicesLinks = [
		{to: '/services/invoices', name: 'Estimates & Invoices'},
		{to: '/services/purchasing', name: 'Vendor Ordering'},
		{to: '/services/inventory', name: 'Inventory'},
		{to: '/services/ordering', name: 'Order Management'},
	];
	
	return (
			<>
				<CssBaseline/>
				<ElevationScroll {...props}>
					<AppBar color="transparent" elevation={0} style={{transition: 'background 200ms ease 0s;'}}>
						<Container>
							<Toolbar variant="dense" style={{padding: 0}}>
								<NavbarLink to="/" sx={{mr: 1, display: 'inline-flex'}}>
									<img style={{maxWidth: '140px', margin: "auto"}}
									     src={require('../../assets/images/invoiss-logo.png').default}
									     alt="Invoiss logo"/>
								</NavbarLink>
								
								{!isMobile
										?
										(
												<>
													<Stack direction={"row"} spacing={2}>
														<NavbarLink to="/"> What is Invoiss</NavbarLink>
														<NavbarLink
																aria-controls="services-menu"
																aria-haspopup="true"
																aria-expanded={serviceMenuOpen ? 'true' : undefined}
																onMouseOver={handleServicesMenu}
														>
															Services
														</NavbarLink>
														<NavbarLink to="/info/pricing">Pricing</NavbarLink>
														<NavbarLink to="/info/help">Help</NavbarLink>
														<NavbarLink to="/info/contact">Contact us</NavbarLink>
													</Stack>
												</>
												
										) : null
								}
								
								<Box sx={{flexGrow: 1}}/>
								
								{isMobile
										?
										(<>
											<IconButton
													aria-controls="services-menu"
													aria-haspopup="true"
													aria-expanded={serviceMenuOpen ? 'true' : undefined}
													onClick={handleServicesMenu}
													>
												<MenuIcon/>
											</IconButton>
										</>)
										:
										(
												<>
													<NavbarButton color="#6468e5" sx={{mr: 1}}>Schedule a Demo</NavbarButton>
													<NavbarButton color="#2671E3" sx={{mr: 1}}>Sign In</NavbarButton>
													<NavbarButton color="#3fca89">Get Started</NavbarButton>
												</>
										)}
							</Toolbar>
						</Container>
					</AppBar>
				</ElevationScroll>
				<StyledMenu
						id="services-menu"
						anchorEl={serviceAnchorEl}
						open={serviceMenuOpen}
						onClose={handleServicesMenuClose}
						MenuListProps={{
							'aria-labelledby': 'services-menu-button',
						}}
				>
					{
						isMobile
								?
								(
									<>
										<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
											<NavbarLink to="/" sx={{py: 3, px: 2 }}>
												What is Invoiss
											</NavbarLink>
											<Box px={1} onClick={handleServicesMenuClose}>
												<CloseIcon color={"#282750"} />
											</Box>
										</Stack>
										<Divider/>
										<Typography display={"block"} textAlign={"left"} px={2} py={1}>
											Services
										</Typography>
									</>
								): null
					}
					{
						servicesLinks && servicesLinks.map((item, index) => {
							return (
									<NavbarLink to={item.to} key={index} onClick={handleServicesMenuClose}>
										<MenuItem>
											{item.name}
										</MenuItem>
									</NavbarLink>
							)
						})
					}
					{
					isMobile
						?
						(
								<>
									<Divider/>
									<NavbarLink to="/info/pricing">
										<MenuItem>
											Pricing
										</MenuItem>
									</NavbarLink>
									<Divider/>
									
									<NavbarLink to="/info/help">
										<MenuItem>
											Help
										</MenuItem>
									</NavbarLink>
									<Divider/>
									<NavbarLink to="/info/contact">
										<MenuItem>
											Contact us
										</MenuItem>
									</NavbarLink>
									<Divider sx={{mb: 2}}/>
									
									<NavbarButton fullwidth color="#6468e5" sx={{mr: 1}}>Schedule a Demo</NavbarButton>
									<NavbarButton fullwidth color="#2671E3" sx={{mr: 1}}>Sign In</NavbarButton>
									<NavbarButton fullwidth color="#3fca89">Get Started</NavbarButton>
								</>
						): null
					}
					
				</StyledMenu>
			</>
	);
}
export default Header;