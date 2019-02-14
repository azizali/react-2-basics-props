import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Wrapper from './Wrapper';
import Main from './Main';
import Footer from './Footer';

function App() {
	return (
		<div className="container">
			<Header />
			<Wrapper type="dark">
				<Main />
			</Wrapper>
			<Footer />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('body'));
