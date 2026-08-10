import styled from '@emotion/styled'

const NavContainer = styled.nav`
  display:flex;
  justify-content: center;
  gap: var(--space-nav-gap);
  padding: var(--space-4);
`;


export default function Nav() {
  return (
    <NavContainer data-aos="fade-down" className='Nav'>
      <img src="/v0_dark.svg" alt="Jeudy Robles Logo" />
      <a href="#Hero" className='Nav__Title'>Jeudy Robles / <span className='Nav__SubTitle'>Portfolio</span> </a>
    </NavContainer>
  )
}
