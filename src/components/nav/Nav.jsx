import styled from '@emotion/styled'

const NavContainer = styled.nav`
  display:flex;
  justify-content: center;
  gap: 17px;
  padding:1rem;
`;


export default function Nav() {
  return (
    <NavContainer data-aos="fade-down" className='Nav'>
      <img src="/v0_dark.svg" alt="Vercel Logo" />
      <a href="#" className='Nav__Title'>Jeudy Robles / <span className='Nav__SubTitle'>Portfolio</span> </a>
    </NavContainer>
  )
}
