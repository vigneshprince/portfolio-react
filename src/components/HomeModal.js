import React from 'react'
import {Modal} from 'react-bootstrap'
import ProjectList from '../pages/ProjectList'
import CodeList from './CodeList'
import Hobby from './Hobby'
import Education from './Education'
import CertificateModal from './CertificateModal'
import WorkExp from './WorkExp'

function setModal(value, valObj) {
	if (value === 'Personal Projects') {
		return <ProjectList ProjectListVal={valObj} />
	} else if (value === 'Coding') {
		return <CodeList CodeListVal={valObj} />
	} else if (value === 'Hobbies & Interest') {
		return <Hobby HobbyListVal={valObj} />
	} else if (value === 'Education') {
		return <Education EducationObj={valObj} />
	} else if (value === 'Certificates') {
		return <CertificateModal certs={valObj} />
	} else if (value === 'Work Experience + Projects') {
		return <WorkExp WorkExpObj={valObj} />
	}
}

function HomeModal({lgShow, setLgShow, HomeCards}) {
	return (
		<Modal
			size='lg'
			show={lgShow}
			onHide={() => setLgShow(false)}
			aria-labelledby='example-modal-sizes-title-lg'>
			<Modal.Header closeButton>
				<Modal.Title id='example-modal-sizes-title-lg'>
					{HomeCards.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{setModal(HomeCards.title, HomeCards.value)}</Modal.Body>
		</Modal>
	)
}

export default HomeModal
