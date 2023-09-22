import React, { useState } from 'react';
import '../Chocolate Handle/InputChoc.css';

function InputChoc() {
    const [candyName, setCandyName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [itemlist, setItemlist] = useState([]);

    const handleAddClick = () => {
        const newData = {
            Candyname: candyName, 
            Description: description, 
            Price: price,
           
        };

        // Replace the URL with the correct API endpoint
        const id = Math.floor(Math.random())
        fetch(`https://crudcrud.com/api/ed056c13a4d14ed7a10f4b0ef12a741b/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Add the response data to your itemlist
                setItemlist([...itemlist, data]);
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });

        // Reset the form fields
        setCandyName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className='div'>
            <form className='form'>
                <div>
                    <label htmlFor="candyName">Candy Name:</label>
                    <input
                        type="text"
                        id="candyName"
                        value={candyName}
                        onChange={(e) => setCandyName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button className='button' type="button" onClick={handleAddClick}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default InputChoc;