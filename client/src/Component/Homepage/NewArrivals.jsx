import React, { useState, useEffect } from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';

function NewArrivals() {
    const products = [
        {
            id: 1,
            name: 'Upto 22% Off',
            description: 'Description for Product 1',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdOBt0-zSGhdgJVJhVr4I2Tikq8UfhTpYGCsDDuRumA&s',
            price: 229.9
        },
        {
            id: 2,
            name: 'Upto 30% Off',
            description: 'Description for Product 2',
            imageSrc: 'https://img.freepik.com/free-vector/realistic-beauty-sale-banner-template_52683-94993.jpg'
        },
        {
            id: 3,
            name: 'Upto 45% Off',
            description: 'Description for Product 3',
            imageSrc: 'https://img.freepik.com/free-vector/realistic-beauty-sale-banner-with-offer_52683-94987.jpg',
        },
    ];
    
    return (
        <>
            <div className="mt-3 py-3 ">
                <h3 className="heading text-center">Top Offers</h3>
                <div className='container col-md-12'>

                    <div className="row justify-content-center">
                        {products.map((product, index) => (
                            <div className='col-md-4 col-12 mb-3' key={product.id}>
                                <div class="card1 rounded border " >
                                    <img src={product.imageSrc} class="card-img-top rounded" alt="..." style={{ width: '100%' }} />
                                    <div class="w-100 px-4 pt-2">
                                        <h4 class="custom-font" style={{ color: 'rgb(232, 0, 113)' }}>{product.name}</h4>
                                        <h5 style={{ fontFamily: 'Inter', color: '#5C6873' }}>{product.description}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                           </div>
     </div>
            {/* <div class="ms-auto"> */} 
            {/* </div> */}
        </>
    );
}
export default NewArrivals;

// 1441 Mere
// 2803 sashank
// 2484 swarnim

