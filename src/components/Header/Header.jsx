import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as Star } from '../../assets/icons/star-full.svg';
import './Header.css';
import { connect } from 'react-redux';
// Import metoda signOut din folderul apis/firebase.
import { logoutUser } from '../../redux/actions/user';

function Header(props) {
    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Mad Shop" className="logo"/>
                </Link>
                <div>
                    {/* userul este preluat din store => referit ca props.user. */}
                    { props.user
                        ? <p>Hello, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            // La click pe "Delogare", se apeleaza metoda signOut, venita prin mapDispatcToProps.
                            ? <p className="logout h5" onClick={() => props.signOut()}>Log out</p>
                            : <Link to="/login" className="h5 mb-0">Login</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/favorite" className="d-flex">
                                <Star className="ml-2" />
                            </Link>
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

// campulul user: aici se gasesc datele necesare despre user
function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}
// actiunea logoutUser, importata din redux/actions, care va face logarea efectiva a userului
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);