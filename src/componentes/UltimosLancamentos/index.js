import styled from 'styled-components'
import como from '../../imagens/filmes/comoeu.jpg'
import cora from '../../imagens/filmes/coraline.jpg'
import menino from '../../imagens/filmes/meninomaluquinho.jpg'
import Enrolados from '../../imagens/filmes/Enrolados.webp'

const lancamentos = [
    { nome: 'Como Eu Era Antes de Você', id: 1, src: como },
    { nome: 'Coraline', id: 2, src: cora },
    { nome: 'Menino Maluquinho', id: 3, src: menino },
    { nome: 'Enrolados ', id: 4, src: Enrolados }
]
const LancamentosContainer = styled.section`
background-color: #ff8da1;
padding: 50px 0;
text-align: center;
`
const Titulo = styled.h2`
color: #fff;
font-size: 32px;
`
const Filmes = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
`
const FilmeCard = styled.div`
background-color: #fff;
width: 180px;
padding: 20px;

border-radius: 10px;
`
const Capa = styled.img`
width: 100px;
`
function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo>Últimos Lançamentos</Titulo>
            <Filmes>
                {lancamentos.map(filme => (
                    <FilmeCard>
                        <Capa src={filme.src} alt={filme.nome} />
                        <p>{filme.nome}</p>
                    </FilmeCard>
                ))}
            </Filmes>
        </LancamentosContainer>
    )
}
export default UltimosLancamentos