import { BuyButton } from '../BuyButton'
import {
  ModalCloseButton,
  ModalContainer,
  ModalDesc,
  ModalImage,
  ModalItem,
  ModalTitle,
} from './styles'
import Close from '../../../assets/images/Icons/close.png'

export const Modal = () => {
  return (
    <>
      <ModalContainer>
        <div>
          <ModalItem>
            <ModalCloseButton src={Close} />
            <ModalImage src="https://placehold.co/280x280" />
            <div>
              <ModalTitle>Restaurant Title</ModalTitle>
              <ModalDesc className="principalDesc">
                A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua
                simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante,
                coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o
                molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as
                folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza
                simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para
                qualquer ocasião.
              </ModalDesc>
              <ModalDesc>
                Serve: <span>2 a 3 Pessoas</span>
              </ModalDesc>
              <BuyButton value={89.9} />
            </div>
          </ModalItem>
        </div>
      </ModalContainer>
    </>
  )
}
