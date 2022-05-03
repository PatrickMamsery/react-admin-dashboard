import React from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import MyRoutes from '../MyRoutes'

import { Route, BrowserRouter } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
            <Route render={(props) => (
                <div>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <MyRoutes/>
                        </div>
                    </div>
                </div>
            )}/>
    </BrowserRouter>
  )
}

export default Layout