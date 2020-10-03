import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Close} from '../assets/icons/close.svg';
import { removeFromFavorite } from '../redux/actions/favorites';
import { addToCart } from '../redux/actions/cart';

function Favorite(props) {
    return (
        <Layout>
            <h2 className="text-center">Wishlist</h2>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        {/* Numele coloanelor ce vor fi afisate. */}
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Product</p>
                            <p className="w-25">Price</p>
                            <p className="w-25">Buy</p>
                            <p className="w-25">Remove</p>
                        </div>
                        {
                            // Afisam produsele din cart.
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <Link to={`/product/${product.id}`}>
                                            <img src={product.image} alt="Produs"/>
                                        </Link>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <p className="w-25">
                                        <button className="btn btn-dark mb-4 font-weight-bold"
                                            onClick={() => {
                                                props.addToCart({
                                                    product: {
                                                        id: product.id,
                                                        name: product.name,
                                                        price: product.price,
                                                        currency: product.currency,
                                                        image: product.image
                                                    }
                                                })
                                                props.removeFromFavorite({id: product.id})
                                            }}
                                        >
                                            Add to basket
                                        </button>
                                    </p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <div onClick={() => props.removeFromFavorite({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3 text-danger">Your wishlist is empty!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Back Home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favorite.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
