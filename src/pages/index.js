import React from 'react';

import '../components/style.scss';
import Helmet from '../components/helmet';
import Main from '../components/main';
import Footer from '../components/footer';

const IndexPage = () => (
	<div>
		<Helmet />
		<Main />
		<Footer />
	</div>
);

export default IndexPage;
