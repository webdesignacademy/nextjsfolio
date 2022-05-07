import Head from 'next/head';
import Image from 'next/image';
import Card from '@mui/material/Card';
import cardImage from '../public/images/img1.jpg';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useEffect } from 'react';
import { Container, Typography, Grid, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

export default function Home() {
	// GET MOUSE POSITION FOR IMAGE HOVER WITH CSS MASK
	useEffect(() => {
		let pos = document.documentElement;
		pos.addEventListener('mousemove', (e) => {
			pos.style.setProperty('--x', e.clientX + 'px');
			pos.style.setProperty('--y', e.clientY - 40 + 'px');
		});
	});
	return (
		<>
			<Head>
				<title>
					Welcome | Brian Wiltshire Portfolio | Front and Back end Developer |
					UI/UX Designer
				</title>
				<meta
					name='description'
					content='This is the portfolio of Brian Wiltshire. Frontend Developer with a knack for design and backend integration skills'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				<section className='bannercontainer'>
					<section className='overlay'></section>
					<section className='banner'></section>
				</section>
				<Container component='section' fixed>
					{/* <Typography variant='h1' component='h1' mb={1}>
					Welcome
				</Typography> */}
					<Typography variant='subtitle1' component='h2' mb={3} align='center'>
						My name is Brian Wiltshire. I am a full stack software engineer.
						<br />I love working with all web technologies.
					</Typography>

					<Grid container columns={12} spacing={3} rowSpacing={3} my={3}>
						<Grid item sm={12} md={6} lg={3}>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 500, transition: 1 }}
							>
								<Card>
									<CardActionArea>
										<Image src={cardImage} alt='Travel Image' />
										<CardContent>
											<Typography gutterBottom variant='h5' component='h5'>
												Front End
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Lizards are a widespread group of squamate reptiles,
												with over 6,000 species, ranging across all continents
												except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</motion.div>
						</Grid>

						<Grid item sm={12} md={6} lg={3}>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 500, transition: 1 }}
							>
								<Card>
									<CardActionArea>
										<CardMedia
											component='img'
											image='./images/img2.jpg'
											alt='Travel Image'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h5'>
												Back End
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Lizards are a widespread group of squamate reptiles,
												with over 6,000 species, ranging across all continents
												except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</motion.div>
						</Grid>

						<Grid item sm={12} md={6} lg={3}>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 500, transition: 1 }}
							>
								<Card>
									<CardActionArea>
										<CardMedia
											component='img'
											image='./images/img1.jpg'
											alt='Travel Image'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h5'>
												Design
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Lizards are a widespread group of squamate reptiles,
												with over 6,000 species, ranging across all continents
												except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</motion.div>
						</Grid>

						<Grid item sm={12} md={6} lg={3}>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 500, transition: 1 }}
							>
								<Card>
									<CardActionArea>
										<CardMedia
											component='img'
											image='./images/img3.jpg'
											alt='Travel Image'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h5'>
												Optimisation
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Lizards are a widespread group of squamate reptiles,
												with over 6,000 species, ranging across all continents
												except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</motion.div>
						</Grid>
					</Grid>

					<Typography variant='subtitle2' component='h3' mb={3}>
						I have 15+ years experience in Front and Back end Development, Web &
						Graphic Design, Social & Search Marketing including Search
						Optimisation. I am the founder of Web Design Academy where I have
						been teaching on all of these subjects for the last 9 years.
					</Typography>
					<Typography variant='h5' component='h5' mb={3}>
						I have a high proficiency in HTML 5 and CSS3, JavaScript, WordPress,
						PHP and MySQL. I also love working with React and Next JS. You can
						view my full tech stack on the about page.
					</Typography>
				</Container>
			</motion.div>
		</>
	);
}
