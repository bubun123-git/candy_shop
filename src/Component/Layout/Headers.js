import React from 'react'

import classes from '../Layout/Header.module.css'

function Headers() {
    return (
        <div className={classes.headers}>
            <div>
                <h1 style={{ textAlign: 'left', width: '100%' }}>Candy Shop</h1>
            </div>

        </div>
    )
}

export default Headers