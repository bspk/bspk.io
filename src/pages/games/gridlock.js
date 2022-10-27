import React from 'react';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Card, Image} from 'react-bulma-components';

import '../../components/style.scss';
import Helmet from '../../components/helmet';
import Footer from '../../components/footer';
import bspkGames from '../../images/bspk-games.png';
import gridlock from '../../images/gridlock.png';
import gridlockBoard from '../../images/gridlock-board.jpg';
import cards from '../../images/cards.png';
import GameBar from '../../components/gamebar';

const PageContent = () => (
  <Section className="games">
    <Columns>
      <Columns.Column size="four-fifths">
        <h1 className="title is-1">Gridlock: Boston</h1>
      	<p>
          <b>Gridlock: Boston</b> is a competitve board game for 2-4 players about driving around the city where none of the roads make sense and everything is always changing on you. In this game, you'll build out a road network through the city and drive around visiting famous landmarks and areas. But be careful, these roads will change around you as other players are building out their own routes. And don't forget, everyone can use the same roads, so keep an eye on what's happening all over town.
      	</p>
        <p>
          <img src={gridlockBoard} alt="Image of Gridlock Boston game board" title="Gridlock Boston board and cards" />
        </p>
      	<p>
          <b>Gridlock: Boston</b> is currently out of print. We'd love to create a second edition, though, so if that's something you're in terested in, get in touch and let us know!
        </p>
    
        <p>
          <h2 className="title is-2">Instructions:</h2>
          Already have the game? Download the instructions:
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
              &raquo; Kickstarter for Gridlock: Boston
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
