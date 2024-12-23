import React from "react"
import Rotas from "../componentes/Rotas"
import Menu from "../componentes/Menu"
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"

const App = props => (  
    <div className="container">
        {/* <Menu></Menu>
                <RouterProvider router={Rotas}>
        </RouterProvider>
         */}      
        <Rotas></Rotas>
    </div>
)
export default App