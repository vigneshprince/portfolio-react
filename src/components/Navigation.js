import {Button, Nav, Navbar} from 'react-bootstrap'
import {FaDownload, FaGithub, FaLinkedin} from 'react-icons/fa'
import React, {useState} from 'react'

import PortfolioLogo from '../assets/Image/command-window-svgrepo-com.svg'
import loadable from '@loadable/component'

const ResumeModal = loadable(() => import('./ResumeModal'))
// import ResumeModal from "./ResumeModal";

function Navigation() {
	const [showResumeModal, setShowResumeModal] = useState(false)

	return (
		<React.Fragment>
			<Navbar variant='dark' expand='lg' fixed='top' className='nvabar-custon'>
				<a href='/' className='navbar_logo_container'>
					<img src={PortfolioLogo} className='navbar_logo' alt='navbar_logo' />
					<span style={{color:'black'}} >Vignesh's Portfolio</span>
				</a>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav className='navbar-right'>
						<Nav.Link>
							<Button
								variant='light'
								style={{
									borderRadius: '4px 0 0 4px',
									borderRight: '1px solid rgba(0,0,0,0.5)',
								}}
								onClick={() => {
									setShowResumeModal(true)
								}}>
								Resume
							</Button>
							<Button
								variant='light'
								href='https://api.onedrive.com/v1.0/shares/s!AmsOUUxoQ1z3h3FeAuVtCyX9Q4Kz/root/content'
								style={{
									borderRadius: '0 4px 4px 0',
								}}
								aria-label='Resume'>
								<FaDownload
									aria-label='Resume'
									fill='rgba(0,0,0,0.5)'
									onClick={() =>
										(window.location =
											'https://api.onedrive.com/v1.0/shares/s!AmsOUUxoQ1z3h3FeAuVtCyX9Q4Kz/root/content')
									}
								/>
							</Button>
						</Nav.Link>
						<Nav.Link
							aria-label='Github'
							href='https://github.com/vigneshprince/'>
							<FaGithub
								aria-label='Github'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Linked In'
							href='https://www.linkedin.com/in/vignesh-r-44a97818b/'>
							<FaLinkedin
								aria-label='Linked In'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<ResumeModal
				showResumeModal={showResumeModal}
				closeModal={() => {
					setShowResumeModal(!showResumeModal)
				}}
			/>
		</React.Fragment>
	)
}

export default Navigation
