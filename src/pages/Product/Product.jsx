import React from 'react';
import Layout from '../../components/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { addToFavorite } from '../../redux/actions/favorites';
import { removeFromFavorite } from '../../redux/actions/favorites';
import { ReactComponent as Star } from '../../assets/icons/star-full.svg';
import { ReactComponent as StarEmpty } from '../../assets/icons/star-empty.svg';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product } = this.state;
        const { favoriteProducts} = this.props;
        const found = favoriteProducts.find((favoriteProducts) => favoriteProducts.id === product.id);

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            
                            <div className="d-flex flex-row">
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Add to basket
                            </button>
                            {!found ?
                                <StarEmpty onClick={() => this.props.addToFavorite({
                                    product: {
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        currency: product.currency,
                                        image: product.image
                                    }
                                })}/>
                                :  <Star onClick={() => this.props.removeFromFavorite({id: product.id})}/>
                            }
                            </div>

                            <p><span className="font-weight-bold">Author</span>: {product.author}</p>
                            <p><span className="font-weight-bold">Format</span>: {product.format}</p>
                            <p><span className="font-weight-bold">Language</span>: {product.language}</p>
                            <p className="font-weight-bold mb-1">Description:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);