import Link from 'next/link'
import { withRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
const Index = ({ router }) => {
    const [routeName, setRoute] = useState('/')
    useEffect(() => {
      setRoute(router.route)
    })

    return <div className="sidebar" data-color="white" data-active-color="danger">
    <div className="logo">
      <Link href="/">
        <a  className="simple-text logo-mini">
          <div className="logo-image-small">
            <img src="/img/logo-small.png"/>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a  className="simple-text logo-normal">
          Number Theory AI
        </a>
      </Link>
    </div>
    <div className="sidebar-wrapper">
      <ul className="nav">
        <li className={routeName == '/' ? 'active' : ''}>
          <Link href="/">
            <a>
              <i className="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </Link>
        </li>
        <li className={routeName == '/users' ? 'active' : ''}>
          <Link href="/users">
            <a>
              <i className="nc-icon nc-diamond"></i>
              <p>Users</p>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
}

export default withRouter(Index)