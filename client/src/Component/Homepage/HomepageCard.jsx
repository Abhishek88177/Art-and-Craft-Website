import "../../assets/css/homepagecard.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomepageCard() {

    useEffect(() => {
        getAllCategory();
    }, [])

    const [category, setCategory] = useState([]);

    const getAllCategory = async () => {
        const allCategory = await axios.get(`http://localhost:8090/getallcategory`)
        console.log("data" + allCategory.data)
        setCategory(allCategory.data);
    }

    return (<>
        <div className="cards py-3">
            <h3 className="heading text-center pt-3 pb-2">🌺Collections🌺</h3>
            <div className="container col-md-12 ">
                {/* <div className=""> */}
                <div className="row justify-content-center">
                    {/* <div className="showcat"> */}
                    {category.map((data, index) => (
                        <div className="col-lg-2 col-md-3 col-6" key={index}>
                            <Link className="text-decoration-none text-dark" to={`/productbycategory/${data.categoryType}`}>

                                <div className="catimage rounded-circle" style={{ overflow: 'hidden' }}>
                                    <img src={data.image} width={'100%'} height={'160px'} />
                                </div>
                                <p className="text-center custom-font pt-1 h5">{data.categoryName}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
        {/* </div> */}


        <div className="container col-md-12">
            <div className="d-flex long-card my-3 mx-auto">
                <div className="col-md-3 creator-logo my-auto">
                    <div className="text-center">
                        <a class="navbar-brand" href="#"><b>The Creator</b></a>
                    </div>
                </div>
                <div className="col-md-6 ms-3 my-auto custom-font">
                    <h3>Get Extra Discount More than 2000</h3>
                    {/* <h4 style={{marginTop:'-10px'}}> </h4> */}
                </div>
                <div className="col-md-3 me-2 my-auto ms-auto">
                    <Link to={`/productbycategory/${'all'}`}>
                        <a className="btn btn-outline-dark btn-sm">Shop Now</a>
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default HomepageCard;