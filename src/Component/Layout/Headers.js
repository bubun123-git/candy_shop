import React from 'react'

import classes from '../Layout/Header.module.css'
import HeaderButton from './HeaderButton'

function Headers() {
    return (
        <div className={classes.headers}>
            <div>
                <p className={classes.headerText}>Candy Shop</p>
            </div>
            <div>
                <HeaderButton/>
            </div>

        </div>
    )
}

export default Headers