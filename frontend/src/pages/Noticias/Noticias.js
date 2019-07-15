import React, { Component } from 'react';
import api from '../../services/api'
import { Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { distanceInWords} from 'date-fns'
import pt from 'date-fns/locale/pt'
import './Noticias.css'


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
                  <Card.Header>  
                    <Card.Title> <h2>{News.title}</h2> </Card.Title>
                    <p> <h6>Escrito por {News.author} há {distanceInWords(News.createdAt, new Date(), {
                      locale: pt 
                    })}</h6> </p>
                    <span className='card-description'>{News.description}</span>
                  </Card.Header>
                  <Card.Img className='card-image' src={`http://localhost:3333/files/${News.image}`} />
                  <Card.Body>
                    <Card.Text>
                      <p className='news-content'> {News.body} </p> 
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Row>
          ))}
        </Container>
    )
  }
}
