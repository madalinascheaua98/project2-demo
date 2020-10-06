import React from 'react'
import Layout from '../../components/Layout';
import './Blind.css';
import BlindDate from '../../assets/images/blindbook.jpg';

export default function Blind() {
    return (
            <Layout>
                <div>
                <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"/>
                <h1 className="blind-title text-center">Blind Date With a Book</h1><br/>
                <div class="container blockquote">
                <div className="text-center">
                <div class="row">
                    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet"/>
                    <div class="col">
                    <p className="blind-text"> Blind Date with a Book is a mystery book, wrapped in brown paper, tagged with clues with a few keywords or a review on the outside to indicate what kind of surprise the reader might be in for.</p></div>
                    <div class="col"> <img src={BlindDate} alt="books" className="img-blind"/></div>
                </div><br/>
                <p className="blind-text2"> You may unknowingly pass up a title you'd love when a review doesn't spark your interest.  </p>
                <p className="blind-text2"> It can be a fun way to discover something new or read outside your comfort zone. </p></div>
                </div>
            </div>
        </Layout>
    );
}
