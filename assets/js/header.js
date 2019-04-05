import React from 'react';

const Header = () => {
    return (
        <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://getdivvy.com/wp-content/themes/divvy-child/images/Divvy-Logo-Teal.png" alt="Logo" width="181" />
            <h2>Warehouse Item Locator</h2>
            <p className="lead">Please enter the X and Y coordinates for your item</p>
        </div>
    )
}

export default Header;