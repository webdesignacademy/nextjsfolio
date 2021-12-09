import Navigation from './Navigation';
import Footer from './Footer';

// THIS FILE IS USED IN THE _app.js FILE
// {CHILDREN} WILL PULL ALL CONTENT INSIDE EACH PAGE COMPONENT
const Layout = ({ children }) => {
	return (
		<>
			<Navigation />
			<section className='content'>{children}</section>
			<Footer />
		</>
	);
};

export default Layout;
