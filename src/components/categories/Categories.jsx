import { Component } from "react";

import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor() {
        super();
        this.state={};
    }
    render() {
        return(
            <div className="d-flex">
                <div className="nameOfCategories">
                    <h2>Genre Of Books</h2>
                    <hr />
                    <Link to="/Adventure">Adventure</Link>
                    <Link  to="/Classics" >Classics</Link>
                    <Link  to="/Detective" >Detective</Link>
                    <Link  to="/Philosophy" >Philosophy</Link>
                    <Link  to="/Poems" >Poems</Link>
                    <Link  to="/Psychology" >Psychology</Link>
                    <Link  to="/Romance" >Romance</Link>
                    <Link  to="/ScienceFiction" >Science Fiction</Link>
                    <Link  to="/Thriller" >Thriller, Mystery</Link>
                </div>

                <div className="quotations">
                    <img className="Anton" src="/images/1_0U65A4ZCmznIov0_MmiVaQ.png" alt="" />
                    <img className="Stephen" src="/images/1_4_4XqraFeZf8k-QGK4kC9g.png" alt="" />
                    <img className="Thomas" src="/images/just-because-something-doesnt-do-what-you-planned-it-to-do-doesnt-mean-its-useless.webp" alt="" />

                </div>
            </div>
        )
    }
}

export default Categories;