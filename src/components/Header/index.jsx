import { Container, Nav } from './styled'

export function Header() {
  return (
    <Container>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </Nav>
    </Container>
  )
}
