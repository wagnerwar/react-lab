import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import inicio from '../pages/inicio'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'
import Main from '../componentes/Layout/Main'
export default props => (
    <Routes>
      <Route path='/' element={ <Main/> }>
        <Route index element={ <Home/> }/>
      </Route>
    </Routes>
)
/*<Routes>
      <Route Component={<Main></Main>}>
        <Route path='/cadastro' Component={Cadastro} />
        <Route path='/' Component={Home} />
      </Route>
  </Routes> */