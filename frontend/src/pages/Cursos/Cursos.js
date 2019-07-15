import React, { Component } from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap'
import './Cursos.css'

export default class Curso extends Component {
  render() {
    return(
        <Container>
          <Row>
            <Col className='col-4'>
              <Card className='card-cursos' text='white' style={{width: '22rem'}}>
                <Card.Header>
                <Card.Title> Adminstração </Card.Title>
                <Card.Img variant='top' src={require('./assets/analysis.svg')}></Card.Img>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    <p>O técnico em administração é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controles e auxilia nos processos de direção utilizando ferramentas da informática básica. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.</p>
                    <b><p>Eixo Tecnológico: Gestão e Negócios</p>
                    <p>Mercado de trabalho: Instituições Públicas, Privadas e do Terceiro setor</p></b>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-4'>
              <Card className='card-cursos-white' style={{width: '22rem'}}>
                <Card.Header>
                <Card.Title> Eletrônica </Card.Title>
                <Card.Img variant='top' src={require('./assets/motherboard.svg')}></Card.Img>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    <p>O TÉCNICO EM ELETRÔNICA é o profissional que participa do desenvolvimento de projetos. Executa a instalação e a manutenção de equipamentos e sistemas eletrônicos. Realiza medições e testes com equipamentos eletrônicos. Executa procedimentos de controle de qualidade e gestão da produção de equipamentos eletrônicos.</p>
                    <b><p>Eixo Tecnológico: Controle e Processos Industriais</p>
                    <p>Mercado de trabalho: indústrias; laboratórios de controle de qualidade e de manutenção; empresas de informática, de telecomunicações e de produtos eletrônicos.</p></b>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-4'>
              <Card className='card-cursos' text='white' style={{width: '22rem'}}>
                <Card.Header>
                <Card.Title> Desenvolvimento de Sistemas </Card.Title>
                <Card.Img variant='top' src={require('./assets/data.svg')}></Card.Img>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    <p>O técnico em desenvolvimento de sistemas é o profissional que desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ambientes de desenvolvimento de sistemas, sistemas operacionais e banco de dados. Realiza testes de programas de computador, mantendo registros que possibilitem análises e refinamento dos resultados.</p>
                    <b><p>Eixo Tecnológico: Informação e Comunicação</p>
                    <p>Mercado de trabalho: Instituições, que demandam sistemas computacionais, especialmente envolvendo programação de computadores; comércio; empresas de prestação de serviços e empresas de tecnologia da informação;</p></b>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
