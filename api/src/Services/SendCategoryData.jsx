import axios from "axios";

function SendCategoryData(props){
    const payloadData = {
        "image" : props.image.toString(),
        "descImage" : props.descImage.toString(),
        "categoryName" : props.categoryName.toString(),
        "categoryType" : props.category.toString()
        
    }

    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
      };

      console.log(payloadData)
      axios.post("http://localhost:8090/addcategory",payloadData,customConfig).then(function(response) {
        console.log(response);
      },(error)=>{
        console.log(error);
      })

    return(
        <>
        </>
    )
}

export default SendCategoryData;