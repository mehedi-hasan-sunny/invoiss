import React from 'react';
import PropTypes from 'prop-types';
import {jarallax} from 'jarallax'
import {useEffect} from "react";
import {Box, IconButton, Stack} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const styles = (theme) => ({
	jarallax: {
		height: props => props.height ? props.height : '700px',
		padding: props => props.imageSrc ? '12rem 0' : '4rem : 0',
		position: 'relative',
		"& .jarallax-img": {
			height: props => props.height ? props.height + "!important" : 'auto',
			objectPosition: props => props.objectPosition ? props.objectPosition + "!important" : '50% 50%'
		}
	},
	jarallaxImageContainer: {
		opacity: props => props.opacity ? props.opacity : 0.4,
		backgroundColor: ' #161c2d',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	scrollDownButton: {
		backgroundColor: '#fff',
		borderRadius: '18px',
		position: 'absolute',
		bottom: '-1.2rem',
		left: '50%',
		zIndex: 10,
		transform: "translateX(-50%)",
		boxShadow: theme.shadows[5],
		padding: '0.75rem 0.85rem',
		'&:hover': {
			backgroundColor: "#f7f7f7"
		}
	}
})

const scrollIntoView = (scrollTarget) => (
		() => {
			if (scrollTarget) {
				let selector = document.querySelector(scrollTarget);
				if (selector) {
					selector.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					})
				}
			}
		}
)

const Parallax = props => {
	useEffect(() => {
		jarallax(document.querySelectorAll('.jarallax'), {
			speed: 0.2
		});
	}, []);
	
	
	const {
		classes, imageSrc, imageAlt, imageStyles, hideScrollDownButton, scrollTarget, opacity, height,
		objectPosition, ...otherProps
	} = props;
	return (
			<section data-jarallax="data-jarallax" data-speed="0.2" className={['jarallax', classes.jarallax].join(' ')}>
				{
					imageSrc ? (
							<div className={classes.jarallaxImageContainer}>
								<img className="jarallax-img" src={props.imageSrc} alt={props.imageAlt}/>
							</div>
					) : null
				}
				
				<Stack justifyContent={"center"} alignItems={"center"} position={"relative"} height={"100%"} width={"100%"} zIndex={1}>
					<Box {...otherProps}/>
				</Stack>
				{
					!hideScrollDownButton ? (
							<IconButton color={'primary'} className={classes.scrollDownButton} aria-label="upload picture"
							            onClick={scrollIntoView(scrollTarget)}
							>
								<ArrowDownwardIcon/>
							</IconButton>
					) : null
				}
			
			</section>
	);
};

Parallax.propTypes = {
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	imageStyles: PropTypes.object,
	hideScrollDownButton: PropTypes.bool,
	height: PropTypes.string,
	opacity: PropTypes.number,
	objectPosition: PropTypes.string,
	scrollTarget: function (props, propName, componentName) {
		if ((!props['hideScrollDownButton'] && (typeof (props[propName]) != 'string' || !props[propName]))) {
			let message = "Please provide a scrollTarget value!";
			if (typeof (props[propName]) != 'string') {
				message = "The prop `scrollTarget` is marked as required!"
			}
			return new Error(message);
		}
	},
};

export default withStyles(styles)(Parallax);
