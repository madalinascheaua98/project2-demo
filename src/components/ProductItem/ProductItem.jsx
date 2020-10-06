import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { addToFavorite } from '../../redux/actions/favorites';
import { removeFromFavorite } from '../../redux/actions/favorites';
import { ReactComponent as Star } from '../../assets/icons/star-full.svg';
import { ReactComponent as StarEmpty } from '../../assets/icons/star-empty.svg';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const {name, price, currency, image, id, favoriteProducts} = props;
    const found = favoriteProducts.find((favoriteProducts) => favoriteProducts.id === id);

    return(
        <div className="product-item col-12 col-md-4 d-flex flex-column align-items-center mb-3">
            <Link to={`/product/${id}`}>
                <div className="text-center">
                    <img src={image} alt="productPhoto" className="mb-2"/>
                </div>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price +" "+ currency }</p>
            </Link>

            <div className="d-flex flex-row">
                <button
                    className="btn btn-outline-dark"
                    onClick={() => props.addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                >
                    Add to basket
                </button> 

                {!found ?
                    <StarEmpty onClick={() => props.addToFavorite({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}/>
                   :  <Star onClick={() => props.removeFromFavorite({id: id})}/>
               }
            </div>

        </div>
    );
}




function mapStateToProps(state) {
    return {
        favoriteProducts: state.favorite.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorite: (payload) => dispatch(addToFavorite(payload)),
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);