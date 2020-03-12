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
        <h1 className="title is-1">Cards Against Identity</h1>
      	<p>
      		<b>Cards Against Identity</b> is an unofficial expansion to <a href="https://cardsagainsthumanity.com/">Cards Against Humanity</a> and similar party games. This expansion pack includes a set of all-new question (black) and answer (white) cards focusing on the world of internet identity. If you want to know what the new password requirements will be, or you know the feeling of accidentally hitting your security token in the middle of a sentence, or you just want to blame everything on multi-factor authentication, this card set is for you. It's full of industry jokes and references that your normal friends probably won't understand. 
      	</p>

      	<p>
          A number of disturbed and/or distinguished individuals contributed to creating this expansion deck. All content is copyright Bespoke Engineering, LLC and is available under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA license</a>. Have an idea for something to add? Get in touch, and you might see it in a future edition!
      	</p>

      	<p>
      		Ready to play? A physical version of the expansion pack can be purchased through <b>The Game Crafter</b>. You can also download and print out your own cards from the <a href="CAI_Identiverse_2019.pdf">PDF version for 2019</a>. Note that neither of these options contain the base game of Cards Against Humanity and that's not our problem.
      	</p>
      </Columns.Column>
      <Columns.Column size="one-fifth">
          <Card>
            <Card.Image src={cards} alt="Cards Against Identity" />
            <Card.Content>
              <a href="https://www.thegamecrafter.com/games/cards-against-identity">
              &raquo; Buy Cards Against Identity 2019
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
