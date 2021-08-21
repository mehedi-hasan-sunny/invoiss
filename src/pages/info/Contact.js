import React from 'react';
import Parallax from "../../components/Parallax";
import {Box, Container, Divider, Grid, Stack, TextField, Typography} from "@material-ui/core";
import SectionInfoCard from "../../components/common/card/SectionInfoCard";
import {withStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";


const styles = (theme) => ({
	cssLabel: {
		color: theme.palette.text.green + " !important"
	},
	notchedOutline: {
		borderColor: theme.palette.text.green + " !important",
		color: theme.palette.text.green + " !important",
	},
});

function Contact(props) {
	const {classes} = props;
	return (
			<>
				<Parallax scrollTarget={"#scroll-to"} imageSrc={require("../../assets/images/cover-5.jpg").default}
				          imageAlt="branding image"
				          height={"43em"} objectPosition={"center bottom"} opacity={0.6}
				>
					<Typography variant={"h2"} fontWeight={"medium"} color={"text.white"}>
						We’re Here to Help.
					</Typography>
				</Parallax>
				<Container id={"scroll-to"}>
					<Stack
							width={"100%"}
							direction="row" textAlign={"center"} justifyContent={"center"} alignItems={"center"}
							divider={<Divider orientation="vertical" flexItem/>}
							spacing={6} my={12}
					>
						<Box>
							<Typography>CALL US</Typography>
							<Typography variant={"h5"} fontWeight={"bold"}> 1 844 999 9203</Typography>
						</Box>
						<Box maxWidth={"25rem"}>
							<Typography>VISIT US</Typography>
							<Typography variant={"h5"} fontWeight={"bold"}>
								44 Montgomery Street, Suite 2-155,
								San Francisco, CA 94104
							</Typography>
						</Box>
						<Box>
							<Typography>EMAIL US</Typography>
							<Typography variant={"h5"} fontWeight={"bold"}> support@invoiss.com</Typography>
						</Box>
					</Stack>
				</Container>
				
				<Divider sx={{my: 10}}/>
				
				<Container sx={{mb: 3}}>
					<SectionInfoCard cardBgColor={"#313131"}>
						<Box my={6} mx={{xs: 2, md: 10}} textAlign={"center"}>
							<Typography variant={"h4"} color={"text.white"}> Let us hear from you directly!</Typography>
							<Typography variant={"h6"} color={"text.white"}> Let us know how we can best help you?</Typography>
							
							<Grid container spacing={3}>
								<Grid item xs={12} md={6}>
									<TextField fullWidth
									           InputLabelProps={{classes: {root: classes.cssLabel, focused: classes.cssLabel},}}
									           InputProps={{
										           classes: {
											           root: classes.notchedOutline,
											           focused: classes.notchedOutline,
											           notchedOutline: classes.notchedOutline,
										           }
									           }}
									           label="Full name" variant="standard"/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField fullWidth InputLabelProps={{classes: {root: classes.cssLabel, focused: classes.cssLabel},}}
									           InputProps={{
										           classes: {
											           root: classes.notchedOutline,
											           focused: classes.notchedOutline,
											           notchedOutline: classes.notchedOutline,
										           }
									           }} label="Email" variant="standard"/>
								
								</Grid>
								<Grid item xs={12}>
									<Typography color={"text.purple-dark"} textAlign={"left"} mb={1}>
										What can we help you with?
									</Typography>
									<TextField InputLabelProps={{classes: {root: classes.cssLabel, focused: classes.cssLabel},}}
									           InputProps={{
										           classes: {
											           root: classes.notchedOutline,
											           focused: classes.notchedOutline,
											           notchedOutline: classes.notchedOutline,
										           }
									           }} multiline fullWidth minRows={4} label="Type here" variant="standard"/>
								</Grid>
								<Grid item xs={12}>
									<Button variant={"contained"} color={"green"}>Send</Button>
								</Grid>
								
							</Grid>
						</Box>
					</SectionInfoCard>
				</Container>
				<Divider/>
			</>
	);
}

export default withStyles(styles)(Contact);