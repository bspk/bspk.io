import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';

import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Navbar } from 'react-bulma-components';
import bspkGames from '../images/bspk-games.png';
import gridlock from '../images/gridlock.png';
import cards from '../images/cards.png';

const GameBar = ({...props}) => {
  
  const [toggle, setToggle] = useState(false);
  
  return (
  <Navbar>
    <Navbar.Brand>
      <Link className="navbar-item" to="/games/">
        <img src={bspkGames} alt="Bespoke Engineering" height="28" />
      </Link>
      <Navbar.Burger onClick={() => setToggle(!toggle)} className={toggle ? 'is-active' : ''} />
    </Navbar.Brand>
    <Navbar.Menu className={toggle ? 'is-active' : ''} >
      <Navbar.Container>
        <Link className="is-large navbar-item" to="/games/gridlock/">
          <img src={gridlock} alt="Gridlock: Boston" height="28" />
        </Link>
        <Link className="is-large navbar-item" to="/games/cards/">
          <img src={cards} alt="Cards Against Identity" height="28" />
        </Link>
      </Navbar.Container>
      <Navbar.Container position="end">
        <Link className="is-large navbar-item" to="/contact/">Get In Touch</Link>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
  );
}
export default GameBar;
