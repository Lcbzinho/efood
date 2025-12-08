import { Button } from "./styles"

type Props = {
    children: React.ReactNode
}

export const ContinueButton = ({children}: Props) => {
    return (
        <Button>
            {children}
        </Button>
    )
}