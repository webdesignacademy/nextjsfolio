import Head from 'next/head';
import Image from 'next/image';
//IMPORT IMAGES
import aboutBrain from '../public/images/brian-wiltshire-full-stack.jpg';
import fullStack from '../public/images/fullstack.gif';
import banner1 from '../public/images/banners/about-banner.jpg';
import banner2 from '../public/images/banners/about-banner2.jpg';
import banner3 from '../public/images/banners/about-banner3.jpg';

import { motion } from 'framer-motion';
import { Grid, Typography, Container, Divider } from '@mui/material';
import { AccessAlarm, AttachFile } from '@mui/icons-material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// This function gets called at build time
export const getStaticProps = async () => {
	// Call an external API endpoint to get posts
	const getPosts = await fetch('http://localhost/reactwp/wp-json/wp/v2/posts');
	const posts = await getPosts.json();

	// By returning { props: { posts } }, the About component
	// will receive `posts` as a prop at build time
	return {
		props: {
			//posts: posts,
			posts,
		},
	};
};

export default function About({ posts }) {
	return (
		<>
			<Head>
				<title>
					About Brian Wiltshire | Frontend Developer | UI/UX Designer | Graphic
					Design | Backend Developer
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
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay
					loop
					//navigation={{ clickable: true }}
					pagination={{ clickable: true }}
					// onSlideChange={() => console.log('slide change')}
					// onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<Image
							src={banner1}
							alt='Brian Wiltshire Full Stack Developer Portfolio'
							quality='80'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={banner2}
							alt='Brian Wiltshire Front Developer Portfolio'
							quality='80'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={banner3}
							alt='Brian Wiltshire Web Designer Portfolio'
							quality='80'
						/>
					</SwiperSlide>
				</Swiper>
				<Container component='section' fixed>
					{/* <motion.div
						initial='hidden'
						animate='visible'
						variants={{
							hidden: {
								scale: 0,
								opacity: 0,
							},
							visible: {
								scale: [0, 1.5, 0.5, 1.2, 0.8, 1],
								opacity: 1,
								transition: {
									delay: 0.3,
									duration: 2,
									type: 'spring',
									stiffness: 50,
								},
							},
						}}
					>
						<Typography variant='h1' component='h1' mt={3} mb={3}>
							Who is this is ?
						</Typography>
					</motion.div> */}
					<motion.div
						whileHover={{ scale: 1.2, textShadow: '0 0 3px #000' }}
						transition={{ type: 'spring', stiffness: 500, transition: 1 }}
					>
						<Typography variant='subtitle1' component='h2' mb={3} mt={5}>
							My name is Brian Wiltshire. I am a full stack engineer.
							<br />I love working with all web technologies.
						</Typography>
					</motion.div>

					<Typography variant='h5' component='h3' mb={5}>
						I have 15+ years experience in Development, Web & Graphic Design,
						Social & Search Marketing including Search Optimisation. I am the
						founder of{' '}
						<a
							href='https://www.webdesignacademy.co.za'
							target='_blank'
							title='Web Design Courses South Africa'
						>
							Web Design Academy
						</a>{' '}
						where I have been teaching on all of these subjects for the past 9
						years.
					</Typography>
				</Container>

				<Divider />

				<Container component='section' fixed>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
						<Grid item sm={12} md={6}>
							<Typography
								component='p'
								variant='subtitle1'
								title='About Brian Wiltshire'
							>
								A little bit of history <AttachFile />
							</Typography>
							<Typography component='h4' variant='h5' mt={4}>
								I believe in creating experiences, not just aesthetics. It's
								about bringing together design, motion, imagery, and code to
								create something that evokes emotion.
							</Typography>
							<Typography component='h4' variant='h6' mt={4}>
								A good website should load fast, be easy to use, have clear call
								to actions and be concise with well written content. It should
								also be optimised for search and secure. I have the skills to
								create all of this by using all the tools below.
							</Typography>
						</Grid>
						<Grid item sm={12} md={6}>
							<Image
								className='hidemobile'
								src={aboutBrain}
								alt='Brian Wiltshire Front Developer Portfolio'
								quality='100'
							/>
						</Grid>
					</Grid>
				</Container>

				<section className='parallax business'>
					<Typography
						component='h3'
						variant='subtitle1'
						className='white'
						title='Brian Wiltshire Introduction'
					>
						THE SHORT OF IT ALL
					</Typography>
					<Typography
						component='h5'
						variant='h5'
						className='white'
						title='The Portfolio of Brian Wiltshire'
					>
						Below is a brief explanation of my 15+ years. <br />
						Skip this section to my tech stack instead.
					</Typography>
				</section>

				<Container component='section' fixed>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
						<Grid item sm={12} md={6}>
							<Image
								className='hidemobile'
								src={aboutBrain}
								alt='Brian Wiltshire Front Developer Portfolio'
								quality='100'
							/>
						</Grid>
						<Grid item sm={12} md={6}>
							<Typography variant='h5' component='h5'>
								In the beginning
							</Typography>
							<Typography component='p' mt={3}>
								I initially started my career in 2003 by taking a Flash
								Animation course in London, UK. For the next few years I
								developed advanced Flash websites where I won multiple design
								and animation awards. I also became one of the top sellers on
								Envato Flash Den, selling Flash animations and components. I
								initially developed full flash websites with a PHP backend,
								branded micro sites and animations. Flash instilled a massive
								love for design which I kept in my arsenal all the way through
								my career. I still use Adobe Animate for 2D Animations and
								Offline Presentations.
							</Typography>
							<Typography variant='h5' component='h5' mt={3}>
								Enter HTML and CSS
							</Typography>
							<Typography component='p' mt={3}>
								I started creating mixed media websites in 2006. This is when I
								really started learning HTML and CSS with a mixture of Flash
								components throughout the website. In those days Flash was very
								well supported in all browsers and I was still earning more
								recognition for Flash work than HTML and CSS. It was in 2007 /
								2008 when I started using HTML and CSS more for corporate type
								websites. I am now fully versed in HTML5 and CSS3 with full
								confidence in creating anything anyone asks of me. I also
								developed and teach two of the best ranked HTML and CSS courses
								in South Africa via Web Design Academy.
							</Typography>
						</Grid>
					</Grid>
				</Container>

				<Container component='section' fixed>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
						<Grid item sm={12} md={6}>
							<Typography variant='h5' component='h5' mt={3}>
								WordPress and eCommerce
							</Typography>
							<Typography component='p' mt={3}>
								I started using WordPress in 2009 initially for for blogging. I
								soon fell in love with WordPress and for the past 9 years I have
								developed custom WordPress websites for Memberhips, eCommerce,
								Blogging, News, Social Networks, Support Portals and many more.
								I am now an advanced WordPress developer that can create any
								custom Theme or Plugin my clients require. I have full
								confidence in using WordPress for any type of website. I am also
								an avid user of WooCommerce and over the past few years
								developed amazingly successful eCommerce solutions. With the
								rise of JavaScript and API's I now use React and NextJS with
								WordPress as a headless CMS exposing the content with GraphQL. I
								developed a best selling WordPress Theme with advanced
								customizer functionality and Gutenberg Templates. I have been
								teaching WordPress courses for the last 8 years and rated one of
								the best short courses in South Africa.
							</Typography>
							<Typography variant='h5' component='h5' mt={3}>
								PHP and MySQL
							</Typography>
							<Typography component='p' mt={3}>
								I have been using basic PHP since my early days in Flash. I am
								now fully confident in using PHP and MySQL to develop dynamic
								database driven applications. I love using all of these
								technologies together to create full stack applications. For the
								last couple of years I moved more towards Jamstack solutions
								with JavaScript and NoSQL as the main focus.
							</Typography>
						</Grid>
						<Grid item sm={12} md={6}>
							<Image
								className='hidemobile'
								src={aboutBrain}
								alt='Brian Wiltshire Front Developer Portfolio'
								quality='100'
							/>
						</Grid>
					</Grid>
				</Container>

				<Container component='section' fixed>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
						<Grid item sm={12} md={6}>
							<Image
								className='hidemobile'
								src={aboutBrain}
								alt='Brian Wiltshire Front Developer Portfolio'
								quality='100'
							/>
						</Grid>
						<Grid item sm={12} md={6}>
							<Typography variant='h5' component='h5' mt={3}>
								JavaScript, NoSQL and NPM
							</Typography>
							<Typography component='p' mt={3}>
								I started using JavaScript in my websites since 2009. Initially
								I used it for adding UI elements and DOM manipulations with
								events. I am very comfortable using jQuery including jQuery
								Mobile and jQuery UI. These days I use vanilla JavaScript more
								and more especially with NPM packages like React, Next JS, Node
								JS, Vue JS etc.
							</Typography>
						</Grid>
					</Grid>
				</Container>

				<Container component='section' fixed>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
						<Grid item sm={12} md={6}>
							<Typography variant='h5' component='h5' mt={3}>
								Website Management and Versioning
							</Typography>
							<Typography component='p' mt={3}>
								I've used many different FTP solutions and understand file
								management completely. I use Git and GitHub for version control
								and comfortable with git CLI.
							</Typography>
							<Typography variant='h5' component='h5' mt={3}>
								Social Media and Search Marketing
							</Typography>
							<Typography component='p' mt={3}>
								I am very well versed in Search Engine Optimisation techniques
								and know the importance of having a well optimised website. SEO
								has been a very strong focus point for me over the last few
								years. I know the techniques required for on-site optimisation
								to off-site optimisation and beyond. I also know how to
								integrate most popular social networks and I teach introduction
								level courses on both subjects.
							</Typography>
						</Grid>

						<Grid item sm={12} md={6}>
							<Image
								className='hidemobile'
								src={aboutBrain}
								alt='Brian Wiltshire Front Developer Portfolio'
								quality='100'
							/>
						</Grid>
					</Grid>
				</Container>

				<Container component='section' fixed>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
						<Grid item sm={12} md={6}>
							<Image
								className='hidemobile'
								src={aboutBrain}
								alt='Brian Wiltshire Front Developer Portfolio'
								quality='80'
							/>
						</Grid>
						<Grid item sm={12} md={6}>
							<Typography variant='h5' component='h5' mt={3}>
								Graphic Design, Image Optimisation and Video
							</Typography>
							<Typography component='p' mt={3}>
								Since my early days in Flash I love working with graphics. I am
								an advance user of Adobe Illustrator, Fireworks and Photoshop
								for both web and print designs. I am very comfortable in
								creating all graphic requirements for any website project
								including logo design, stationery and complete official branding
								guides. I also play around with video editing and production and
								created many brand related videos using stock and original
								footage.
							</Typography>

							<Typography variant='h5' component='h5' mt={3}>
								Frameworks
							</Typography>
							<Typography component='p' mt={3}>
								I have used many different libraries and frameworks for all
								types of app requirements. Below is a list of the frameworks,
								applications and tech stacks I use on a regular basis.
							</Typography>
						</Grid>
					</Grid>
				</Container>

				<section className='parallax desk'>
					<Typography
						component='h3'
						variant='subtitle1'
						className='white'
						title='Brian Wiltshire Introduction'
					>
						THE SHORT OF IT ALL
					</Typography>
					<Typography
						component='h5'
						variant='h5'
						className='white'
						title='The Portfolio of Brian Wiltshire'
					>
						Below is a brief explanation of my 15+ years. <br />
						Skip this section to my tech stack instead.
					</Typography>
				</section>

				<section className='darkbg'>
					<Container component='section' fixed>
						<Typography variant='h6' component='h4' mt={2} className='white'>
							Code
						</Typography>

						<Grid
							container
							columns={16}
							spacing={3}
							rowSpacing={3}
							my={3}
							className='center white'
						>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/html5.gif'
									alt='HTML 5'
									className='stackImg'
								/>
								HTML5
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/css3.gif'
									alt='CSS 3'
									className='stackImg'
								/>
								CSS3
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/js.gif'
									alt='JavaScript'
									className='stackImg'
								/>
								JavaScript
							</Grid>

							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/php.gif'
									alt='PHP'
									className='stackImg'
								/>
								PHP
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/python.gif'
									alt='Python'
									className='stackImg'
								/>
								Python
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/graphql.gif'
									alt='GraphQL'
									className='stackImg'
								/>
								GraphQL
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/sass.gif'
									alt='Sass'
									className='stackImg'
								/>
								Sass
							</Grid>
						</Grid>
					</Container>
				</section>

				<section className='lightbg2'>
					<Container component='section' fixed>
						<Typography variant='h6' component='h6' mt={2}>
							Frameworks and Libraries
						</Typography>

						<Grid
							container
							columns={16}
							spacing={3}
							rowSpacing={3}
							my={3}
							className='center'
						>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/reactjs.gif'
									alt='React JS'
									className='stackImg'
								/>
								<span>React</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/nextjs.gif'
									alt='Next JS'
									className='stackImg'
								/>
								<span>Next JS</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/node.gif'
									alt='Node JS'
									className='stackImg'
								/>
								<span>Node JS</span>
							</Grid>

							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/express.gif'
									alt='Express JS'
									className='stackImg'
								/>
								<span>Express JS</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/mongoose.gif'
									alt='Mongoose JS'
									className='stackImg'
								/>
								<span>Mongoose</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/materialui.gif'
									alt='Material UI'
									className='stackImg'
								/>
								<span>Material UI</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/framermotion.gif'
									alt='Framer Motion'
									className='stackImg'
								/>
								<span>Framer Motion</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/tailwindcss.gif'
									alt='Tailwind CSS'
									className='stackImg'
								/>
								<span>Tailwind CSS</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/bootstrap.gif'
									alt='Twitter Bootstrap'
									className='stackImg'
								/>
								<span>Bootstrap</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/wordpress.gif'
									alt='WordPress'
									className='stackImg'
								/>
								<span>WordPress</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/woo.gif'
									alt='WooCommerce'
									className='stackImg'
								/>
								<span>WooCommerce</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/django.gif'
									alt='Django'
									className='stackImg'
								/>
								<span>Django</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/flask.gif'
									alt='Flask'
									className='stackImg'
								/>
								<span>Flask</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/jquery.gif'
									alt='jQuery'
									className='stackImg'
								/>
								<span>jQuery</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/jquerymobile.gif'
									alt='jQuery Mobile'
									className='stackImg'
								/>
								<span>jQuery Mobile</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/modernizr.gif'
									alt='Modernizr'
									className='stackImg'
								/>
								<span> Modernizr</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/animatecss.gif'
									alt='Animate CSS'
									className='stackImg'
								/>
								<span> Animate CSS</span>
							</Grid>
						</Grid>
					</Container>
				</section>

				<section className='lightbg3'>
					<Container component='section' fixed>
						<Typography variant='h6' component='h6' mt={2}>
							Database
						</Typography>

						<Grid
							container
							columns={16}
							spacing={3}
							rowSpacing={3}
							my={3}
							className='center'
						>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/mysqli.gif'
									alt='MySQLi'
									className='stackImg'
								/>
								<span>MySQL</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/mongodb.gif'
									alt='mongoDB'
									className='stackImg'
								/>
								<span>mongoDB</span>
							</Grid>
						</Grid>
					</Container>
				</section>

				<section className='lightbg4'>
					<Container component='section' fixed>
						<Typography variant='h6' component='h6' mt={2}>
							Dev Ops
						</Typography>

						<Grid
							container
							columns={16}
							spacing={3}
							rowSpacing={3}
							my={3}
							className='center'
						>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/npm.gif'
									alt='NPM'
									className='stackImg'
								/>
								<span>NPM</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/git.gif'
									alt='Git'
									className='stackImg'
								/>
								<span>Git</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/github.gif'
									alt='Git'
									className='stackImg'
								/>
								<span>GitHub</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/cloudflare.gif'
									alt='CloudFlare'
									className='stackImg'
								/>
								<span>CloudFlare</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/firebase.gif'
									alt='CloudFlare'
									className='stackImg'
								/>
								<span>Firebase</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/vercel.gif'
									alt='CloudFlare'
									className='stackImg'
								/>
								<span>Vercel</span>
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/heroku.gif'
									alt='Heroku'
									className='stackImg'
								/>
								<span>Heroku</span>
							</Grid>
						</Grid>
					</Container>
				</section>

				<section className='lightbg5'>
					<Container component='section' fixed>
						<Typography variant='h6' component='h6' mt={2}>
							Apps
						</Typography>
						<Grid
							container
							columns={16}
							spacing={3}
							rowSpacing={3}
							my={3}
							className='center'
						>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/illustrator.gif'
									alt='Adobe Illustrator'
									className='stackImg'
								/>
								Illustrator
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/fireworks.gif'
									alt='Adobe Fireworks'
									className='stackImg'
								/>
								Fireworks
							</Grid>

							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/dreamweaver.gif'
									alt='Adobe Dreamweaver'
									className='stackImg'
								/>
								Dreamweaver
							</Grid>
							<Grid item xs={4} sm={4} md={2}>
								<img
									src='/images/stack/visualstudio.gif'
									alt='Visual Studio Code'
									className='stackImg'
								/>
								V S Code
							</Grid>
						</Grid>
					</Container>
				</section>

				<Container component='section' fixed>
					<Typography variant='h2' component='h2' align='center' mt={4}>
						My Tech Stack and Toolkit
					</Typography>

					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={50}
						slidesPerView={2}
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<Typography component='h6' variant='h6' mt={4}>
								Books I really loved.
							</Typography>
							<Typography component='ul' mt={4}>
								<li>Head First JavaScript Programming</li>
								<li>Object Oriented PHP and MySQL</li>
								<li>Dont Make Me Think - UI/UX Design</li>
								<li>Responsive Web Design Techniques</li>
							</Typography>
						</SwiperSlide>
						<SwiperSlide>
							<Typography component='h6' variant='h6' mt={4}>
								Websites I Like.
							</Typography>
							<Typography component='ul' mt={4}>
								<li>www.dev.to</li>
								<li>www.stackoverflow.io</li>
								<li>www.uxmovement.com</li>
								<li>www.alistapart.com</li>
								<li>www.codepen.com</li>
								<li>www.dzone.com</li>
								<li>www.webdesignerdepot.com</li>
								<li>www.searchenginejournal.com</li>
								<li>www.hackr.io</li>
							</Typography>
						</SwiperSlide>
						<SwiperSlide>
							<Typography component='p' mt={3}>
								Think of creating a theme as a two-step composition process:
								first, you define the basic design options; then, you'll use
								these design options to compose other options or to override the
								design of specific components. The method wraps your React node
								in a provider element. It collects the style sheets during the
								rendering so they can be later sent to the client. Think of
								creating a theme as a two-step composition process
							</Typography>
						</SwiperSlide>
						<SwiperSlide>
							<Typography component='p' mt={3}>
								Think of creating a theme as a two-step composition process:
								first, you define the basic design options; then, you'll use
								these design options to compose other options or to override the
								design of specific components. The method wraps your React node
								in a provider element. It collects the style sheets during the
								rendering so they can be later sent to the client. Think of
								creating a theme as a two-step composition process
							</Typography>
						</SwiperSlide>
						.
					</Swiper>

					<Typography variant='body2' component='p'>
						Develop a good programming intuition (work on problem-solving
						skills). Study algorithms and data structures. Learn at least the
						basics of complexity theory. Implement your solutions using
						pseudo-code first. Learn the syntax of any programming language. CSS
						ANIMATIONS CSS FRAMEWORK ATOMX WP THEME TEXT GENERATOR WITH TEXT
						ARRAY ... SPREAD OPERATOR rand() AND function(repeat($text,60)) JS
						FILTER - LOCAL STORAGE WEATHER FACE DETECTION SKELETON CSS LOADER
						CSS ANIMATIONS - KEYFRAMES JQUERY ALL FUNCTIONALITY INCLUDING AJAX
						HTML / CSS3 FRONTEND - PHP SAVE TO JSON - CONSUME JSON WITH NEXT
						WORDPRESS HEADLESS - WITH NEXT FRONTEND PHP DATABASE - OBJECT
						(BIDFIND) BASIC REACT APP GIT SOCIALS TO LINKEDIN - GITHUB -
						STACKSHARE - STACK OVEFLOW TOOLS USED SPREAD (LIKE STACKSHARE) MOVIE
						APP REST API - STRAPI - APP ONBOARDING APP DASHBOARD DESIGN
						MATERIAL, BOOTSTRAP, GRAPHIC DESIGN UI / IX DESIGN LIST OF PROJECTS
						Æ BIDFIND Æ BIDFIND Æ BIDFIND Æ BIDFIND Æ BIDFIND CLIENTS
					</Typography>
					<Typography variant='h4' component='h4' mt={4}>
						<AccessAlarm fontSize='large' mr={2} /> Work Experience
					</Typography>
					<Typography variant='body2' component='p'>
						Develop a good programming intuition (work on problem-solving
						skills). Study algorithms and data structures. Learn at least the
						basics of complexity theory. Implement your solutions using
						pseudo-code first. Learn the syntax of any programming language. CSS
						ANIMATIONS CSS FRAMEWORK ATOMX WP THEME TEXT GENERATOR WITH TEXT
						ARRAY ... SPREAD OPERATOR rand() AND function(repeat($text,60)) JS
						FILTER - LOCAL STORAGE WEATHER FACE DETECTION SKELETON CSS LOADER
						CSS ANIMATIONS - KEYFRAMES JQUERY ALL FUNCTIONALITY INCLUDING AJAX
						HTML / CSS3 FRONTEND - PHP SAVE TO JSON - CONSUME JSON WITH NEXT
						WORDPRESS HEADLESS - WITH NEXT FRONTEND PHP DATABASE - OBJECT
						(BIDFIND) BASIC REACT APP GIT SOCIALS TO LINKEDIN - GITHUB -
						STACKSHARE - STACK OVEFLOW TOOLS USED SPREAD (LIKE STACKSHARE) MOVIE
						APP REST API - STRAPI - APP ONBOARDING APP DASHBOARD DESIGN
						MATERIAL, BOOTSTRAP, GRAPHIC DESIGN UI / IX DESIGN LIST OF PROJECTS
						Æ BIDFIND Æ BIDFIND Æ BIDFIND Æ BIDFIND Æ BIDFIND CLIENTS
					</Typography>
					<Typography component='subtitle2' mb={5}>
						https://github.com/webdesignacademy/nextjsfolio.git
					</Typography>
				</Container>

				<section className='darkbg'>
					<Container component='section' fixed>
						<Typography
							variant='h2'
							component='h2'
							align='center'
							color='primary'
						>
							This is a dark section
						</Typography>
						<Typography
							variant='body2'
							component='p'
							align='center'
							color='white'
						>
							Develop a good programming intuition work on problem-solving
							skills.
							<br />
							Study algorithms and data structures. Learn at least the basics of
							<br />
							complexity theory. Implement your solutions using pseudo-code
							first.
							<br />
							Learn the syntax of any programming language.
						</Typography>
					</Container>
				</section>

				<Typography mt={5}>.</Typography>

				<Container component='section' fixed>
					<section>
						<Image
							src={fullStack}
							mb={4}
							alt='Brian Wiltshire Front Developer Portfolio'
						/>
						<Typography mt={5} mb={5} component='h2' variant='h2'>
							WordPress Headless CMS
						</Typography>
					</section>

					{posts.map((post) => (
						<section key={post.id}>
							<Typography variant='subtitle1' component='h3' mt={4}>
								{post.title.rendered}
							</Typography>

							<Typography
								component='p'
								mb={4}
								dangerouslySetInnerHTML={{
									__html: post.content.rendered,
								}}
							></Typography>

							<Divider />
						</section>
					))}
				</Container>
			</motion.div>
		</>
	);
}
