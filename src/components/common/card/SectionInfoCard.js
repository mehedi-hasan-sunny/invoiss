import {Card, CardContent, CardHeader, Grid, useMediaQuery} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import PropTypes from 'prop-types';

const useStyles = (theme) => ({
	card: (props) => {
		const styles = {
			background: props.cardBgColor,
			borderRadius: '1.5rem',
			height: "100%",
			overflow: 'hidden',
		};
		return {
			...styles,
			...props.cardStyles
		}
	},
	cardContent: (props) => {
		const styles = {
			paddingBottom: props.imageSrc ? '0 !important' : '16px',
			height: '100%'
		};
		return {
			...styles,
			...props.cardContentStyles
		}
	},
	img: (props) => {
		const styles = {
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginBottom: '-7px',
			paddingTop: '48px'
		}
		
		return {...styles, ...props.imageStyles}
	}
});

const SectionInfoCard = (props) => {
	const isBreakpointMdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));
	const {classes} = props;
	const {
		imageSrc,
		imageAlt,
		imageOrder,
		imageStyles,
		cardBgColor,
		cardStyles,
		cardTitle,
		cardSubheader,
		cardContentStyles,
		...otherProps
	} = props;
	
	return (
			<Card className={classes.card} elevation={0}>
				{
					cardTitle || cardSubheader ? (
							<CardHeader sx={{p: 4, maxWidth: '70rem', width: "100%", margin: "auto"}} title={cardTitle}
							            subheader={cardSubheader}/>) : null
				}
				{
					props.imageSrc ? (
							<CardContent className={classes.cardContent}>
								<Grid container>
									<Grid item xs={12} md={6} padding={isBreakpointMdDown ? 2 : 2} {...otherProps} data-aos="fade-left"/>
									<Grid item xs={12} md={6} order={props.imageOrder}>
										<img src={props.imageSrc} alt={props.imageAlt} data-aos="fade-up" className={classes.img}/>
									</Grid>
								</Grid>
							</CardContent>
					) : (
							<CardContent className={classes.cardContent} {...otherProps}/>
					)
				}
			</Card>
	)
};

SectionInfoCard.propTypes = {
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	imageOrder: PropTypes.object,
	imageStyles: PropTypes.object,
	cardBgColor: PropTypes.string.isRequired,
	cardStyles: PropTypes.object,
	cardContentStyles: PropTypes.object,
	cardTitle: PropTypes.any,
	cardSubheader: PropTypes.any,
};

SectionInfoCard.defaultProps = {
	cardContentStyles: {},
};

export default withStyles(useStyles)(SectionInfoCard);