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
    <h1 className="title is-hidden-desktop">Our Projects</h1>

    <Content>
  
      <p>
        <b>Bespoke Engineering</b> has a variety of ongoing projects with many different clients. This list is in no way exhaustive, but it should serve to showcase some of the things we work on.
      </p>
  
      <p>
        <a href="https://oauth.xyz/">XYZ</a> is a next-generation authorization protocol designed to pick up where OAuth 2.0 leaves off. The ideas in this project are being discussed in the <a href="https://www.ietf.org/mailman/listinfo/txauth">TxAuth</a> mailing list in the IETF and could lead to a future security standard.
      </p>
      
      <p>
        Bespoke Engineering regularly contributes to working groups including the <a href="https://www.w3.org/2019/did-wg/">Distributed Identifier Working Group</a> and the <a href="https://datatracker.ietf.org/wg/oauth/">OAuth Working Group</a>, among many others.
      </p>
  
      <p>
        <a href="https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server/">MITREid Connect</a> is a stable reference implementation of OAuth 2.0 and OpenID Connect written in Java. Originally developed by the MITRE Corporation and the MIT Trust Consoritum, MITREid Connect is now maintained as needed by Bespoke Engineering. 
      </p>
      
      <p>
        <a href="https://www.authlete.com/">Authlete</a> is a commercial semi-hosted OAuth 2.0 and OpenID Connect implementation which Bespoke Engineering has contributed many pieces of functionality to, including implementations for MTLS, Dynamic Client Registration, and DPoP. 
      </p>
      
      <p>
        <a href="https://gitlab.com/openid/conformance-suite/">The OpenID Foundation's Conformance Suite</a> is a unique test suite that allows for the programmatic testing of multi-party networking protocols. Bespoke Engineering designed and developed the original project and contributed it to the OIDF for further development and deployment.
      </p>
      
      <p>
        Bespoke Engineering's <Link to="/games/">gaming division</Link> has also developed and published several board games.
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
