import React from 'react'
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Cursos from './pages/Cursos/Cursos';
import Noticias from './pages/Noticias/Noticias';
import Contato from './pages/Contato/Contato';
import Dashboard from './pages/Dashboard/Dashboard'
import CriarNoticias from './pages/CriarNoticias/CriarNoticias'


export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cursos' component={Cursos} />
            <Route exact path='/noticias' component={Noticias} />
            <Route path='/contato' component={Contato} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/noticias/criar' component={CriarNoticias} />
        </Switch>
    )
}