import React, { useState } from 'react';
import '../Chocolate Handle/InputChoc.css';
import DisplayChoc from './DisplayChoc';

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
        fetch(`https://crudcrud.com/api/ec1b021792554a4397ac5a098873e806/${id}`, {
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
                <button type="button" class="btn btn-success" onClick={handleAddClick}>
                    Add
                </button>
            </form><br/><br/>
            <DisplayChoc items={itemlist}  />
        </div>
        
    );
}

export default InputChoc;
