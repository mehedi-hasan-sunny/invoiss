import {styled} from '@material-ui/core/styles';
import PropTypes from "prop-types";


const AppDownloadLink = styled(
		(props) => {
			const {imageSrc, imageAlt, imageMaxHeight, bgColor,  ...otherProps} = props;
			return (
					<a {...otherProps} target="_blank">
						<img src={imageSrc} alt={imageAlt}/>
					</a>
			)
		})
		`
      background-color: transparent;
      text-transform: none;
      border-radius: 7px;
      img {
        max-width: 100%;
        max-height: ${(props) => props.imageMaxHeight? props.imageMaxHeight: '3.5rem'};
        border-radius: 7px;
        height: auto;
        background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
      }
		`;

AppDownloadLink.propTypes = {
	bgColor: PropTypes.string,
	href: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageMaxHeight: PropTypes.string,
	
};
export default AppDownloadLink;