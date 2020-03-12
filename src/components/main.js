import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content } from 'react-bulma-components';

import './style.scss';

import bspkLogo from '../images/bspk.png';

const Main = ({...props}) => {
  return (
		<Hero>
			<Hero.Body>
				<Columns className="is-vcentered">
					<Columns.Column size='one-third'>
						<img src={bspkLogo} alt="bspk" />
            <h3 className="subtitle">The perfect fit for complex problems.</h3>
					</Columns.Column>
					<Columns.Column>
						<Info />
					</Columns.Column>
				</Columns>
			</Hero.Body>
		</Hero>
  );
}

const Info = ({...props}) => {
	return (
		<div className="mainMenu">
      <Link className="button is-fullwidth is-large" to="/what/">What We Do</Link>
      <Link className="button is-fullwidth is-large" to="/who/">Who We Are</Link>
      <Link className="button is-fullwidth is-large" to="/projects/">Our Projects</Link>
      <Link className="button is-fullwidth is-large" to="/contact/">Get In Touch</Link>
    </div>
	);
}

export default Main;
