import { Carousel } from 'react-bootstrap';
import "../assets/css/productdesc.css"
import React, { useContext, useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import TopProducts from './Homepage/ProductsOfHomePage';
import { Modal, Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import noteContext from '../context/NoteContext';


const ProductDescription = () => {

    const { id } = useParams();
    console.log(id)
    
    const {userDetails} = useContext(noteContext);
    

    useEffect(() => {
        getProductById(id);
      }, []);
    
      const [products, setproducts] = useState({});

      const getProductById = async (id) => {
        const result = await axios.get(`http://localhost:8090/getprobyid/${id}`);
        setproducts(result.data);
        console.log(result.data)
        
      };

      const rating = products.rating;
const filledStars = '⭐'.repeat(rating);
const emptyStars = '✰'.repeat(5 - rating);

const stars = filledStars + emptyStars;
    // const stars = '⭐'.repeat(products.rating);
    
    const loremIpsum = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae minima ex adipisci facere, sint illo est nulla voluptate molestiae voluptatem unde, ipsum culpa ad totam nam eos? Nesciunt, odit?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit nesciunt quo sunt incidunt, neque repudiandae odio ab adipisci, animi eaque debitis, sapiente voluptate. Tenetur velit eos possimus doloremque odio.";
    const words = loremIpsum.split(" ");
    const [showAll, setShowAll] = useState(false);

    const toggleContent = () => {
        setShowAll(!showAll);
    };

    const visibleText = showAll ? loremIpsum : words.slice(0, 42).join(" ");
    const buttonText = showAll ? "Show Less" : "Show All";

    const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const addToCart=(productid)=>{
    const userid = userDetails.id;
    axios.post(`http://localhost:8090/addtocart/${productid}/${userid}`).then((response) =>{
       console.log(response.data)
   })

}

    return (
        <>
            <div className="container bg-light custom-font">
                <div className="col-md-12">
                    <div className="row my-5">
                        <div className="col-md-5">
                            {/* <img className="p-5" src="https://images-static.nykaa.com/media/catalog/product/0/e/0e16918NYLAGRL000033_4.jpg" width={"100%"} /> */}

                            <Carousel interval={1500} controls={false} >
                                <Carousel.Item onClick={() => handleImageClick(products.image1)}>
                                    <img
                                        className="d-block w-100"
                                        src={products.image1}
                                        alt="First slide"  
                                    />

                                </Carousel.Item>
                                <Carousel.Item  onClick={() => handleImageClick(products.image2)}>
                                    <img
                                        className="d-block w-100"
                                        src={products.image2}
                                        alt="Second slide"
                                        />

                                </Carousel.Item>
                                <Carousel.Item >
                                    {/* <img
                                        className="d-block w-100"
                                        src="https://images-static.nykaa.com/media/catalog/product/1/8/18d33a48906063411147_1509233.jpg"
                                        alt="Third slide"
                                    /> */}

                                    <video width={'100%'} height={'100%'} controls autoPlay>
                                        <source src='https://d286adtp3hdk00.cloudfront.net/FOXTA00000005_2video.mp4' type='video/mp4' />
                                    </video>

                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className="col-md-7">
                            <div className="p-3">
                                <h3 className="productname py-3"><b>{products.productName}</b></h3>
                                <h4>Rs. {products.price} || {products.price}% Off</h4>
                                <h6 className="prorating py-2">{stars}</h6>
                                {/* 
                                    <div className="dileverycheck">
                                        <p>Dilevery</p>
                                        <form class="form-inline my-2 my-lg-0">
      <input class="form-control col-lg-3 mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

                                    </div> */}

                                <div className="col-md-12 text-center my-3 ">
                                    <div className="row">
                                        <div className="col-md-5  my-2 border">
                                            <h6 className="text-tags p-2">100% Genuine Products</h6>
                                        </div>

                                        <div className="col-md-5 my-2 border">
                                            <h6 className="text-tags p-2">Easy Return Policy</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons w-100 text-center">
                                    {/* <button className="btn  w-25">❤️</button> */}
                                    <button className="cartbtn btn btn-dark px-4" onClick={() => addToCart(id)}>Add To Cart</button>
                                    <button className="cartbtn btn btn-dark px-4 mx-1">Buy Now</button>
                                </div>

                                <div className="desc my-4">
                                    <h5 >Description:</h5>

                                    <p>{visibleText}</p>
                                    <hr />
                                    <button className='w-100 btn toggle-button border-none' onClick={toggleContent}>{buttonText}</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='col-md-12'>
                <TopProducts />

            </div>
            {/* </div> */}

            <div className='container'>
                <div className='col-md-12'>
                    <h5 className='text-center'>Ratings & Reviews</h5>
                    <hr />


                    <div >
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Full Screen Image"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>


        </>
    )
}

export default ProductDescription;