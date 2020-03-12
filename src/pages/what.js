import React from 'react';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Navbar } from 'react-bulma-components';

import '../components/style.scss';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import bspkLogo from '../images/bspk-sm.png';
import TabBar from '../components/tabbar';

const PageContent = () => (
  <Section>
    <h1 className="title is-hidden-desktop">What We Do</h1>

    <Content>
  
      <p>
        <b>Bespoke Engineering</b> provides consulting services specializing in usable, internet-scale security architectures. We offer a variety of services including
        <ul>
          <li>architecture review,</li>
          <li>protocol design,</li>
          <li>security analysis,</li>
          <li>seminars,</li>
          <li>standards alignment, and</li>
          <li>system implementation.</li>
        </ul>
      </p>
  
      <p>
        Rooted in engineering principles, we offer deliverables in the form of whitepapers, presentations, source code, and deployed systems. Not content to just speculate on what could be, we strive to make it happen. We believe in <b>solid system design</b> and <b>running code</b>, and we stand by the power of <b>open standards</b> and <b>open source software</b>.
      </p>
  
      <p>
        Please <Link to="/contact/">contact us</Link> for rates and availability.
      </p>
  
    </Content>
  </Section>
);

const Page = () => (
	<div>
		<Helmet />
    <TabBar />
		<PageContent />
		<Footer />
	</div>
);

export default Page;
