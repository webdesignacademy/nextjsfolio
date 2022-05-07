import Layout from '../components/Layout';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
//ROBOTO FONT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '../styles/globals.css';
// MATERIAL UI THEME
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#1da1f2',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#455a64',
		},
		text: {
			primary: '#414141',
			secondary: '#565656',
		},
		divider: 'rgba(0,0,0,0.05)',
	},
	typography: {
		fontWeightLight: 100,
		fontWeightRegular: 300,
		fontWeightMedium: 500,
		fontWeightBold: 900,
		subtitle1: {
			fontSize: '2.3rem',
			fontWeight: 100,
			lineHeight: 1.2,
		},
		subtitle2: {
			fontSize: '1.8rem',
			fontWeight: 100,
			lineHeight: 1.2,
		},
		h5: {
			fontSize: '1.5rem',
			fontWeight: 100,
			lineHeight: 1.2,
		},
		body1: {
			letterSpacing: '0.01em',
		},
		body2: {
			fontSize: '1.05rem',
			letterSpacing: '0em',
		},
		button: {
			fontWeight: 300,
		},
	},
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
