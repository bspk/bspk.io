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
    <h1 className="title is-hidden-desktop">Who We Are</h1>
  
    <Content>
  
    <p>
      <b>Bespoke Engineering, LLC</b> is an independent consultancy based in Boston, MA, USA specializing in internet securirty and identity.
    </p>
  
    <p>
      Founder and Principal Architect <b>Justin Richer</b> brings two decades of industry experience in security, identity, architecture, standards, design, and collaboration. Justin is a respected contributor to a variety of standards, specifications, and software projects and routinely speaks at industry conferences around the world. In particular, Justin has contributed significantly to <b>OAuth 2</b> and <b>OpenID Connect</b> and the ecosystem of specifications around them.
    </p>
  
    <p>
      Justin's first book, <a href="http://oauthinaction.com/"><i>OAuth 2 In Action</i></a>, has been published by Manning Publications and is available in three languages around the world. <i>OAuth 2 In Action</i> has received overwhelmingly positive reviews and remains the go-to reference for OAuth 2. Justin was also the lead editor for the OAuth 2 extensions for Dynamic Client Registration (<a href="https://tools.ietf.org/html/rfc7591">RFC7591</a> and <a href="https://tools.ietf.org/html/rfc7592">RFC7592</a>) and Token Introspection (<a href="https://tools.ietf.org/html/rfc7662">RFC7662</a>). Justin was also the lead author of Vectors of Trust (<a href="https://tools.ietf.org/html/rfc8485">RFC8485</a>). Justin also contributed to <a href="https://pages.nist.gov/800-63-3/">NIST Special Publication 800-63-3</a> and in particular was the lead author for SP 800-63C, <a href="https://pages.nist.gov/800-63-3/sp800-63c.html">Digital Identity Guidelines: Federation and Assertions</a>. Justin also served as an editor for the <a href="https://docs.kantarainitiative.org/uma/wg/rec-oauth-uma-grant-2.0.html">User Managed Access 2</a> specification and the suite of healthcare security profiles known as <a href="https://openid.bitbucket.io/HEART/">HEART</a>.
    </p>
      
    <p>
      Justin's <a href="https://medium.com/@justinsecurity">security blog</a> is updated occasionally on a variety of relevant topics.
    </p>

    <p>
      We have many years of experience working with a variety of team configurations in companies and organizations around the world. And for those times when we need to bring even more expertise, we have ongoing contacts with a variety of different engineers, designers, and specialists that we can bring to bear on different problems, providing flexibility and expertise to meet the most demanding project challenges. 
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
