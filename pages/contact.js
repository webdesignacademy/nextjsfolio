//import * as React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
//import emailjs from 'emailjs-com';
// MUI COMPONENTS IMPORTS
import {
	Container,
	Typography,
	Grid,
	CardActionArea,
	TextField,
	Divider,
	FormControl,
	MenuItem,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { AccessAlarm } from '@mui/icons-material';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
export default function Contact() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				form.current,
				'YOUR_USER_ID'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			<Head>
				<title>
					Contact Brian Wiltshire | Frontend Developer | UI/UX Designer |
					Graphic Design | Backend Developer
				</title>
				<meta
					name='description'
					content='This is the portfolio of Brian Wiltshire. Frontend Developer with a knack for design and backend integration skills'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Container component='section' fixed>
				<Typography variant='h1' component='h1' mb={3}>
					Get in Touch
				</Typography>

				<Box sx={{ width: '100%' }} mb={5}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='basic tabs example'
						>
							<Tab label='Item One' {...a11yProps(0)} />
							<Tab label='Item Two' {...a11yProps(1)} />
							<Tab label='Item Three' {...a11yProps(2)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						Item One
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2}>
						<AccessAlarm fontSize='large' />
					</TabPanel>
				</Box>

				<Divider />

				<Typography variant='h5' compnent='h5' mt={5}>
					Send a message
				</Typography>
				<form className='form'>
					<FormControl mb={3}>
						<TextField id='name' label='Your Name' variant='standard' />
					</FormControl>
					<FormControl mb={3}>
						<TextField id='email' label='Your Email' variant='standard' />
					</FormControl>
					<FormControl mb={3}>
						<TextField id='phone' label='Contact Number' variant='standard' />
					</FormControl>
					<TextField id='select' label='Age' value='20' select>
						<MenuItem value='10'>Ten</MenuItem>
						<MenuItem value='20'>Twenty</MenuItem>
					</TextField>
				</form>

				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type='text' name='user_name' />
					<label>Email</label>
					<input type='email' name='user_email' />
					<label>Message</label>
					<textarea name='message' />
					<input type='submit' value='Send' />
				</form>

				<Typography variant='subtitle1' component='h3' mb={3}>
					Develop a good programming intuition (work on problem-solving skills).
					Study algorithms and <strong>data structures</strong>. Learn at least
					the basics of complexity theory. Implement your solutions using
					pseudo-code first. Learn the syntax of any programming language.
				</Typography>
				<Typography variant='subtitle2' component='h4' mb={3}>
					Develop a good programming intuition (work on problem-solving skills).
					Study algorithms and data structures. Learn at least the basics of
					complexity theory. Implement your solutions using pseudo-code first.
					Learn the syntax of any programming language.
				</Typography>

				<Grid container columns={12} spacing={3} rowSpacing={3} mb={3}>
					<Grid item sm={12} md={6} lg={4}>
						<Typography variant='body' component='p'>
							Develop a good programming intuition (work on problem-solving
							skills). Study algorithms and data structures. Learn at least the
							basics of complexity theory. Implement your solutions using
							pseudo-code first. Learn the syntax of any programming language.
						</Typography>
					</Grid>

					<Grid item sm={12} md={6} lg={4}>
						<Typography variant='body' component='p'>
							Develop a good programming intuition (work on problem-solving
							skills). Study algorithms and data structures. Learn at least the
							basics of complexity theory. Implement your solutions using
							pseudo-code first. Learn the syntax of any programming language.
						</Typography>
					</Grid>

					<Grid item sm={12} md={12} lg={4}>
						<Typography variant='body' component='p'>
							Develop a good programming intuition (work on problem-solving
							skills). Study algorithms and data structures. Learn at least the
							basics of complexity theory. Implement your solutions using
							pseudo-code first. Learn the syntax of any programming language.
						</Typography>
					</Grid>
				</Grid>

				<Grid container columns={12} spacing={3} rowSpacing={3} mb={3}>
					<Grid item sm={12} md={6} lg={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component='img'
									image='./images/img1.jpg'
									alt='Travel Image'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h5'>
										Lizard
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>

					<Grid item sm={12} md={6} lg={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component='img'
									image='./images/img2.jpg'
									alt='Travel Image'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h5'>
										Lizard
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>

					<Grid item sm={12} md={12} lg={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component='img'
									image='./images/img3.jpg'
									alt='Travel Image'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h5'>
										Lizard
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>

				<Typography variant='subtitle1' component='h4' mb={3}>
					Develop a good programming intuition (work on problem-solving skills).
					Study algorithms and data structures. Learn at least the basics of
					complexity theory. Implement your solutions using pseudo-code first.
				</Typography>

				<Typography variant='button' component='p' mb={3}>
					Develop a good programming intuition (work on problem-solving skills).
					Study algorithms and data structures.
				</Typography>

				<Typography variant='body2' component='p'>
					Develop a good programming intuition (work on problem-solving skills).
					Study algorithms and data structures. Learn at least the basics of
					complexity theory. Implement your solutions using pseudo-code first.
					Learn the syntax of any programming language. CSS ANIMATIONS CSS
					FRAMEWORK ATOMX WP THEME TEXT GENERATOR WITH TEXT ARRAY ... SPREAD
					OPERATOR rand() AND function(repeat($text,60)) JS FILTER - LOCAL
					STORAGE WEATHER FACE DETECTION SKELETON CSS LOADER CSS ANIMATIONS -
					KEYFRAMES JQUERY ALL FUNCTIONALITY INCLUDING AJAX HTML / CSS3 FRONTEND
					- PHP SAVE TO JSON - CONSUME JSON WITH NEXT WORDPRESS HEADLESS - WITH
					NEXT FRONTEND PHP DATABASE - OBJECT (BIDFIND) BASIC REACT APP GIT
					SOCIALS TO LINKEDIN - GITHUB - STACKSHARE - STACK OVEFLOW TOOLS USED
					SPREAD (LIKE STACKSHARE) MOVIE APP REST API - STRAPI - APP ONBOARDING
					APP DASHBOARD DESIGN MATERIAL, BOOTSTRAP, GRAPHIC DESIGN UI / IX
					DESIGN LIST OF PROJECTS Æ BIDFIND Æ BIDFIND Æ BIDFIND Æ BIDFIND Æ
					BIDFIND CLIENTS
				</Typography>
			</Container>
		</>
	);
}
