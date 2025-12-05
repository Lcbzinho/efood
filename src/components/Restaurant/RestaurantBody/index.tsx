import { RestaurantCard } from '../RestaurantCard'
import { RestaurantBodyContainer, RestaurantContainer } from './styles'

type Props = {
  Cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}

export const RestaurantBody = ({ Cardapio }: Props) => {
  return (
    <RestaurantBodyContainer>
      <RestaurantContainer>
        {Cardapio.map((item) => (
          <RestaurantCard
            key={item.id}
            CardImg={item.foto}
            CardDesc={item.descricao}
            CardTitle={item.nome}
          />
        ))}
      </RestaurantContainer>
    </RestaurantBodyContainer>
  )
}
