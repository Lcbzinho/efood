import { RestaurantBanner } from "../../components/JapaneseRestaurant/RestaurantBanner"
import { RestaurantBody } from "../../components/JapaneseRestaurant/RestaurantBody"
import { RestaurantHeader } from "../../components/JapaneseRestaurant/RestaurantHeader"
import { Footer } from "../../components/SubComponents/Footer"

export const JapaneseRestaurant = () => {
  return (
    <>
      <RestaurantHeader itens={0} />
      <RestaurantBanner />
      <RestaurantBody />
      <Footer />
    </>
  )
}
