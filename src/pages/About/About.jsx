import React from "react";
import Layout from '../../components/Layout';
import './About.css';
import { Link } from "react-router-dom";
import Books from '../../assets/images/bookabout.png';

function About(){
    return(
        <Layout>
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"/>
                <h1 className="about text-center">Mad's Shelf</h1>
                <div class="text-center">
                    <link href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@600&display=swap" rel="stylesheet"/>
                    <h2 className="desc">Welcome to the Mad's Shelf!</h2> 
                    <img src={Books} alt="books" className="img-book"/>
                    <h4 className="desc"> An online bookstore that will inspire and help you in the search for a new 
                        mind journey. </h4>
                    <h4 className="desc">You might be a few clicks away from your new favorite book!</h4>
                    <h4 className="desc">Check out the genres available:</h4>
                    <div className="btns btn-group">
                        <Link to='./category/fantasy'>
                        <button type="button" class="btn btn-outline-primary">Fantasy</button></Link>
                        <Link to='./category/adventure'>
                        <button type="button" class="btn btn-outline-success">Adventure</button></Link>
                        <Link to='./category/classical'>
                        <button type="button" class="btn btn-outline-warning">Classical Fiction</button></Link>
                        <Link to='./category/romance'>
                        <button type="button" class="btn btn-outline-danger">Romance</button></Link>
                        <Link to='./category/mystery'>
                        <button type="button" class="btn btn-outline-dark">Mystery</button></Link>
                        <Link to='./category/historical'>
                        <button type="button" class="btn btn-outline-secondary">Historical Fiction</button></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;