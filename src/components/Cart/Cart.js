import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    
    let unitPrice = 0;
    for (let i = 0;i<cart.length;i++){
        const user = cart[i];
        unitPrice = unitPrice + user.salary;
        
    }
    
    const totalSalary = unitPrice;
   
    return (
        <div>
          <h4>Order Summary</h4>  
          <p>Items ordered:{cart.length}</p>
          <p>Unit Price: {unitPrice}</p>
          <p>Total Salary: {totalSalary}</p>
          <button className="now">Get Appointment Now</button>

         
        </div>

        
    );
};

export default Cart;