import axios from "axios";

function SendProductData(props){

    const payload = {
        "productName" : props.productName.toString(),
        "price" : props.price.toString(),
        "rating" : parseInt(props.rating),
        "type" : props.type.toString(),
        "description" : props.description.toString(),
        "image1" : props.image1.toString(),
        "image2" : props.image2.toString(),
        "video" : props.video.toString()
    }

    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
      };

      axios.post("http://localhost:8090/saveproduct",payload,customConfig).then(function(response) {
        console.log(response);
      },(error)=>{
        console.log(error);
      })

    return(<>
    </>)
    
}

export default SendProductData;
