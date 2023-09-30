import React, { useState } from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-Context";
import Button from "react-bootstrap/Button"; // Import the Button component correctly
import classes from'../Layout/HeaderButton.module.css'

import Modal from "react-bootstrap/Modal";

function HeaderButton() {
    const cartctx=useContext(CartContext)
    
      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      return (
        <>
          <Button onClick={showModal} className={classes.button}>
          <span className={classes.icon}>
              <CartIcon/>
            </span>
            <span >Your Cart</span>
            <span  className={classes.badge}>0</span>
          </Button>
          <Modal title="Order Details..." footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <>
            <div className={classes.modelitem}>
              <div>
              <h2>Item name:-</h2>
              <p>Price:-</p>
              </div>
              <div className={classes.btn1}>
                <button  className={classes.plus}>+</button>
                <button  className={classes.minus}>-</button>
              </div>
              </div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",justifyItems:"center",alignItems:"center"}}>
                <h1>Total Amount:-</h1>
                <span style={{marginRight:"4rem",fontSize:"20px"}}>&#8377; {cartctx.totalAmount}</span>
               </div>
    
              <div className={classes.contain}>
                <button className={classes.action}onClick={handleCancel}>Cancel</button>
                <button className={classes.action1} >Order</button>
              </div>
           
            </>
          </Modal>
        </>
      )
       
    
    }
    export default HeaderButton