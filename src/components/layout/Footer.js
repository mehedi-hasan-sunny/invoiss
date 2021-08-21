import {Box, Container, Divider, Stack, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import NavbarLink from "../styled/buttons/NavbarLink";

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {createElement} from "react";

const useStyles = (theme) => ({
	footer: {
		paddingTop: '5rem',
		paddingBottom: '1rem',
		backgroundColor: '#000000'
	},
	footerImg: {
		width: '20px',
		marginRight: '5px'
	},
	footerLink: {
		color: "#676780 !important",
		"&:not(:last-child)": {
			marginRight: '1.5rem'
		},
		"&:hover": {
			textDecoration: 'underline'
			
		},
		"&.social-link": {
			color: "#fff",
		}
	},
	divider: {
		borderColor: 'rgba(255, 255, 255, 0.12)'
	},
	footerLogo: {
		background: '#404486',
		borderRadius: '0.5rem',
		padding: '0.75rem',
		maxHeight: '4.5rem'
	}
})


function Footer(props) {
	const {classes} = props;
	const upperLinks = [
		{to: '/services/invoices', name: 'Estimates & Invoices'},
		{to: '/services/purchasing', name: 'Vendor Ordering'},
		{to: '/services/inventory', name: 'Inventory'},
		{to: '/services/ordering', name: 'Order Management'},
	];
	const lowerLinks = [
		{to: '/info/help', name: 'FAQs'},
		{to: '/info/contact', name: 'Contact Us'},
		{to: '/info/pricing', name: 'Plans'},
		{to: '/', name: 'Privacy Policy'},
		{to: '/', name: 'Terms of Use'},
	];
	const socialLinks = [
		{href: '/', icon: InstagramIcon},
		{href: '/', icon: FacebookIcon},
		{href: '/', icon: LinkedInIcon},
		{href: '/', icon: TwitterIcon},
	]
	return (
			<footer className={classes.footer}>
				<Container>
					
					<img src={require('../../assets/images/favicon-w.png').default} className={classes.footerLogo}
					     alt="invoiss logo w"/>
					<Divider className={classes.divider}/>
					<Stack direction={{xs: 'column', md: 'row'}} py={2} spacing={2}>
						{
							upperLinks.map((link, index) => (
											<NavbarLink key={index} to={link.to} className={classes.footerLink}>{link.name}</NavbarLink>
									)
							)
						}
					</Stack>
					<Divider className={classes.divider}/>
					<Stack direction={{xs: 'column', md: 'row'}} py={2} spacing={2} justifyContent={"space-between"}>
						<Stack direction={{xs: 'column', md: 'row'}} spacing={2}>
							{
								lowerLinks.map((link, index) => (
												<NavbarLink key={index} to={link.to} className={classes.footerLink}>{link.name}</NavbarLink>
										)
								)
							}
						</Stack>
						<Box textAlign={{xs: 'center', md: 'right'}}>
							{
								socialLinks.map((link, index) => (
												<a key={index} href={link.href} className={['social-link', classes.footerLink].join(' ')}>{createElement(link.icon)}</a>
										)
								)
							}
						</Box>
					</Stack>
					
					<Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={3}>
						<img className={classes.footerImg} src={require('../../assets/images/favicon-w.png').default}
						     alt="invoiss logo white"/>
						<Typography variant={'small'} color={"text.white"}> © Invoiss {new Date().getFullYear()}</Typography>
					</Stack>
				</Container>
			</footer>
	);
}

export default withStyles(useStyles)(Footer);