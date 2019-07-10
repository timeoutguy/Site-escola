import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import './CriarNoticias.css'
import api from '../../services/api'
export default class CriarNoticias extends Component {
  state = {
    title: '',
    author: '',
    description: '',
    body: '',
    image: null,
  }
  handleSubmit = async e =>{
    e.preventDefault();

    const data = new FormData();

    data.append('title', this.state.title);
    data.append('author', this.state.author);
    data.append('description', this.state.description);
    data.append('body', this.state.body);
    data.append('image', this.state.image);

    await api.post('news', data)
    
    this.props.history.push('/noticias')
  }
  handleImageChange = e => {
    this.setState({image: e.target.files[0] })
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className='content'>
        <Form className='form-content' onSubmit={this.handleSubmit}>
          
          
          <Form.Control 
            className='form-control' 
            type="text" 
            name="title" 
            placeholder="Titulo da notícia" 
            onChange={this.handleChange}
            value={this.state.title}
          />
           <Form.Control 
            className='form-control' 
            type="text" 
            name="author" 
            placeholder="Autor da notícia" 
            onChange={this.handleChange}
            value={this.state.author}
          />
           <Form.Control 
            className='form-control' 
            type="text" 
            name="description" 
            placeholder="Descrição da notícia" 
            onChange={this.handleChange}
            value={this.state.description}
          />
           <Form.Control 
            className='form-control' 
            as="textarea" 
            name="body" 
            placeholder="Corpo da notícia" 
            onChange={this.handleChange}
            value={this.state.body}
          />

          <Form.Label> <h5> Imagem </h5> </Form.Label>
          <Form.Control 
          className='form-control-file' 
          type="file"
          name="image"
          onChange={this.handleImageChange}
          />
          <Button className='form-button'type='submit'> Enviar Notícia </Button> 
        </Form>
      </div>
    );
  }
}
