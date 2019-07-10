import React, { Component } from 'react';
import api from '../../services/api'
import './Noticias.css'
import { Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Noticias extends Component {
  state = {
    news: [],
  }
  async componentDidMount(){
    const response = await api.get('news')

    this.setState({ news: response.data });
  }; 
  render() {
    return(
        <Container id='news-list'>
          {this.state.news.map(News => (
            <Row>
              <Card className='card'>
                <div className='card-horizontal'>
                  <Card.Img className='card-image' src={`http://localhost:3333/files/${News.image}`} />
                  <Card.Body>
                    <Card.Title> <h2>{News.title}</h2> </Card.Title>
                    <Card.Text>
                      <p> <h6>Escrito por {News.author}</h6> </p>
                      <span className='card-description'>{News.description}</span>
                    </Card.Text>
                    <Link className='card-button'>Ler mais</Link>
                  </Card.Body>
                </div>
              </Card>
            </Row>
          ))}
        </Container>
    )
  }
}
