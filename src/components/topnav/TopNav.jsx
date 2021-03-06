import React from 'react'

import './topnav.css'

import Dropdown from '../dropdown/Dropdown'

import notifications from '../../assests/JsonData/notification.json'

import user_image from '../../assests/images/pat.png'

import user_menu from '../../assests/JsonData/user_menus.json'

import { Link } from 'react-router-dom'

const curr_user = {
    display_name: 'Patrick Mamsery',
    image: user_image
}
console.log(curr_user);
const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="user" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const TopNav = () => {
  return (
    <div className='topnav'>
        <div className="topnav__search">
            <input type="text" placeholder='Search here...' />
            <i className="bx bx-search"></i>
        </div>
        <div className="topnav__right">
            <div className="topnav__right-item">
                <Dropdown
                    customToggle={() => renderUserToggle(curr_user)}
                    contentData={user_menu}
                    renderItems={(item, index) => renderUserMenu(item, index)}
                />
                {/* dropdown */}
            </div>
            <div className="topnav__right-item">
                <Dropdown
                    icon='bx bx-bell'
                    badge={12}
                    contentData={notifications}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>View All</Link>}
                />
                {/* dropdown */}
            </div>
            <div className="topnav__right-item">
                <Dropdown/>
                {/* theme settings */}
            </div>
        </div>
    </div>
  )
}

export default TopNav