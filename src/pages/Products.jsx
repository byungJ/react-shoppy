import React from 'react';
import Product from '../components/Product.jsx';

export default function Products() {
    const array = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div>
            {
                array.map(() => {
                   return <Product/>
                })
            }
        </div>
    );
}

