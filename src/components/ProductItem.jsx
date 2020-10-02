import React from 'react';
import './ProductItem.css';
// Pentru a conecta componenta la store importam HOC-ul connect
import { connect } from 'react-redux';
// Trebuie sa importam actiunile pe care le vom utiliza(dispatch-ui).
import { addToCart } from '../redux/actions/cart';
import { addToFavorite } from '../redux/actions/favorites';
import { removeFromFavorite } from '../redux/actions/favorites';
import { ReactComponent as Star } from '../assets/icons/star-full.svg';
import { ReactComponent as StarEmpty } from '../assets/icons/star-empty.svg';
// Importam Link-ul din router.
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
            {/* buton de adaugare in cart */}
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


// Functia mapDispatchToProps trimite actiuni catre store. Cum? Cand este apelata de connect, primeste automat
// functia dispatch. Cand dispatch este APELATA primeste ca parametru un apel de actiune(din folderul actions,
// creat de noi). Practic, in acest mod, rezultatul executiei actiunii va fi pasat catre store, iar store-ul
// va stii astfel sa APELEZE reduce-erul corespunzator.
// TOTUSI, noi trebuie actiunii sa ii pasam un payload, iar acesta se va pasa din interiorul componentei(fie
// el un id sau un produs intreg). Astfel trebuie sa ne definim o metoda, care va fi disponibila IN PROPS-urile
// componentei (mapDispatchToProps va returna un obiect, ale caror chei vor fi props-uri noi pentru componenta
// (ProductItem)). DECI ne definim o metoda numita addToCart, care va primi un payload si va APELA metoda dispatch,
// careia ii trimitem ca parametru actiunea IMPORTATA din folderul actions, care la randul ei trebuie sa primeasca
// mai departe payload-ul.
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorite: (payload) => dispatch(addToFavorite(payload)),
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    };
}

// Cart-ul trebuie sa fie conectat la store, deci vom folosi HOC-ul connect, care primeste automat
// ca parametri mapStateToProps si mapDispatchToProps, pe care NOI trebuie sa le implementam.
// In cazul de fata, nu avem nevoie sa luam ceva din store, deci nu avem nevoie de metoda mapStateToProps,
// asadar putem sa pasam null in loc de vreo implementare.
// ATENTIE! Trebuie ca cele doua metode sa fie pasate lui connect IN ORDINEA CORESPUNZATOARE(1. state; 2. dispatch),
// dar pot fi denumire diferit, cu conditia ca si numele metodei de mai sus(cand ii e scrisa implementarea) sa fie acelasi.
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);