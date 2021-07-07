import React from 'react';

import './style.css';
import mockData from '../../utils/db.json';

const ImageComponent = ({productId, products}) =>  {
    console.log(mockData)
        const selectedProductInformation = products.filter(product => product.id === productId);
        return(
            selectedProductInformation.length > 0 ? 
            (<div className="product-container">
                <img alt={`pic of ${selectedProductInformation[0].title}`}  className="prodcut-image" src={selectedProductInformation[0].image} />
                <p className="prodcut-title product-info-bold">{selectedProductInformation[0].title}</p>
                <p className="prodcut-description product-info-light">{selectedProductInformation[0].description}</p>
                <p className="prodcut-price product-info-bold">{`£ ${selectedProductInformation[0].price}`}</p>
            </div>) : null
            
        )
}

export default ImageComponent;