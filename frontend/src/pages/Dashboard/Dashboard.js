import React, { Component } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Delete from './assets/delete.svg';
import Edit from './assets/edit.svg';

import './Dashboard.css';

export default class Dashboard extends Component {
    state = {
        news: [],
    }
    async componentDidMount(){
        const response = await api.get('news');

        this.setState({news: response.data});
    }
    render() {
        return(
            <Container>
                <Row className='dashboard-title'> <h1> Notícias </h1> 
                        <Link to='/noticias/criar' className='dashboard-button'> Criar notícias </Link>
                </Row>
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
                             <div className='buttons'>
                             <Link className='edit-button'>
                                Editar <img className='svg-image' src={require('./assets/edit.svg')}></img>
                             </Link>
                             <Link className='delete-button'>
                                <img className='svg-image' src={require('./assets/delete.svg')}></img>
                             </Link>
                             </div>
                           </Card.Body>
                         </div>
                       </Card>
                     </Row>
                    ))}
        </Container>

    )
  }
}
