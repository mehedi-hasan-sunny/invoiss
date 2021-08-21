import React from 'react';
import PropTypes from 'prop-types';
import AppDownloadLink from "../styled/buttons/AppDownloadLink";
import {Stack} from "@material-ui/core";

AppDownloadButtons.propTypes = {
	bgColor: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	direction: PropTypes.string,
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
	width: PropTypes.string,
	alignItems: PropTypes.string,
	justifyContent: PropTypes.string,
	imageMaxHeight: PropTypes.string,
};
AppDownloadButtons.defaultProps = {
	direction: "row",
	marginTop: 3,
	marginBottom: 3,
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
	bgColor: "transparent",
}
const appDownloadButtons = [
	{
		imageSrc: require('../../assets/images/app-download/appstore-w.png').default,
		href: 'https://apps.apple.com/us/app/invoiss/id1543780029',
		imageAlt: 'Download from AppStore'
	}, {
		imageSrc: require('../../assets/images/app-download/googleplay-w.png').default,
		href: 'https://play.google.com/store/apps/details?id=org.name.invoissmobileapp',
		imageAlt: 'Download from GooglePlay'
	}, {
		imageSrc: require('../../assets/images/app-download/cloverappmarket-w.png').default,
		href: 'https://www.clover.com/appmarket/apps/9TDMF3T5AN9T2',
		imageAlt: 'Download from CloverAppMarket'
	}
];

function AppDownloadButtons(props) {
	return (
			<Stack direction={{xs: 'column', md: props.direction}} marginTop={props.marginTop} marginBottom={props.marginBottom} spacing={3}
			       width={props.width} alignItems={props.alignItems} justifyContent={props.justifyContent}>
				{appDownloadButtons.map((item, index) => (
						<AppDownloadLink {...item} imageMaxHeight={props.imageMaxHeight} bgColor={typeof props.bgColor === 'string' ? props.bgColor : props.bgColor[index]} key={index} />
				))}
			</Stack>
	);
}

export default AppDownloadButtons;