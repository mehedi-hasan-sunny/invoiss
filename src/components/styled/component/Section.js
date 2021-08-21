import React from 'react';
import PropTypes from 'prop-types';
import {styled} from "@material-ui/core/styles";
import Shape from "../../common/Shape";


const StyledSection = styled(
		({backgroundColor, isStartContainer, shapeBottom, shapeTop, shapeType, children, ...otherProps}) =>
				<section {...otherProps}>
					{
						shapeType ? (	<Shape type={shapeType}/>): null
					}
					
					{children}
				</section>)`
  background-color: ${props => props.backgroundColor};
  position: relative;
  padding-top: ${props => props.isStartContainer ? '48px' : 0};
  margin-bottom: ${props => props.shapeBottom || props.shapeTop ? '3rem' : 0};
  min-height: ${props => props.shapeType ? '414px' : 0};


  &:before, &:after {
    content: "";
    position: absolute;
    border-radius: 100%;
    background-color: ${props => props.backgroundColor};
    left: 0;
    right: 0;
    z-index: -1;
  }

  &:before {
    height: ${props => props.shapeTop ? '6.5rem' : 0};
    top: -3rem;
  }

  &:after {
    height: ${props => props.shapeBottom ? '6.5rem' : 0};
    bottom: -3rem;
  }
`;

const Section = (props) => {
	return (<StyledSection {...props}/>)
}

Section.propTypes = {
	isStartContainer: PropTypes.bool,
	shapeBottom: PropTypes.bool,
	shapeTop: PropTypes.bool,
	backgroundColor: PropTypes.string,
	shapeType: PropTypes.string,
	sx: PropTypes.object
};
export default Section;