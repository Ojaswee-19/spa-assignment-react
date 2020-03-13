import React from 'react';
import './Users.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import image from '../../images/ttt.jpg'


const Users = (props) => {
    const {name,salary,email} = props.user;
    return (
        <div className="box">
            <div>
            <img src={image} alt=""/>
            </div>
        

        <div className="space">
        <h4 className="box-name"> {name}</h4>
                <br />
                <p><small>by: {name}</small></p>
                <p>email id: {email}</p>
                <p>${salary}</p>
                
                
                <button 
                className="main-button"
                onClick={() => props.handleAddToCart(props.user)}
                > 
                 
                    <FontAwesomeIcon icon={faPlus}/> add to cart
                </button>

        </div>
    </div>
    );
};

export default Users;