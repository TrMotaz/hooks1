import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import Netflix from '../components/R.png';
function Navi() {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className="logoo" src={Netflix} alt ='netflix_image' height={20}/></Navbar.Brand>
    <Navbar.Brand href="#home">Ciné</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">Series</Nav.Link>
      <Nav.Link href="#pricing">Manga/Anime</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navi
