import {
  RestaurantCardAddButton,
  RestaurantCardDesc,
  RestaurantCardDiv,
  RestaurantCardImage,
  RestaurantCardTitle,
} from './styles'

type Props = {
  CardImg: string
  CardTitle: string
  CardDesc: string
}

export const RestaurantCard = ({ CardDesc, CardImg, CardTitle }: Props) => {
  return (
    <RestaurantCardDiv>
      <div>
        <RestaurantCardImage src={CardImg} />
        <RestaurantCardTitle>{CardTitle}</RestaurantCardTitle>
        <RestaurantCardDesc>{CardDesc}</RestaurantCardDesc>
      </div>
      <RestaurantCardAddButton>Add to Cart</RestaurantCardAddButton>
    </RestaurantCardDiv>
  )
}
