import "../assets/css/allproduct.css"
import ProductCard from "./ProductCard";
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import NoteContext from "../context/NoteContext";

function AllProducts() {

    const a = useContext(NoteContext);

    const { type: initialType } = useParams();

    const [currentType, setCurrentType] = useState(initialType);
    const [searchValue , setSearchValue] = useState("");
    const [renderData, setRenderData] = useState([]);

    const [cartList , setCartList] = useState([{}]);

    useEffect(
        () => {
            if (currentType === "all") {
                getAllProducts();
            } else {
                getAllProductsByType();
            }
        }, []
    );

    useEffect(
        () =>{
            a.update();
        },[])


    const getAllProducts = async () => {
        const allProducts = await axios.get(`http://localhost:8090/getAllProduct`)
        console.log(allProducts);
        setCurrentType("All Products")
            setRenderData(allProducts.data);
    }

    const getAllProductsByType = async () => {
        const allProducts = await axios.get(`http://localhost:8090/getprobytype/${currentType}`)
        console.log("allProducts"+allProducts.data);
        setRenderData(allProducts.data);
    } 

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchValue(inputValue)
        const searchData = renderData.filter(item => item.productName.toLowerCase().includes(inputValue.toLowerCase()))
        if(inputValue===""){
            getAllProductsByType();
        }else{
            setRenderData(searchData)
        }
        console.log(inputValue)
      };

    const addToCart=(productid)=>{
        axios.post(`http://localhost:8090/addtocart/${productid}`,).then((response) =>{
            console.log(response.data)
        })
    }


    return (
        <>
            <div className="container">
                <div className="col-md-12 my-4">
                    <h1>Hello {a.state.name}</h1>
                    <img src="https://images-static.nykaa.com/uploads/14bc9c3a-bbc1-44f8-a7e4-f24b79050b4e.jpg" width="100%"
                    />
                </div>
                <input type='text' className="input-field" id="searchValue" name="searchValue" value={searchValue} onChange={handleInputChange}/>

                <h2 className="heading text-center">{currentType}</h2>

                <div className="allpro col-md-12">
                    <div className="row">
                        {renderData.map((product, index) => (
                            <Col key={index} lg={3} md={4} sm={6} xs={6} className="mb-5">
                                <Link to={`/productdesc/${product.id}`} className="text-decoration-none text-dark">
                                    <ProductCard
                                        image={product.image1}
                                        name={product.productName}
                                        description={product.description}
                                        price={product.price}
                                        discount={product.discount}
                                        rating={product.rating}
                                    />
                                </Link>
                                <div className="buttons w-100">
                                    <button className="btn btn-outline-dark w-25">❤️</button>
                                    <button className="cartbtn btn btn-dark w-75" onClick={() => addToCart(product.id)}>Add To Cart</button>
                                </div>
                            </Col>
                            ))}

                        {/* <Link to="/cart">Go To Cart */}
                       {/* { <Cart cartList={cartList} />} */}
                        {/* </Link> */}

                    </div>
                </div>
            </div>
        </>
    )
}
export default AllProducts;