import React, { Component } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './Dashboard.css';

export default class Dashboard extends Component {
    state = {
        news: [],
    }
    async componentDidMount(){
        const response = await api.get('news');

        this.setState({news: response.data});
    }

    handlerDelete = async id => {
      await api.delete(`news/${id}`)

      window.location.reload()
      
    }
    render() {
        return(
            <Container>
                <Row className='dashboard-title'> <h1> Notícias </h1> 
                        <Link to='/noticias/criar' className='dashboard-button'> Criar notícias </Link>
                </Row>
                    {this.state.news.map(News => (
                       <Row>
                       <Card className='dashboard-card'>
                           <Card.Img className='dasboard-card-image' src={`http://localhost:3333/files/${News.image}`} />
                           <Card.Body>
                             <Card.Title> <h2>{News.title}</h2> </Card.Title>
                             <Card.Text>
                               <p> <h6>Escrito por {News.author}</h6> </p>
                               <span className='dashboard-card-description'>{News.description}</span>
                             </Card.Text>
                             <Button className='delete-button'onClick={() => this.handlerDelete(News._id)}>
                                <img className='svg-image' src={require('./assets/delete.svg')}></img>
                             </Button>
                           </Card.Body>
                       </Card>
                     </Row>
                    ))}
        </Container>

    )
  }
}
