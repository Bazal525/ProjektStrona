import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const MovieList = () => {
  const filmy = [
    { id: 1, tytul: 'Film 1', plakat: '/images/film1.jpg' },
    { id: 2, tytul: 'Film 2', plakat: '/images/film1.jpg' },
    { id: 3, tytul: 'Film 3', plakat: '/images/film1.jpg' },
    { id: 4, tytul: 'Film 4', plakat: '/images/film1.jpg' },
    { id: 5, tytul: 'Film 5', plakat: '/images/film1.jpg' },
    { id: 6, tytul: 'Film 6', plakat: '/images/film1.jpg' },
    { id: 7, tytul: 'Film 7', plakat: '/images/film1.jpg' },
    { id: 8, tytul: 'Film 8', plakat: '/images/film1.jpg' },
  ];

  return (
    <Container className='movie-list'>
      <Row>
        {filmy.map((film) => (
          <Col key={film.id} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              {}
              <Card.Img 
              variant="top" 
              src={film.plakat} 
              alt={film.tytul} 
              style={{height:'25rem'}}
              />
              <Card.Body>
                <Card.Title>{film.tytul}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
