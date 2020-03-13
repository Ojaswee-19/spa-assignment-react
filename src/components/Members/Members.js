import React, { useState } from 'react';
import './Members.css';
import fakeData from '../../FakeData/index';
import Users from '../Users/Users';
import Cart from '../Cart/Cart';


const Members = () => {
    const first15 = fakeData.slice(0,15);
    const [users,setUsers] = useState(first15);
    const [cart,setCart] = useState([]);

    const handleAddToCart = (user) => {
        const newCart = [...cart,user];
        setCart(newCart);
    }
    return (
        <div className="members-container">
            <div className="users-container">
                {
                users.map(user => <Users
                handleAddToCart = {handleAddToCart}
                user = {user}>
                </Users>)
                }

            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Members;