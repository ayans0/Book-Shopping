import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
    function showCategories() {
        const typeOfBooks = document.querySelector('.typeOfBooks');
        typeOfBooks.style.opacity = 1;
    }

    function hideCategories() {
        const typeOfBooks = document.querySelector(".typeOfBooks");
        typeOfBooks.style.opacity = 0;
    }

    return (
        <React.Fragment>
            <div className="header_container">
                <h2>BooksLand</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login" >Login</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                    <li onMouseLeave={hideCategories} onMouseEnter={showCategories} className="categories">
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </div>
            <div onMouseLeave={hideCategories} onMouseEnter={showCategories} className="typeOfBooks">
              <Link to="/adventure">Adventure</Link>
                    <Link  to="/Classics" >Classics</Link>
                    <Link  to="/Detective" >Detective</Link>
                    <Link  to="/Philosophy" >Philosophy</Link>
                    <Link  to="/Poems" >Poems</Link>
                    <Link  to="/Psychology" >Psychology</Link>
                    <Link  to="/Romance" >Romance</Link>
                    <Link  to="/ScienceFiction" >Science Fiction</Link>
                    <Link  to="/Thriller" >Thriller, Mystery</Link>
            </div>
        </React.Fragment>
    );
}

export default Head;
