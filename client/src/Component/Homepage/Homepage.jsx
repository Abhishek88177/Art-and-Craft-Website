import axios from "axios";
import { useContext, useEffect, useState } from "react";
import noteContext from "../../context/NoteContext";
import CarouselMain from "./Carousel";
import HomepageCard from "./HomepageCard";
import NewArrivals from "./NewArrivals";
import ProductsOfHomePage from "./ProductsOfHomePage";

function Homepage(){


    useEffect(()=>{
        getAllCategory();
    },[])

    const [category , setCategory] = useState([]);

    const getAllCategory =async () =>{
        const allCategory =await axios.get(`http://localhost:8090/getallcategory`) 
        console.log("cat",allCategory.data);
        setCategory(allCategory.data);
    }

    return(
        <>
         <CarouselMain />
         <HomepageCard />
         {category.map((data,index)=>(
                 <div className={`mt-3 py-2 ${index % 2 === 0 ? 'bg-light' : ''}`} key={index}>
                <ProductsOfHomePage title = {data.categoryName}
                             type = {data.categoryType}
                />
                </div>
         ))}
        
        <NewArrivals />
        </>
    )

}

export default Homepage;