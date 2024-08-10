import { Link } from "react-router-dom";


function ProductCard(props) {
    const rating = props.rating; // Replace products.rating with your actual rating value
    const filledStars = '⭐'.repeat(rating);
    const emptyStars = '✰'.repeat(5 - rating);

    const stars = filledStars + emptyStars;
    // const stars = '⭐'.repeat(props.rating);
    // console.log("id"+props.id)

    const handleAdd = () => {
        console.log("cart")
    }

    return (
        <>
            <div className="border bg-white rounded text-center" style={{ fontFamily: "Cambria, Georgia, serif" }}>
                <div >
                    <img src={props.image} className="rounded img-fluid" />
                </div>

                <div className="cardtext pt-2 px-1">
                    <h5 className="proname" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.name}</h5>
                    <p className="proprice">MRP:₹{props.price} | {props.discount}% Off</p>
                    <h6 className="prorating">{stars} || 333</h6>
                </div>
            </div>

        </>
    )
}

export default ProductCard;