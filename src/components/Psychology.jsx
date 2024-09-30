import { Component } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { addPsychologyToCart, addPsychologyToList } from "./redux/Actions";

class Psychology extends Component {
    constructor() {
        super();
        this.state={
           
        };

    }
    IncreaseDiv(index) {
        const childBooks=document.getElementById(`childBooks-${index}`);
        if(childBooks) {
        childBooks.style.transform="scale(1.1)";
        childBooks.style.backgroundColor="white";
        childBooks.style.zIndex="3";
     }

    }
    DecreaseDiv(index) {
        const childBooks=document.getElementById(`childBooks-${index}`);
        if(childBooks)
    {childBooks.style.transform="scale(1)";
    childBooks.style.zIndex="1"}

    }
    render() {
        return(
            <>
            <h2 className="typeNames">PSYCHOLOGY</h2>
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

                <div className="kindofBooks">
                    {this.props.psychology.map((obj,index)=>(
                         <div
                         onMouseLeave={() => this.DecreaseDiv(index)} 
                         onMouseEnter={() => this.IncreaseDiv(index)}
                          id={`childBooks-${index}`}>
                         <img
                        className="book_img" src={obj.img_url} alt="" />
                        <h2 className="book_name_h2">{obj.book_name}</h2>
                        <p>Price: {obj.price}$</p>
                        <div className="listAndCart">
                            <button  onClick={()=> {
                                    this.props.addPsychologyToList(index);
                                }}>ADD TO LIST</button>
                            <button onClick={()=>{this.props.addPsychologyToCart(index)} }>ADD TO CART</button>
                        </div>
                    </div>
                    ))}

                </div>


            </div>
            </>
           
        )
    }
}

const mapStateToProps=(state) => {
    return{
      psychology: state.psychology,
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        addPsychologyToCart: (index) => {
            dispatch(addPsychologyToCart(index));
        },
        addPsychologyToList: (index) =>  {
            dispatch(addPsychologyToList(index));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Psychology);  