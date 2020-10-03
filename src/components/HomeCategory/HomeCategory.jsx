import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {
    const {route, name, description, image} = props;

    return(
        <div className="col-12 col-md-4 mb-3">
            <Link to={`/category/${route}`}>
                <div className="w-100">
                    <img src={image} alt={name} className="w-100"/>
                </div>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap" rel="stylesheet" />
                <h2 className="genre h4 my-1 text-center"><strong>{name}</strong></h2>
                <link href="https://fonts.googleapis.com/css2?family=Pompiere&display=swap" rel="stylesheet"></link>
                <p className="categ m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;