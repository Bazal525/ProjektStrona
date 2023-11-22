import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import MovieList from './MovieList';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      {}
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Navbar.Text>
            &copy; 2023 Damian Maziarz. Wszelkie prawa zastrzeżone.
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
