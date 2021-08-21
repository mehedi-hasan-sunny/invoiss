import {styled} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const NavbarLink = styled((props) => <NavLink to="/" {...props} />)`
  color: #282750;
  font-size: 14px;
  transition: color 200ms ease 0s;
  text-decoration: none;
  text-transform: none;

  &:hover {
    color: #133bbd;
  }
`;
export default NavbarLink;