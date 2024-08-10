import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "../../assets/css/carousel.css"

function CarouselMain(){

  const isMobileView = window.innerWidth <= 550;

  useEffect(()=>{
    getAllImages();
  },[])

    const [carouselImages , setCarouselImages] = useState({});

    const getAllImages=async () =>{
      const allImages =await axios.get(`http://localhost:8090/getImages`);
      console.log(allImages)
      setCarouselImages(allImages.data);
    }

    return(<>
  {/* <img src="https://cdn-icons-png.flaticon.com/512/223/223226.png" width="20%" class="mx-2" /> */}
  {/* <img src="https://cdn-icons-png.flaticon.com/512/1157/1157969.png" width="20%" class="mx-2" /> */}
{/* 
<div class="twobutton my-3 col-md-12  d-flex">

<button class="col-md-6 w-25 btn btn-outline-dark button px-3 mx-2 ms-auto">
        HandMade
    </button>
<button class=" col-md-6 w-25 btn btn-outline-dark button px-3 mx-2 me-auto">
  Supplies </button>

</div> */}


        <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobileView ? "https://c4.wallpaperflare.com/wallpaper/258/149/303/dream-ride-hdr-wallpaper-preview.jpg" : carouselImages.image1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src={carouselImages.image2}
          src={isMobileView ? "https://m.media-amazon.com/images/I/81BDDEmxWPL._AC_UF1000,1000_QL80_.jpg" : carouselImages.image2}

          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src={carouselImages.image3}
          src={isMobileView ? "https://i.pinimg.com/736x/1c/28/47/1c28478aee4ea4dbb089c8671b5ed4ee.jpg" : carouselImages.image3}

          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </>
    )
}

export default CarouselMain;