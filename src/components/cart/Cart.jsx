import { connect } from "react-redux";
import React, {useState} from "react";
import { resetCart } from "../redux/Actions";
import { removeFromCart } from '../redux/Actions';


function Cart(props) {
    const [counter,setCounter]=useState(1);
    const increment=()=> {
        setCounter((val)=> val+1);

    }
    const decrement=()=> {
        setCounter((val)=>val-1);

    }
    
 const removeItem =(bookName)=> {
    props.removeFromCart(bookName);
 }
  
    return(
        <>
        <button className="basket_button" data-toggle="modal" data-target="#basket_modal" >
            <img src="/images/shopping_basket.png" alt="" />
        </button>
        <div className="modal fade" id="basket_modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>Cart</h2>
                    <button data-dismiss="modal" className="close">&times;</button>
                </div>
                <div className="modal-body">
                 <div className="cart">
                 {props.cart.map((obj)=> (
                        <div className="item">
                            <img onClick={()=> removeItem(obj.book_name)} className="trashIcon" src="/images/trash-icon-474x512-o7g8kfah.png" alt="" />
                            <div className="imgh2p">
                        <img className="book_img" src={obj.img_url}  alt="" />
                        <div className="h2p">
                            <h2 className="book_name_h2">{obj.book_name}</h2> 
                            <p>Price: {obj.price}$</p>
                            <div className="plusminus">
                        <button onClick={decrement}>-</button>
                        <h1>{counter}</h1>
                        <button onClick={increment}>+</button>
                       </div></div>
                       </div>
                      
                   </div>

                    )
                    )}
                 </div>
                </div>
                <div className="modal-footer">
                    {/* <h5>Total amount:</h5> */}
                    <button data-dismiss="modal" className="btn close_button">CLOSE</button>
                    <button data-dismiss="modal" className="btn close_button">CONFIRM CART</button>
                    <button onClick={
                        ()=> {
                            props.resetCart();
                        }
                    }
                      className="btn close_button">RESET CART</button>


                </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

const mapStateToProps =(state) => {
    return state;
   
}

const mapDispatchToProps =(dispatch) => {
    return {
        resetCart: () => {
            dispatch(resetCart())
        },
        removeFromCart: (bookName) => {
            dispatch(removeFromCart(bookName))
        }
      };
    }
   

export default connect(mapStateToProps,mapDispatchToProps)(Cart);