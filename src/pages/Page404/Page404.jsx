import React from "react";
import './Page404.css';
import ErrorBook from '../../assets/images/errorbook.png';

function Page404(){
    return(
        <div className="error text-center">
            <h1 className="text-danger">Upss Error404!!</h1>
            <br/>
            <h4 className="te">This is not the book you are looking for!</h4>
            <img src={ErrorBook} alt="error"/>
        </div>
    );
}

export default Page404;