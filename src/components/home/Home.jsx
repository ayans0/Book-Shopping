import React, { Component } from "react";
import { Fragment } from "react";
import { addBooksToCart, addBooksToList } from "../redux/Actions";
import { connect } from "react-redux";



class Home extends Component {
    constructor() {
        super();
        this.state={
           
      }  };
    
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
           childBooks.style.zIndex="1";
       
        }
        


    }

    render() {
        return (
            <Fragment>
                <img className="bestOfBooks" src="/images/KBHP-ASIN-1500x300.jpg" alt="" />
                <h1 className="bestseller_books">BESTSELLER BOOKS</h1>
                <div  className="bestsellerBooks">
                {this.props.books.map((obj,index)=>(
                    <div   onMouseLeave={() => this.DecreaseDiv(index)} 
                    onMouseEnter={() => this.IncreaseDiv(index)}
                     id={`childBooks-${index}`}>
                          <img
                            className="book_img" src={obj.img_url} alt="" />
                            <h2 className="book_name_h2">{obj.book_name}</h2>
                            <p>Price: {obj.price}$</p>
                            <div className="listAndCart">
                                <button onClick={()=> {
                                    this.props.addBooksToList(index);
                                }}

                                >ADD TO LIST</button>
                                <button onClick={()=>{
                                    this.props.addBooksToCart(index);
                                    } } >ADD TO CART</button>
                               
                            </div>
                    </div>
                ))}


                </div>

    
            </Fragment>
        );
    }
}

const mapStateToProps=(state)=> {
    return {
        books:state.books
    }
}

const mapDispatchToProps=(dispatch)=> {
    return {
        addBooksToCart: (index)=> {
            dispatch(addBooksToCart(index));
        },
        addBooksToList: (index) => {
            dispatch(addBooksToList(index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);