import React, { useState } from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-Context";
import Button from "react-bootstrap/Button"; // Import the Button component correctly

function HeaderButton() {
    const cartCtx = useContext(CartContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Button onClick={showModal}> 
                <span>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span>0</span>
            </Button>
        </>
    );
}

export default HeaderButton;
