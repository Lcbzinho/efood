import { Banner, RestaurantDesc, RestaurantDescDiv } from './styles'

type Props = {
  img: string
}

export const RestaurantBanner = ({ img }: Props) => {
  return (
    <Banner Background={img}>
      <RestaurantDescDiv>
        <RestaurantDesc weight={100}>Italiana</RestaurantDesc>
        <RestaurantDesc weight={900}>La Dolce Vita Trattoria</RestaurantDesc>
      </RestaurantDescDiv>
    </Banner>
  )
}
