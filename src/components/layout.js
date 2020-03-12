import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Main from './main';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Main />
		<Footer />
	</div>
);

export default Layout;
