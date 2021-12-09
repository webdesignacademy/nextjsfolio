import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navigation = () => {
	// USED FOR ACTIVE NAV LINK
	const router = useRouter();

	// ADD BODY CLASS TO HEADER WHEN SCROLLING
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 150);
		});
	}, []);

	// ADD BODY CLASS TO HEADER WHEN SCROLLING
	const [active, setActive] = useState(true);
	useEffect(() => {
		const navigation = document.getElementById('navigation');

		navigation.addEventListener('click', () => {
			setActive(false);
		});
	}, []);

	return (
		<header className={scroll ? 'scrolled' : 'fixed'}>
			<Container component='section' fixed>
				<section className='headerLeft'>
					<section className='logo'>
						<Link href='/'>
							<h1>
								BRIAN<span>WILTSHIRE</span>
							</h1>
						</Link>
					</section>
				</section>

				<section className='headerRight'>
					<IconButton
						size='large'
						className='menuToggle'
						edge='end'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={setActive}
					>
						<MenuIcon />
					</IconButton>
					<nav id='navigation' className={active ? 'visible' : 'hidden'}>
						<ul>
							<li className={router.pathname == '/' ? 'active' : ''}>
								<Link href='/'>
									<a>HOME</a>
								</Link>
							</li>

							<li className={router.pathname == '/about' ? 'active' : ''}>
								<Link href='/about'>
									<a>ABOUT ME</a>
								</Link>
							</li>

							<li className={router.pathname == '/projects' ? 'active' : ''}>
								<Link href='/projects'>
									<a>PROJECTS</a>
								</Link>
							</li>

							<li className={router.pathname == '/contact' ? 'active' : ''}>
								<Link href='/contact'>
									<a>GET IN TOUCH</a>
								</Link>
							</li>
						</ul>
					</nav>
				</section>
			</Container>
		</header>
	);
};

export default Navigation;
