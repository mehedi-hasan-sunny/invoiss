import {styled} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const NavbarButton = styled(({color, ...otherProps}) => <Button {...otherProps} />)`
  color: #ffffff;
  background-color: ${props => props.color};
  border: 0;
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 13px;
  height: 26px;
  transition: filter 200ms ease 0s;
  font-weight: 500;
  text-transform: none;
  &:hover {
    filter: brightness(110%);
    background-color: ${props => props.color};
  }
`;
export default NavbarButton;