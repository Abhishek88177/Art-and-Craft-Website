import React, { useState, useEffect } from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductsOfHomePage(props) {

    useEffect(()=>{
        getProductByType();
        getAllProducts();
    },[]);


    const [allProduct , setallProduct ] = useState([{}]);

    const [allProductSection , setallProductSection ] = useState([]);

    const getProductByType =async () =>{
        const allProductsByType =await axios.get(`http://localhost:8090/getprobytype/${props.type}`) 
        console.log(allProductsByType.data);
        setallProduct(allProductsByType.data);
    }

    const getAllProducts =async () =>{
        const allProductsByType =await axios.get(`http://localhost:8090/getAllProduct`) 
        console.log("product data",allProductsByType.data);
        setallProductSection(allProductsByType.data);
    }
 
    // State to track screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Media query breakpoint for switching the number of products
    const breakpoint = 768; // Adjust this value as needed

    // Update screenWidth when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []);

    // Determine the number of products to display based on screen width
    const numProductsToShow = screenWidth < breakpoint ? 2 : 5;

    return (<>   
    
        <h3 className="heading text-center">🌸{props.title}🌸</h3>

        <Carousel slide={true} indicators={false}>
            {allProduct.map((product, index) =>( 
                index % numProductsToShow === 0 && (
                    <Carousel.Item key={product.id} >
                        <div className='row justify-content-center' >
                            {allProduct.slice(index, index + numProductsToShow).map((product) => (
                                <Col key={product.id} lg={2} md={4} sm={5} xs={5}>
                                    <Link to={`/productdesc/${product.id}`} className="text-decoration-none text-dark">
                                   <ProductCard image={product.image1}
                                                name = {product.productName}
                                                description = {product.description}
                                                price ={product.price}
                                                discount ={product.discount}
                                                rating ={product.rating}
                                                />
                                    </Link>
                                </Col>
                            ))}
                        </div>
                    </Carousel.Item>
                )
            ))}
        </Carousel>

        {/* <div class="ms-auto"> */}
        <Link to={`/productbycategory/${props.type}`} className='text-decoration-none'>
        <button className='mx-auto btn btn-sm btn-outline-dark d-block my-4'>Show all</button>
       </Link>
        {/* </div> */}
    </>

    );
}

export default ProductsOfHomePage;
