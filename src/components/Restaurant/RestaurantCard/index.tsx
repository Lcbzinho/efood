import { RestaurantCardAddButton, RestaurantCardDesc, RestaurantCardDiv, RestaurantCardImage, RestaurantCardTitle } from "./styles"
import Pizza from "../../../assets/images/Restaurants/pizza.png" 

export const RestaurantCard = () => {
    return (
        <RestaurantCardDiv>
            <RestaurantCardImage src={Pizza} />
            <RestaurantCardTitle>Margherita Pizza</RestaurantCardTitle>
            <RestaurantCardDesc>The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil, and a touch of olive oil. Flavor and simplicity!</RestaurantCardDesc>
            <RestaurantCardAddButton>Add to Cart</RestaurantCardAddButton>
        </RestaurantCardDiv>
    )
}