import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, Option } from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <Option to='/shop'>
                SHOP
            </Option>
            <Option to='/contact'>
                CONTACT
            </Option>
            {
                currentUser ? 
                <Option as='div' onClick={() => auth.signOut()}>
                    Sign Out
                </Option> 
                : 
                <Option to='/signin'>
                    Sign in
                </Option>
            }

            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);