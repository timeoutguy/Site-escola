import React, { Component } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './Home.css'

export default class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <Container>
            <Row className='row-first'>
              <Col className='col-first'>
                <h1> Os melhores cursos técnico em Cachoeira Paulista, além do ensino médio.</h1>
                <p className> Na ETEC Prof.º Marcos Uchôas dos Santos Penchel você encontra o melhor ensino técnico de Cachoeira Paulista.
                Também encontra um ótimo ensino médio.  
                </p>
                <Link className='link-button'to='/cursos'> Cursos </Link>
              </Col>
              <Col> 
                <img className='white-svg' src={require('./assets/classroom.svg')}></img> 
              </Col>
            </Row>
          </Container>
        </div>
        <div className='purple-div'>
          <Container>
            <Row className='row-purple'>
              <Col >
                <img className='purple-svg' src={require('./assets/data.svg')}></img> 
              </Col>
              <Col className='col-purple'> 
                <h1> No curso de Desenvolvimento de sistemas você aprende programação-web, programaçãp orientada ao objeto, 
                  banco de dados e mais.</h1>
              </Col>
            </Row>
            </Container>
        </div>
        <div className='third-div'>
          <Container>
            <Row className='row-third'>
              <Col className='col-third'>
                <h1> No curso de Desenvolvimento de sistemas você aprende programação-web, programaçãp orientada ao objeto, 
                banco de dados e mais.</h1> 
              </Col>
              <Col> 
                <img className='white-svg' src={require('./assets/motherboard.svg')}></img>
              </Col>
            </Row>
            </Container>
        </div>
        <div className='purple-div'>
          <Container>
            <Row className='row-purple'>
              <Col >
                <img className='purple-svg' src={require('./assets/analysis.svg')}></img> 
              </Col>
              <Col className='col-purple'> 
                <h1> No curso de Desenvolvimento de sistemas você aprende programação-web, programaçãp orientada ao objeto, 
                  banco de dados e mais.</h1>
              </Col>
            </Row>
            </Container>
        </div>
      </React.Fragment>
    )
  }
}
