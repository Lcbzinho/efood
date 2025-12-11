import { useDispatch } from 'react-redux'
import {
  RestaurantCardAddButton,
  RestaurantCardDesc,
  RestaurantCardDiv,
  RestaurantCardImage,
  RestaurantCardTitle,
} from './styles'
import { Clicked } from '../../../store/slices/CartSlice'

type Props = {
  id: number
  CardImg: string
  CardTitle: string
  CardDesc: string
}

export const RestaurantCard = ({ CardDesc, CardImg, CardTitle }: Props) => {
  const Dispatch = useDispatch()
  return (
    <RestaurantCardDiv>
      <div>
        <RestaurantCardImage src={CardImg} />
        <RestaurantCardTitle>{CardTitle}</RestaurantCardTitle>
        <RestaurantCardDesc>{CardDesc}</RestaurantCardDesc>
      </div>
      <RestaurantCardAddButton onClick={() => Dispatch(Clicked())}>
        Add to Cart
      </RestaurantCardAddButton>
    </RestaurantCardDiv>
  )
}
