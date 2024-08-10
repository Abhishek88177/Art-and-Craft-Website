import { useEffect, useState } from "react";
import axios from 'axios';
import SendProductData from "../Services/SendProductData";

function AddProduct() {
    useEffect(()=>{
        getType()
    },[])

    const [typeData , setTypeData] = useState([]);
    const [productData , setProductData] = useState({
        productName : "",
        price : "",
        rating : 1,
        type : "",
        description : "",
        image1 : "",
        image2 : "",
        video : ""
    })

    const {productName ,price ,rating ,type ,description ,image1 ,image2 ,video} = productData;

    

    const getType=async ()=>{
        const result = await axios.get("http://localhost:8090/getallcategory");
        setTypeData(result.data);
        // console.log(result.data);
    }

    const changeHandle =(e) => {
        setProductData({
            ...productData , [e.target.name] : e.target.value
        })
    }

    const submitproductData =(e) =>{
        e.preventDefault();
        // console.log(productData);
        SendProductData(productData);
    }

    return (
        <>

            <div className="container ">
                <div className="col-md-9 border mx-auto p-3 rounded bg-light">

                    <h3 className="text-center pb-4">Add Product</h3>

                    <form className="" onSubmit={submitproductData}>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlInput1">Product Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Name" name="productName" value={productData.productName} onChange={changeHandle}/>
                        </div>
                        <div className="row mb-3">
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlInput1">Price</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Price" name="price" value={productData.price} onChange={changeHandle}/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="rating">Rating</label>
                                <select class="form-control" id="rating" name="rating" value={productData.rating} onChange={changeHandle}>
                                <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                                <label for="rating">Type</label>
                                <select class="form-control" id="type" name="type" value={productData.type} onChange={changeHandle}>
                                <option value="" disabled>
                                 Select an option
  </option>
                                {typeData.map((data, index) => (
                                    <option key={index} selected={data.categoryName === productData.type}>{data.categoryName}</option>
                                ))}
<option>
                                 Add New Category
  </option>
                                </select>
                            </div>

                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="3" name="description" value={productData.description} onChange={changeHandle}/>
                        </div>

                        <div class="form-group my-3">
                            <label for="image1">Image 1</label>
                            <input type="text" class="form-control" id="image1" placeholder="Image 1" name="image1" value={productData.image1} onChange={changeHandle}/>
                        </div>

                        <div class="form-group">
                            <label for="image2">Image 2</label>
                            <input type="text" class="form-control" id="image2" placeholder="Image 2" name="image2" value={productData.image2} onChange={changeHandle}/>
                        </div>

                        <div class="form-group my-3">
                            <label for="video">Video</label>
                            <input type="text" class="form-control" id="video" placeholder="Video" name="video" value={productData.video} onChange={changeHandle}/>
                        </div>

                        <button className="btn btn-dark w-100 mt-4" type="submit">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct;