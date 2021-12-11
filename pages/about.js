import Head from 'next/head';
import Image from 'next/image';
import aboutBrain from '../public/images/brian-wiltshire-full-stack.jpg';
import fullStack from '../public/images/fullstack.gif';
import { Grid, Typography, Container, Divider } from '@mui/material';
import { AccessAlarm, AttachFile } from '@mui/icons-material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// This function gets called at build time
export const getStaticProps = async () => {
	// Call an external API endpoint to get posts
	const getPosts = await fetch(
		'http://localhost/reactwp/wp-json/wp/v2/posts?_embed'
	);
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
			<Container component='section' fixed>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay
					loop
					navigation={{ clickable: true }}
					pagination={{ clickable: true }}
					// onSlideChange={() => console.log('slide change')}
					// onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<Image
							src={aboutBrain}
							alt='Brian Wiltshire Front Developer Portfolio'
							quality='100'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={aboutBrain}
							alt='Brian Wiltshire Front Developer Portfolio'
							quality='100'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={aboutBrain}
							alt='Brian Wiltshire Front Developer Portfolio'
							quality='100'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={aboutBrain}
							alt='Brian Wiltshire Front Developer Portfolio'
							quality='100'
						/>
					</SwiperSlide>
					...
				</Swiper>
				<Typography variant='h1' component='h1' mb={3}>
					Who is this is ?
				</Typography>
				<Typography variant='subtitle1' component='h2' mb={3}>
					My name is Brian Wiltshire. I am a full stack software engineer.
					<br />I love working with all web technologies.
				</Typography>
				<Typography variant='h5' component='h5' mb={5}>
					I have 15+ years experience in Front and Back end Development, Web &
					Graphic Design, Social & Search Marketing including Search
					Optimisation. I am the founder of Web Design Academy where I have been
					teaching on all of these subjects for the last 9 years.
				</Typography>
			</Container>

			<Divider />

			<Container component='section' fixed>
				<Grid container columns={12} spacing={3} rowSpacing={3} my={4}>
					<Grid item sm={12} md={6}>
						<Typography component='p' variant='subtitle1'>
							A little bit of history <AttachFile />
						</Typography>
						<Typography component='h5' variant='h5' mt={4}>
							I believe in creating experiences, not just aesthetics. It's about
							bringing together design, motion, imagery, and code to create
							something that evokes emotion.
						</Typography>
						<Typography component='h6' variant='h6' mt={4}>
							A good website should load fast, be easy to use, have clear call
							to actions and be concise with well written content. It should
							also be optimised for search and secure. I have the skills to
							create all of this by using all the tools below.
						</Typography>
						<Typography component='p' mt={3}>
							I initially started my career in 2003 by taking a Flash Animation
							course in London, UK. For the next few years I developed advanced
							Flash websites where I won multiple design and animation awards. I
							also became one of the top sellers on Envato Flash Den, selling
							Flash animations and components. I initially developed full flash
							websites with a PHP backend, branded micro sites and animations.
							Flash instilled a massive love for design which I kept in my
							arsenal all the way through my career. I still use Adobe Animate
							for 2D Animations and Offline Presentations.
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
							developed and teach two of the best ranked HTML and CSS courses in
							South Africa via Web Design Academy.
						</Typography>
						<Typography variant='h5' component='h5' mt={3}>
							WordPress and eCommerce
						</Typography>
						<Typography component='p' mt={3}>
							I started using WordPress in 2009 initially for for blogging. I
							soon fell in love with WordPress and for the past 9 years I have
							developed custom WordPress websites for Memberhips, eCommerce,
							Blogging, News, Social Networks, Support Portals and many more. I
							am now an advanced WordPress developer that can create any custom
							Theme or Plugin my clients require. I have full confidence in
							using WordPress for any type of website. I am also an avid user of
							WooCommerce and over the past few years developed amazingly
							successful eCommerce solutions. With the rise of JavaScript and
							API's I now use React and NextJS with WordPress as a headless CMS
							exposing the content with GraphQL. I developed a best selling
							WordPress Theme with advanced customizer functionality and
							Gutenberg Templates. I have been teaching WordPress courses for
							the last 8 years and rated one of the best short courses in South
							Africa.
						</Typography>
						<Typography variant='h5' component='h5' mt={3}>
							PHP and MySQL
						</Typography>
						<Typography component='p' mt={3}>
							I have been using basic PHP since my early days in Flash. I am now
							fully confident in using PHP and MySQL to develop dynamic database
							driven applications. I love using all of these technologies
							together to create full stack applications. For the last couple of
							years I moved more towards Jamstack solutions with JavaScript and
							NoSQL as the main focus.
						</Typography>
						<Typography variant='h5' component='h5' mt={3}>
							JavaScript, NoSQL and NPM
						</Typography>
						<Typography component='p' mt={3}>
							I started using JavaScript in my websites since 2009. Initially I
							used it for adding UI elements and DOM manipulations with events.
							I am very comfortable using jQuery including jQuery Mobile and
							jQuery UI. These days I use vanilla JavaScript more and more
							especially with NPM packages like React, Next JS, Node JS, Vue JS
							etc.
						</Typography>
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
							I am very well versed in Search Engine Optimisation techniques and
							know the importance of having a well optimised website. SEO has
							been a very strong focus point for me over the last few years. I
							know the techniques required for on-site optimisation to off-site
							optimisation and beyond. I also know how to integrate most popular
							social networks and I teach introduction level courses on both
							subjects.
						</Typography>

						<Typography variant='h5' component='h5' mt={3}>
							Graphic Design, Image Optimisation and Video
						</Typography>
						<Typography component='p' mt={3}>
							Since my early days in Flash I love working with graphics. I am an
							advance user of Adobe Illustrator, Fireworks and Photoshop for
							both web and print designs. I am very comfortable in creating all
							graphic requirements for any website project including logo
							design, stationery and complete official branding guides. I also
							play around with video editing and production and created many
							brand related videos using stock and original footage.
						</Typography>

						<Typography variant='h5' component='h5' mt={3}>
							Frameworks
						</Typography>
						<Typography component='p' mt={3}>
							I have used many different frameworks for all types of
							requirements. Below is a list of the frameworks, applications and
							tech stacks I use on a regular basis. JSON Server, Bootstrap,
							Tailwind, Mongoose, Material UI, Foundation, Materialize, jQuery,
							HTML5 Boilerplate, Modernizr
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
									these design options to compose other options or to override
									the design of specific components. The method wraps your React
									node in a provider element. It collects the style sheets
									during the rendering so they can be later sent to the client.
									Think of creating a theme as a two-step composition process
								</Typography>
							</SwiperSlide>
							<SwiperSlide>
								<Typography component='p' mt={3}>
									Think of creating a theme as a two-step composition process:
									first, you define the basic design options; then, you'll use
									these design options to compose other options or to override
									the design of specific components. The method wraps your React
									node in a provider element. It collects the style sheets
									during the rendering so they can be later sent to the client.
									Think of creating a theme as a two-step composition process
								</Typography>
							</SwiperSlide>
							...
						</Swiper>
					</Grid>
					<Grid item sm={12} md={6}>
						<Image
							src={aboutBrain}
							alt='Brian Wiltshire Front Developer Portfolio'
							quality='100'
						/>
					</Grid>
				</Grid>
			</Container>
			<section className='lightbg'>
				<Container component='section' fixed>
					<Typography variant='h2' component='h2' align='center'>
						My Tech Stack and Toolkit
					</Typography>
					<Grid container columns={12} spacing={3} rowSpacing={3} my={3}>
						<Grid item sm={12} md={6}>
							<Typography variant='body2' component='p'>
								HTML5 CSS3 / SASS / LESS JAVASCRIPT / ES6 PHP MYSQL JQUERY /
								JQUERY MOBILE / JQUERY UI WORDPRESS JSON XML REACT JS NEXT JS
								NEXT AUTH / OAUTH NODE JS GRAPHQL MONGODB GIT / GITHUB PYTHON
								VUE JS NUXT JS BOOTSTRAP TAILWIND CSS MATERIAL UI JSON SERVER
								WEBPACK OAUTH
							</Typography>
						</Grid>

						<Grid item sm={12} md={6}>
							<Typography variant='body2' component='p'>
								JAMSTACK REACT, GRAPHQL WITH HEADLESS WORDPRESS CMS NEXT JS WITH
								HEADLESS FAUNA DB NEXT JS WITH MONGO DB ATLAS NEXT JS WITH MONGO
								DB AND OAUTH APPS ADOBE DREAMWEAVER VISUAL STUDIO CODE ATOM /
								BRACKETS ADOBE ILLUSTRATOR ADOBE FIREWORKS ADOBE ANIMATE / FLASH
								WAMP SERVER / XAMP / MAMP FILEZILLA / TRANSMISSION
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>
			<Container component='section' fixed>
				<Typography variant='h3' component='h3' mt={4}>
					<AccessAlarm fontSize='large' mr={2} /> My Tech Stack and Toolkit
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

				<Typography variant='h4' component='h4' mt={4}>
					<AccessAlarm fontSize='large' mr={2} /> Work Experience
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

				<Typography component='subtitle2' component='p' mb={5}>
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
						Develop a good programming intuition work on problem-solving skills.
						<br />
						Study algorithms and data structures. Learn at least the basics of
						<br />
						complexity theory. Implement your solutions using pseudo-code first.
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
		</>
	);
}
