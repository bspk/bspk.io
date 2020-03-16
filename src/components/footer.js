import React from 'react';
import { FaTwitter, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';
import Contact from './formspring';
import { Link } from 'gatsby';


const Footer = () => {
    return (
  			<footer className="footer center has-background-light">
  				<div className="content has-text-centered">
  					<article className="media center">
  						<span className="icon">
  							<a href='https://twitter.com/bspkio'>
  								<FaTwitter size="1.2em" color="blue" />
  							</a>
  						</span>
  						&nbsp;
  						<span className="icon">
  							<a href='https://github.com/bspk'>
  								<FaGithub size="1.2em" color="black" />
  							</a>
  						</span>
  						&nbsp;
  						<span className="icon">
  							<a href='https://medium.com/@justinsecurity'>
  								<FaMedium size="1.2em" color="green" />
  							</a>
  						</span>
  						&nbsp;
              <span className="icon">
                <Link to="/contact/">
                  <FaEnvelope size="1.2em" color="orange" />
                </Link>
              </span>
  					</article>
  				</div>
  			</footer>
    );
}

export default Footer;
