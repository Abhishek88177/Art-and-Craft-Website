import { useState } from "react";
import SendCategoryData from "../Services/SendCategoryData";
import SendProductData from "../Services/SendProductData";

function AddCategory(){

    const [categoryData , setCategoryData] = useState({
        categoryName : "",
        category : "",
        image : "",
        descImage : ""
    });

    const {categoryName ,category ,image ,descImage} = categoryData;

    const changeHandle = (e) => {
        setCategoryData({
            ...categoryData , [e.target.name] : e.target.value
        })
    }

    const submitCategoryData = (e) =>{
        e.preventDefault();
        SendCategoryData(categoryData);
    }

    return(
        <>
         <div className="container ">
                <div className="col-md-9 border mx-auto p-3 rounded bg-light">

                    <h3 className="text-center pb-4">Add Category</h3>

                    <form className="" onSubmit={submitCategoryData}>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlInput1">Category Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name to Show in Homepage Caegory List" name="categoryName" value={categoryData.categoryName} onChange={changeHandle}/>
                        </div>

                        <div class="form-group mb-3">
                            <label for="exampleFormControlInput1">Category</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Category" name="category" value={categoryData.category} onChange={changeHandle}/>
                        </div>

                        

                        <div class="form-group my-3">
                            <label for="image1">Image 1</label>
                            <input type="text" class="form-control" id="image1" placeholder="Image 1" name="image" value={categoryData.image} onChange={changeHandle}/>
                        </div>

                        <div class="form-group">
                            <label for="image2">Image 2</label>
                            <input type="text" class="form-control" id="image2" placeholder="Image 2" name="descImage" value={categoryData.descImage} onChange={changeHandle}/>
                        </div>

                        <button className="btn btn-dark w-100 mt-4" type="submit">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCategory;