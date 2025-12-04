import { ButtonContainer, ButtonTitle } from './styles'

type Props = {
  value: number
}

export const BuyButton = ({ value }: Props) => {
  return (
    <ButtonContainer>
      <ButtonTitle>Adicionar ao Carrinho - R$ {value}</ButtonTitle>
    </ButtonContainer>
  )
}
