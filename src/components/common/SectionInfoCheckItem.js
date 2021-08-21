import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Box, Stack, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

function CountCircle({index, iconColor}) {
	return (
			<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					sx={{
						borderRadius: '50%',
						height: '1.75rem',
						width: '1.75rem',
						mr: 1.5,
						mt: 0.35,
						color: '#fff',
						backgroundColor: iconColor ? iconColor : 'rgb(80 142 255 / 50%)'
					}}>
				{index}
			</Box>
	)
}

function SectionInfoCheckItem(props) {
	const {iconColor, iconStyles, direction, justifyContent, mb, index, ...otherProps} = props;
	

	let iconSx = {
		mr: 1.5,
		mt: 0.35,
		color: iconColor ? iconColor : 'rgb(80 142 255 / 50%)'
	}
	if(iconStyles){
		iconSx = {...iconSx, ...iconStyles}
	}
	return (
			<Stack direction={direction ? direction : 'row'} mb={mb ? mb : 1} justifyContent={justifyContent}>
				{
					typeof index === 'number' && index
							?
							<CountCircle index={index} iconColor={iconColor}/>
							:
							<CheckCircleIcon sx={iconSx}/>
				}
				<Typography fontWeight={"bold"} variant={'h6'} textAlign={"left"} {...otherProps}/>
			</Stack>
	);
}


SectionInfoCheckItem.propTypes = {
	iconColor: PropTypes.string,
	iconStyles: PropTypes.object,
	justifyContent: PropTypes.string,
	direction: PropTypes.string,
	sx: PropTypes.object
};
export default SectionInfoCheckItem;