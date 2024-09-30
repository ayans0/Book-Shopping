import { connect } from "react-redux";
import React, {useState} from "react";
import { resetList } from "../redux/Actions";

import { removeFromList } from '../redux/Actions';

function List(props) {
    const [counter,setCounter]=useState(1);
    const increment=()=> {
        setCounter((val)=> val+1);

    }
    const decrement=()=> {
        setCounter((val)=>val-1);

    }
    const removeItem =(bookName)=> {
        props.removeFromList(bookName);
     }

    console.log(props.list);
    return(
        <>
        <button className="list_button" data-toggle="modal" data-target="#list_modal" >
            <img src="/images/favourite-512.webp" alt="" />
        </button>
        <div className="modal fade" id="list_modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>List</h2>
                    <button data-dismiss="modal" className="close">&times;</button>
                </div>
                <div className="modal-body">
                <div className="list">
                 {props.list.map((obj,index)=> (
                        <div className="item" key={index}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                 </div>
                </div>
                <div className="modal-footer">
                 
                    <button data-dismiss="modal" className="btn close_button">CLOSE</button>
                    <button className="btn close_button" 
                    onClick={
                        ()=> {
                            props.resetList();
                        }
                    }
                    >RESET LIST</button>

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
        resetList: () => {
            dispatch(resetList())
        },
        removeFromList: (bookName) => { 
            dispatch(removeFromList(bookName))
        }
      };
    }

export default connect(mapStateToProps,mapDispatchToProps)(List);