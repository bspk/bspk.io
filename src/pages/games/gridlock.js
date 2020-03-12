import React from 'react';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Card, Image} from 'react-bulma-components';

import '../../components/style.scss';
import Helmet from '../../components/helmet';
import Footer from '../../components/footer';
import bspkGames from '../../images/bspk-games.png';
import gridlock from '../../images/gridlock.png';
import cards from '../../images/cards.png';
import GameBar from '../../components/gamebar';

const PageContent = () => (
  <Section className="games">
    <Columns>
      <Columns.Column size="four-fifths">
        <h1 className="title is-1">Gridlock: Boston</h1>
      	<p>
          <b>Gridlock: Boston</b> is a competitve board game for 2-4 players about driving around the city where none of the roads make sense and everything is always changing on you. 
      	</p>

      	<p>
          <b>Gridlock: Boston</b> is currently in pre-production.
        </p>
      </Columns.Column>
      <Columns.Column size="one-fifth">
          <Card>
            <Card.Image src={gridlock} alt="Gridlock: Boston" />
            <Card.Content>
              <a href="http://gridlock.info/">
              &raquo; Get more information about Gridlock: Boston
              </a>
            </Card.Content>
          </Card>
      </Columns.Column>
    </Columns>
  </Section>
);

const Page = () => (
	<div>
		<Helmet />
    <GameBar />
		<PageContent />
		<Footer />
	</div>
);

export default Page;
