import {withStyles} from '@material-ui/styles';
import {Menu} from "@material-ui/core";


const styles = (theme) => ({
	paper: {
		borderRadius: props => props.borderRadius ? props.borderRadius : '0.5rem !important',
		backgroundColor: props => props.bgColor ? props.bgColor : 'rgba(255,255,255,0.95)',
		minWidth: "18rem",
		textAlign: 'center',
		color: "#282750",
		"& ": {
			color: "#133bbd"
		}
	}
})

const StyledMenu = (props) => {
	const {classes, borderRadius, bgColor, ...otherProps} = props;
	console.log(classes)
	return (
			<Menu
					placement={"bottom"}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: "1rem",
						horizontal: 'center',
					}}
					disableScrollLock={true}
					classes={classes}
					{...otherProps} />
	)
};


export default withStyles(styles)(StyledMenu);