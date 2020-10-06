import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './Login.css';
import { connect } from 'react-redux';
// Import actiunea loginUser, care se va ocupa le loginul userului(request asincron)
import { loginUserGoogle, loginUserFacebook } from '../../redux/actions/user';


class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Choose your provider:</p>

                <div className="btn-group-vertical">
                    <button
                        className="btn btn-outline-dark d-flex align-items-center"
                        onClick={() => this.props.signInWithGoogle()}
                    >
                        <Google className="w-50 mr-3"/>
                        <span className="text-nowrap"> Login with Google </span>
                    </button>
            
                    <button
                        className="btn btn-outline-dark d-flex align-items-center"
                        onClick={() => this.props.signInWithFacebook()}
                    >
                        <Facebook className="w-50 mr-3"/>
                        <span className="text-nowrap">Login with Facebook</span>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signInWithGoogle: () => dispatch(loginUserGoogle()),
        signInWithFacebook:  () => dispatch(loginUserFacebook())
    }
}

// conect Loginul la store
export default connect(mapStateToProps, mapDispatchToProps)(Login);