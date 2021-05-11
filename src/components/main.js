import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Tile } from 'react-bulma-components';

import './style.scss';

import bspkLogo from '../images/bspk.png';

const Main = ({...props}) => {
  return (
		<Hero>
			<Hero.Body>
				<Columns className="is-vcentered">
					<Columns.Column size='one-third'>
						<img src={bspkLogo} alt="bspk" />
            <h3 className="subtitle has-text-right">The perfect fit for complex problems.</h3>
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
      <Tile kind="ancestor">
        <Tile kind="parent" size={6} vertical>
          <Tile kind="child">
            <Link className="button is-fullwidth is-large" to="/what/">What We Do</Link>
          </Tile>
          <Tile kind="child" />
          <Tile kind="child">
            <Link className="button is-fullwidth is-large" to="/who/">Who We Are</Link>
          </Tile>
          <Tile kind="child" />
        </Tile>
        <Tile kind="parent" size={6} vertical>
          <Tile kind="child" />
          <Tile kind="child">
            <Link className="button is-fullwidth is-large" to="/projects/">Our Projects</Link>
          </Tile>
          <Tile kind="child" />
          <Tile kind="child">
            <Link className="button is-fullwidth is-large" to="/contact/">Get In Touch</Link>
          </Tile>
        </Tile>
      </Tile>
    </div>
	);
}

export default Main;
