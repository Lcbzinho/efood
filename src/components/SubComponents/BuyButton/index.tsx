import { ButtonContainer, ButtonTitle } from './styles'

type Props = {
  value: number
  onClick?: () => void
}

export const BuyButton = ({ value, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonTitle>Adicionar ao Carrinho - R$ {value}</ButtonTitle>
    </ButtonContainer>
  )
}
