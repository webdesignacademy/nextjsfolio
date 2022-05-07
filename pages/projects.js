import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Projects() {
	return (
		<>
			<Head>
				<title>
					Brian Wiltshire Projects | Frontend Developer | UI/UX Designer |
					Graphic Design | Backend Developer
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
				<Container component='section' fixed>
					<Typography variant='h1' component='h1' mb={3}>
						My Projects
					</Typography>

					<Typography variant='subtitle1' component='p' mb={4}>
						Hi, I am <strong>Brian Wiltshire</strong>.<br /> Welcome to my
						little spot on the Internet where I share who I am, what I do and
						what I have done over the last few years.
					</Typography>
					<AccessAlarm fontSize='large' />
					<Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
						<Box gridColumn='span 6' mb={4}>
							<Typography component='p'>
								Think of creating a theme as a two-step composition process:
								first, you define the basic design options; then, you'll use
								these design options to compose other options (example above) or
								to override the design of specific components. The method wraps
								your React node in a provider element. It collects the style
								sheets during the rendering so they can be later sent to the
								client. Think of creating a theme as a two-step composition
								process: first, you define the basic design options; then,
								you'll use these design options to compose other options
								(example above) or to override the design of specific components
								(example below).
							</Typography>
						</Box>
						<Box gridColumn='span 6' mb={4}>
							<Typography component='p'>
								Think of creating a theme as a two-step composition process:
								first, you define the basic design options; then, you'll use
								these design options to compose other options (example above) or
								to override the design of specific components. The method wraps
								your React node in a provider element. It collects the style
								sheets during the rendering so they can be later sent to the
								client. Think of creating a theme as a two-step composition
								process: first, you define the basic design options; then,
								you'll use these design options to compose other options
								(example above) or to override the design of specific components
								(example below).
							</Typography>
						</Box>
					</Box>

					<Typography variant='h2' component='h4' mb={3}>
						My Tech Stack
					</Typography>
					<Box gridColumn='span 12'>
						<Typography variant='h1' component='h1'>
							This is a heading one
						</Typography>
						<Typography variant='h2' component='h2'>
							This is a heading two
						</Typography>
						<Typography variant='h3' component='h3'>
							This is a heading three
						</Typography>
						<Typography variant='h4' component='h4'>
							This is a heading four
						</Typography>
						<Typography variant='h5' component='h5'>
							This is a heading five
						</Typography>
						<Typography variant='h6' component='h6'>
							This is a heading six
						</Typography>
						<Typography variant='subtitle1' component='p' mb={3}>
							CSS ANIMATIONS <strong>CSS FRAMEWORK</strong> ATOMX WP THEME TEXT
							GENERATOR WITH TEXT ARRAY FILTER LOCAL STORAGE WEATHER FACE
							DETECTION SKELETON CSS LOADER CSS ANIMATIONS
						</Typography>
						<Typography variant='body1' component='p' mb={3}>
							Think of creating a theme as a two-step composition process:
							first, you define the basic design options; then, you'll use these
							design options to compose other options (example above) or to
							override the design of specific components. The method wraps your
							React node in a provider element. It collects the style sheets
							during the rendering so they can be later sent to the client.
						</Typography>
						<Typography variant='subtitle2' component='p' mb={3}>
							CSS ANIMATIONS CSS FRAMEWORK ATOMX WP THEME TEXT GENERATOR WITH
							TEXT ARRAY FILTER LOCAL STORAGE WEATHER FACE DETECTION SKELETON
							CSS LOADER CSS ANIMATIONS
						</Typography>
						<Typography variant='body2' component='p' mb={3}>
							Think of creating a theme as a two-step composition process:
							first, you define the basic design options; then, you'll use these
							design options to compose other options (example above) or to
							override the design of specific components. The method wraps your
							React node in a provider element. It collects the style sheets
							during the rendering so they can be later sent to the client.
						</Typography>
						<Typography component='p' mb={3}>
							Think of creating a theme as a two-step composition process:
							first, you define the basic design options; then, you'll use these
							design options to compose other options (example above) or to
							override the design of specific components. The method wraps your
							React node in a provider element. It collects the style sheets
							during the rendering so they can be later sent to the client.
						</Typography>
						<ThreeDRotation className='xlargeIcon' color='primary' />
						<Typography component='p'>
							Think of creating a theme as a two-step composition process:
							first, you define the basic design options; then, you'll use these
							design options to compose other options (example above) or to
							override the design of specific components (example below).
						</Typography>
					</Box>
				</Container>
			</motion.div>
		</>
	);
}
