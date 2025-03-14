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
      		Ready to play? A physical version of the expansion pack can be purchased through <b>The Game Crafter</b>. You can also download and print out your own cards from the <a href="CAI_Identiverse_2019.pdf">PDF version for 2019</a> and the <a href="CAI_Identiverse_2020.pdf">PDF version for 2020</a>. Note that neither of these options contain the base game of Cards Against Humanity and that's not our problem.
      	</p>
      </Columns.Column>
      <Columns.Column size="one-fifth">
          <Card>
            <Card.Image src={cards} alt="Cards Against Identity" />
            <Card.Content>
              <ul>
                <li>
                  <a href="https://www.thegamecrafter.com/games/cards-against-identity-2019">
                  &raquo; Buy Cards Against Identity 2019
                  </a>
                </li>
                <li>
                  <a href="https://www.thegamecrafter.com/games/cards-against-identity-2020">
                  &raquo; Buy Cards Against Identity 2020
                  </a>
                </li>
                <li>
                  &raquo; There is no Cards Against Identity 2021
                </li>
                <li>
                  <a href="https://www.thegamecrafter.com/games/cards-against-identity-2022">
                  &raquo; Buy Cards Against Identity 2022
                  </a>
                </li>
                <li>
                  <a href="https://www.thegamecrafter.com/games/cards-against-identity-2023">
                  &raquo; Buy Cards Against Identity 2023
                  </a>
                </li>
                <li>
                  <a href="https://www.thegamecrafter.com/games/cards-against-identity-2024">
                  &raquo; Buy Cards Against Identity 2024
                  </a>
                </li>
                <li>
                  <a href="https://www.thegamecrafter.com/games/cards-against-identity-2025">
                  &raquo; Buy Cards Against Identity 2025
                  </a>
                </li>
              </ul>
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
