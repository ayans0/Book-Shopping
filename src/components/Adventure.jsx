
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import React, { Component } from "react";
import { addAdventureToCart, addAdventureToList } from './redux/Actions';




class Adventure extends Component {
    constructor() {
        super();

    }

    IncreaseDiv(index) {
        const childBooks=document.getElementById(`childBooks-${index}`);
        if(childBooks) {
        childBooks.style.transform="scale(1.1)";
        childBooks.style.backgroundColor="white";
        childBooks.style.zIndex="3"
     }

    }
    DecreaseDiv(index) {
        const childBooks=document.getElementById(`childBooks-${index}`);
        if(childBooks) {
            childBooks.style.transform="scale(1)";
            childBooks.style.zIndex="1"
        }
        

    }
    render() {
        
        return(
            <>
            <h2 className='typeNames'>ADVENTURE</h2>
            
            <div className="d-flex">
                 
                <div className="nameOfCategories">
                    <h2>Genre Of Books</h2>
                    <hr />
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
               
                <div className="kindofBooks">
                    
                    {this.props.adventures.map((obj,index)=> (
                        <div
                        key={index}
                         onMouseLeave={() => this.DecreaseDiv(index)} 
                         onMouseEnter={() => this.IncreaseDiv(index)}
                          id={`childBooks-${index}`}>
                             <img
                            className="book_img" src={obj.img_url} alt="" />
                            <h2 className="book_name_h2">{obj.book_name}</h2>
                            <p>Price: {obj.price}$</p>
                            <div className="listAndCart">
                                <button onClick={()=> {
                                    this.props.addAdventureToList(index);
                                }} >ADD TO LIST</button>
                                <button onClick={()=>{
                                    this.props.addAdventureToCart(index);
                                    
                                    } } >ADD TO CART</button>
                               
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            </>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        adventures: state.adventures,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        addAdventureToCart: (index) =>  {
            dispatch(addAdventureToCart(index));
        },
        addAdventureToList: (index) =>  {
            dispatch(addAdventureToList(index));
        },

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Adventure);
