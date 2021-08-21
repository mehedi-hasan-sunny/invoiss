import Button from '@material-ui/core/Button';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {withStyles} from "@material-ui/styles";

const styles = (theme) => ({
	root: {
		padding: "10px 16px",
		fontSize: '14px',
		borderRadius: props => props.borderRadius ? props.borderRadius : "0.35rem"
	}
});
const GetStartedButton = (props) => {
	const {classes, borderRadius, ...otherProps} = props;
	return (
			<Button href={"/signup.php"} endIcon={<ArrowForwardIcon/>} className={classes.root}
			        variant={"contained"} color={"green"} size={"5rem"} {...otherProps}>
				Get Started
			</Button>
	)
};
export default withStyles(styles)(GetStartedButton);
