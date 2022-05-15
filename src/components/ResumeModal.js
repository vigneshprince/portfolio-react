import { Modal } from 'react-bootstrap'
import React from 'react'

function ResumeModal({ showResumeModal, closeModal }) {
	return (
		<Modal
			size='lg'
			show={showResumeModal}
			onHide={closeModal}
			aria-labelledby='example-modal-sizes-title-lg'>
			<Modal.Header closeButton>
				<Modal.Title id='example-modal-sizes-title-lg'>Resume</Modal.Title>
			</Modal.Header>
			<Modal.Body>

				<iframe src="https://onedrive.live.com/embed?cid=F75C43684C510E6B&resid=F75C43684C510E6B%211009&authkey=AHnIlFQUj-KK7ow&em=2" width='100%' height='700px' frameBorder="0" ></iframe>

			</Modal.Body>
		</Modal>
	)
}

export default ResumeModal
