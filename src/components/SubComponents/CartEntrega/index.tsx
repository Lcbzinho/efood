import { EntregaDiv, EntregaInfoDiv, EntregaInfoDivGrid, EntregaInput, EntregaLabel, EntregaTitle } from "./styles"

export const CartEntrega = () => {
    return (
        <EntregaDiv>
            <EntregaTitle>Entrega</EntregaTitle>
            <EntregaInfoDiv>
                <EntregaLabel>Quem irá receber</EntregaLabel>
                <EntregaInput placeholder="Nome" />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
                <EntregaLabel>Endereço</EntregaLabel>
                <EntregaInput placeholder="Rua" />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
                <EntregaLabel>Cidade</EntregaLabel>
                <EntregaInput placeholder="Cidade" />
            </EntregaInfoDiv>
            <EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>CEP</EntregaLabel>
                    <EntregaInput placeholder="CEP" />
                </EntregaInfoDiv>
                <EntregaInfoDiv>
                    <EntregaLabel>Número</EntregaLabel>
                    <EntregaInput placeholder="Número" />
                </EntregaInfoDiv>
            </EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>Complemento (Opcional)</EntregaLabel>
                    <EntregaInput placeholder="Complemento" />
                </EntregaInfoDiv>
        </EntregaDiv>
    )
}