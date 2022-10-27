import React from 'react';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Navbar , Image} from 'react-bulma-components';

import '../../components/style.scss';
import Helmet from '../../components/helmet';
import Footer from '../../components/footer';
import bspkGames from '../../images/bspk-games.png';
import gridlock from '../../images/gridlock.png';
import cards from '../../images/cards.png';

const PageContent = () => (
  <Section className="games games-index">
    <Columns>
      <Columns.Column size="half" offset="one-quarter">
        <Image src={bspkGames} alt="Bespoke Gaming"/>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size="4" offset="1">
        <Link to="/games/gridlock/"><Image src={gridlock} alt="Gridlock: Boston" /></Link>
      </Columns.Column>
      <Columns.Column size="4" offset="2">
        <Link to="/games/cards/"><Image src={cards} alt="Cards Against Identity" /></Link>
      </Columns.Column>
      <Columns.Column size="half" offset="one-quarter" className="has-text-centered">
        <Link to="/">Bespoke Engineering Main Page ⤴️</Link>
      </Columns.Column>
    </Columns>
  </Section>
);

const Page = () => (
	<div>
		<Helmet />
		<PageContent />
		<Footer />
	</div>
);

export default Page;
