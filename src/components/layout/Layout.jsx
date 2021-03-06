import React from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import MyRoutes from '../MyRoutes'

import { Route, BrowserRouter } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
            <Route render={(props) => (
              <div className='layout'>
                  <Sidebar {...props}/>
                  <div className="layout__content">
                      <TopNav/>
                      <div className="layout__content-main">
                          <MyRoutes />
                      </div>
                  </div>
              </div>
            )}/>
    </BrowserRouter>
  )
}

export default Layout