import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';

import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Navbar } from 'react-bulma-components';
import bspkLogo from '../images/bspk-sm.png';

const TabBar = ({...props}) => {
  
  const [toggle, setToggle] = useState(false);
  
  return (
  <Navbar className="bspk-tabs">
    <Navbar.Brand>
      <Link className="navbar-item" to="/">
        <img src={bspkLogo} alt="Bespoke Engineering" height="28" />
      </Link>
      <Navbar.Burger onClick={() => setToggle(!toggle)} className={toggle ? 'is-active' : ''} />
    </Navbar.Brand>
    <Navbar.Menu className={toggle ? 'is-active' : ''} >
      <Navbar.Container>
        <Link className="is-large navbar-item" to="/what/">What We Do</Link>
        <Link className="is-large navbar-item" to="/who/">Who We Are</Link>
        <Link className="is-large navbar-item" to="/projects/">Our Projects</Link>
      </Navbar.Container>
      <Navbar.Container position="end">
        <Link className="is-large navbar-item" to="/contact/">Get In Touch</Link>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
  );
}
export default TabBar;
