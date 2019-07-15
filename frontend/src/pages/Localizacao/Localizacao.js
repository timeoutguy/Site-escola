import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Localizacao.css'

export default class Localizacao extends Component {
  render() {
    return(
        <Container>
          <div className='map-content'>
            <h1> Localizacão </h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d920.4383925879623!2d-45.012895620832055!3d-22.66297481571558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bc35730ae095814!2sETEC+Prof.+Marcos+Uch%C3%B4as+dos+Santos+Penchel!5e0!3m2!1spt-BR!2sbr!4v1563196938231!5m2!1spt-BR!2sbr" style={{width: '1200px', height: '400px', frameborder: '0', border: '0' }} allowfullscreen></iframe>
          </div>
          <div className='info-content'>
            <p>Rua Afonso Pereira da Silva, 96,</p>
            <p>Vila Carmem</p>
            <p>Cachoeira Paulista-SP</p>
            <p>CEP 12630-000</p>
            <p>Telefone: (12) 3101-2816</p>
            <p>etecpta@gmail.com</p>
          </div>
          
        </Container>
    )
  }
}
