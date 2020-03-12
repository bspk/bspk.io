import React from 'react';
import { Link } from 'gatsby';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Navbar } from 'react-bulma-components';

import '../components/style.scss';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import bspkLogo from '../images/bspk-sm.png';
import TabBar from '../components/tabbar';
import Contact from '../components/formspring'

const PageContent = () => (
  <Section>
    <h1 className="title is-hidden-desktop">Get In Touch</h1>

    <Content>
      <Contact />
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
