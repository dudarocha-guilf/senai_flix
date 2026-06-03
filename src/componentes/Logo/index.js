import styled from 'styled-components'
import logo from '../../imagens/logorosa-removebg-preview.png'

const LogoContainer = styled.div`
display: flex;
align-items: center;

color: white;
font-size: 28px;
`
const LogoImagem = styled.img`
width: 180px;
margin-right: 40px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt="Logo SENAI Flix" />
        </LogoContainer>
    )
}
export default Logo