import PropTypes from 'prop-types';
import {styled} from '@material-ui/core/styles';
import {Box} from "@material-ui/core";


const PillShape = styled(({backgroundColor, color, borderRadius, ...otherProps}) =>
		<Box {...otherProps} />)(({theme, ...otherProps}) => (
		{
			backgroundColor: theme.palette.text[otherProps.backgroundColor] ? theme.palette.text[otherProps.backgroundColor] : otherProps.backgroundColor,
			color: otherProps.color && otherProps.color.includes("text.") ? theme.palette.text[otherProps.color.replace("text.", "")] : otherProps.color,
			borderRadius: otherProps.borderRadius,
			padding: otherProps.padding,
			fontSize: otherProps.fontSize,
			whiteSpace: 'nowrap'
		}
));

const Pill = (props) => {
	return (<PillShape {...props}/>)
}

Pill.propTypes = {
	backgroundColor: PropTypes.string.isRequired,
	color: PropTypes.string,
	borderRadius: PropTypes.string,
	padding: PropTypes.string,
	fontSize: PropTypes.string,
	sx: PropTypes.object
};


Pill.defaultProps = {
	display: 'inline-block',
	backgroundColor: "#fff",
	color: "#000",
	padding: "10px 20px",
	fontSize: "0.9rem",
	borderRadius: "2rem",
};


export default Pill;