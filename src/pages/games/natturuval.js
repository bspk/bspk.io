import React from 'react';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Card, Image} from 'react-bulma-components';

import '../../components/style.scss';
import Helmet from '../../components/helmet';
import Footer from '../../components/footer';
import bspkGames from '../../images/bspk-games.png';
import natturuval from '../../images/natturuval.png';
import GameBar from '../../components/gamebar';

const PageContent = () => (
  <Section className="games">
    <Columns>
      <Columns.Column size="four-fifths">
        <h1 className="title is-1">Náttúruval</h1>
      	<p>
          <b>Náttúruval</b> is card game about wild animals aimed at kids from 6-10 years old, but fun for people of all ages. 
        </p>
      	<p>
          Find out more at <a href="http://natturuval.com">natturuval.com</a>
        </p>
            
      </Columns.Column>
      <Columns.Column size="one-fifth">
          <Card>
            <Card.Image src={natturuval} alt="Náttúruval" />
            <Card.Content>
              <a href="https://gamefound.com/en/projects/bespoke-games/natturuval">
              &raquo; Crowd funding for Náttúruval
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
