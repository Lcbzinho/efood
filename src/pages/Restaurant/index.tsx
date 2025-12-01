import { RestaurantBanner } from "../../components/Restaurant/RestaurantBanner"
import { RestaurantBody } from "../../components/Restaurant/RestaurantBody"
import { RestaurantHeader } from "../../components/Restaurant/RestaurantHeader"
import { Footer } from "../../components/SubComponents/Footer"

export const ItalianRestaurant = () => {
  return (
    <>
      <RestaurantHeader itens={0} />
      <RestaurantBanner />
      <RestaurantBody />
      <Footer />
    </>
  )
}
