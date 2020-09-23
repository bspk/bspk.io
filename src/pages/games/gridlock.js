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
          <b>Gridlock: Boston</b> is currently in limited production, and limited edition copies are available for sale now! Click the button in the side bar to check out with PayPal.
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
              &raquo; Kickstarter for Gridlock: Boston
              </a>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="buy-now">
                Order the Kickstarter Standard Edition while supplies last.
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="DDW2STQTRBF62" />
                <button type="submit" className="button is-warning is-medium is-rounded">Buy Now!</button>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              
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
