import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {ThemeProvider, createTheme} from "@material-ui/core/styles";
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Invoices from "./pages/services/Invoices";
import Purchasing from "./pages/services/Purchasing";
import Pricing from "./pages/info/Pricing";
import Inventory from "./pages/services/Inventory";
import Contact from "./pages/info/Contact";
import Ordering from "./pages/services/Ordering";
import Help from "./pages/info/Help";

const colors = {
	green: "#19965b",
	greenLight: "#3fca89",
	blue: "#2671e3",
	royalBlue: "#6468e5",
	white: "#ffffff",
	purple: "#7c69ef",
	purpleDark: "#6261b1",
	greyBlue: "#506690",
	red: "#df4759"
}

const theme = createTheme({
	typography: {
		fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,sans-serif",
		textTransform: "none",
		button: {
			textTransform: "none",
		},
	},
	palette: {
		text: {
			primary: '#161c2d',
			green: colors.green,
			'green-light': colors.green,
			blue: colors.blue,
			'royal-blue': colors.royalBlue,
			white: colors.white,
			purple: colors.purple,
			"purple-dark": colors.purpleDark,
			"grey-blue": colors.greyBlue,
			danger: colors.red
		},
		green: {
			main: colors.green,
			light: colors.greenLight,
			contrastText: colors.white,
		},
		'green-light': {
			main: colors.greenLight,
			contrastText: colors.white,
		},
		blue: {
			main: colors.blue,
			contrastText: colors.white,
		},
		'royal-blue': {
			main: colors.royalBlue,
			contrastText: colors.white,
		},
		white: {
			main: colors.white
		},
		purple: {
			main: colors.purple,
			contrastText: colors.white,
			dark: colors.purpleDark,
		},
		danger: {
			main: colors.red,
			contrastText: colors.white,
		},
	},
	components: {
		MuiTypography: {
			textAlign: "left"
		},
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					fontSize: '14px'
				},
				body: {
					color: '#161c2d',
					overflowX: 'hidden'
				},
				".start-container": {
					paddingTop: '48px'
				},
				".text-white": {
					color: colors.white
				},
				'.custom-icon svg': {
					height: '3rem',
					width: '3rem'
				},
				".custom-icon[class*='text-'] > svg [fill]:not([fill='none'])": {
					fill: "currentColor !important"
				}
			},
		},
	}
	
});

function ScrollToTop() {
	const {pathname} = useLocation();
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
	return null;
}

function App() {
	
	useEffect(() => {
		AOS.init({
			duration: 2000
		});
		AOS.refresh();
	}, []);
	return (
			<BrowserRouter>
				<div className="App">
					<ScrollToTop/>
					<ThemeProvider theme={theme}>
						<Header/>
						<main>
							<Switch>
								<Route exact path="/" component={Welcome}/>
								<Route exact path="/services/invoices" component={Invoices}/>
								<Route exact path="/services/purchasing" component={Purchasing}/>
								<Route exact path="/services/inventory" component={Inventory}/>
								<Route exact path="/services/ordering" component={Ordering}/>
								<Route exact path="/info/pricing" component={Pricing}/>
								<Route exact path="/info/help" component={Help}/>
								<Route exact path="/info/contact" component={Contact}/>
							</Switch>
						</main>
						<Footer/>
					</ThemeProvider>
				</div>
			</BrowserRouter>
	);
}

export default App;
