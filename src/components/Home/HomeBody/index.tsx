import { Card } from '../../SubComponents/Card'
import { HomeBodyContainer, BodyContainer, Loading } from './styles'

import spaghetti from '../../../assets/images/Restaurants/Spaghetti.png'
import sushi from '../../../assets/images/Restaurants/sushi.png'
import { useEffect, useState } from 'react'

type RestaurantType = {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  capa: string;
  avaliacao: number;
  cardapio: {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    preco: number;
    porcao: string;
  }[];
};


export const Body = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function load() {
        const answer = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes");
        const date = await answer.json()
        setCarregando(false)
        setRestaurants(date)
    };

    load()
  },[])

  return (
    <BodyContainer>
      <div className="container">
        {
          carregando ? <Loading>
          {<h1>Loading...</h1>}
        </Loading> : ''
        }
        <HomeBodyContainer>
          {restaurants.map((RestaurantItem) => {
            return (
              <Card
              image={RestaurantItem.capa}
              title={RestaurantItem.titulo}
              rating={RestaurantItem.avaliacao}
              desc={RestaurantItem.descricao}
              link={`/restaurant/${RestaurantItem.id}`}
            />
            )
          })}
        </HomeBodyContainer>
      </div>
    </BodyContainer>
  )
}
