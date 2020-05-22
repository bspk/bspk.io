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
          <b>Gridlock: Boston</b> is currently in pre-production. Copies should be available for sale online summer 2020.
        </p>
    
        <p>Download the instructions:
          <ul>
            <li><a href="https://bspk.io/games/gridlock/gridlock-instructions-en.pdf">🇺🇸 In English</a></li>
            <li><a href="https://bspk.io/games/gridlock/gridlock-instructions-de.pdf">🇩🇪 In German</a></li>
          </ul>
        </p>
            
      </Columns.Column>
      <Columns.Column size="one-fifth">
          <Card>
            <Card.Image src={gridlock} alt="Gridlock: Boston" />
            <Card.Content>
              <a href="https://www.kickstarter.com/projects/zeronine/gridlock-boston">
              &raquo; Kitckstarter for Gridlock: Boston
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
