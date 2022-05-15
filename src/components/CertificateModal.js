import { Button, Modal } from 'react-bootstrap'

import Navigation from '../components/Navigation'
import React, { useState } from 'react'
import homecards from '../data/homecards.json'
import { FaDownload } from 'react-icons/fa'
import loadable from '@loadable/component'
const ResumeModal = loadable(() => import('./ResumeModal'))

function CertificateModal({ certs }) {
	const [showResumeModal, setShowResumeModal] = useState(false)
	const [resumeiframe, setresumeiframe] = useState('')
	return (

		<div>

			<Modal
				size='lg'
				show={showResumeModal}
				onHide={() => {
					setShowResumeModal(!showResumeModal)
				}}
				aria-labelledby='example-modal-sizes-title-lg'>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>Certificate</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<iframe src={resumeiframe} width='100%' height='700px' frameBorder="0" ></iframe>

				</Modal.Body>
			</Modal>

			{certs.map((Obj, index) => {
				return (
					<div
						key={`project-list-item-${index}`}>
						<div
							style={{
								background:
									`linear-gradient(120deg,` +
									Obj.initialColor +
									`,` +
									Obj.finalColor +
									`)`,
							}}
							className='cert_list_item'>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', alignContent:'center' }}>
								<h3 style={{marginRight:'10px'}} >
									{Obj.Name}

								</h3>
								<Button
									variant='light'
									style={{
										borderRadius: '4px 0 0 4px',
										borderRight: '1px solid rgba(0,0,0,0.5)',
									}}
									onClick={() => {
										setresumeiframe(Obj.iframesrc);
										setShowResumeModal(true)
									}}>
									Preview
								</Button>
								<Button
									variant='light'
									style={{
										borderRadius: '4px 4px 4px 4px'
									}}
									aria-label='Resume'>
									<FaDownload

										aria-label='Resume'
										fill='rgba(0,0,0,0.5)'
										onClick={() =>
										(window.location =
											Obj.Link)
										}
									/>
								</Button>
							</div>
							<p>{Obj.Description}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CertificateModal
