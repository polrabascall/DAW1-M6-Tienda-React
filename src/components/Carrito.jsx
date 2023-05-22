import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Carrito() {
    function Cart() {
        const [cartItems, setCartItems] = useState([]);

        useEffect(() => {
            fetchCartItems();
        }, []);

        // Fetches the cart items from the server
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/api/cart');
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        // Removes a cart item from the server
        const removeCartItem = async (itemId) => {
            try {
                await axios.delete(`/api/cart/${itemId}`);
                fetchCartItems();
            } catch (error) {
                console.error('Error removing cart item:', error);
            }
        };

        return (
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>Price: {item.price}</p>
                            <button onClick={() => removeCartItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
