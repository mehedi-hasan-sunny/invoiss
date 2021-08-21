import {Box} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import PropTypes from "prop-types";

Shape.propTypes = {
	type: PropTypes.string
};
const styles = (theme) => ({
	shape: props => getPosition(props.type, theme)
});

function getPosition(type, theme) {
	switch (type) {
		case 'halfmoon':
			return {
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
			};
		case 'blob-right':
			return {
				position: 'absolute',
				right: '-35%',
				top: '48px',
				zIndex: '-1',
				color: "#f1f4f8",
				"& svg": {
					height: '60rem',
				},
				[theme.breakpoints.down("md")]:{
					right: '0',
					"& svg": {
						height: '100%',
						width: '100vw',
					},
				}
			};
		default:
			return {
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0
			};
	}
}

const HalfMoon = () => {
	return (<svg viewBox="0 0 1738 487" fill="none">
		<path d="M0 0H1420.92C1420.92 0 2134.35 457.505 1420.92 485.868C707.502 514.231 0 0 0 0Z"
		      fill="url(#paint0_linear)">
		</path>
		<defs>
			<linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68" gradientUnits="userSpaceOnUse">
				<stop stopColor="#ffffff" stopOpacity="0.075">
				</stop>
				<stop offset="1" stopColor="currentColor" stopOpacity="0">
				</stop>
			</linearGradient>
		</defs>
	</svg>)
}
const BlobRight = () => {
	return (<svg viewBox="0 0 723 569" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M703.969 241.602L703.963 241.599C716.081 262.97 723 287.677 723 314C723 382.917 675.575 440.757 611.58 456.665L246.7 556.937C226.465 564.729 204.481 569 181.5 569C81.2603 569 0 487.74 0 387.5C0 353.244 9.49023 321.204 25.985 293.867L25.9688 293.875L141.512 77.5476C162.753 33.3052 207.123 2.2726 258.951 0.119583L258.959 0H264.719H390.999H508.5H509.999L510.002 0.00999319C551.85 0.567328 588.083 24.388 606.358 59.1292L606.359 59.125L703.969 241.602Z" fill="currentColor"/>
</svg>)
}

function Shape(props) {
	const {classes, type, children, ...otherProps} = props;
	return (
			<Box className={classes.shape} {...otherProps}>
				
				{
					(() => {
						switch (type) {
							case 'halfmoon':
								return (<HalfMoon/>);
								case 'blob-right':
								return (<BlobRight/>);
							default:
								return (<HalfMoon/>);
						}
					})()
				}
			
			</Box>
	);
}

export default withStyles(styles)(Shape);