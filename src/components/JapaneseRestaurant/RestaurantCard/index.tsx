import { RestaurantCardAddButton, RestaurantCardDesc, RestaurantCardDiv, RestaurantCardImage, RestaurantCardTitle } from "./styles"
import Sushi from "../../../assets/images/Restaurants/sushi.png" 

export const RestaurantCard = () => {
    return (
        <RestaurantCardDiv>
            <RestaurantCardImage src={Sushi} />
            <RestaurantCardTitle>Japanese Sushi</RestaurantCardTitle>
            <RestaurantCardDesc>Order the best of Japanese cuisine from the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving home with our delivery service!</RestaurantCardDesc>
            <RestaurantCardAddButton>Add to Cart</RestaurantCardAddButton>
        </RestaurantCardDiv>
    )
}