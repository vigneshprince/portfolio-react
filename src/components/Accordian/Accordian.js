import './Accordian.scss'
import {Badge, Nav, Navbar} from 'react-bootstrap'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import React, {useState} from 'react'

import {AiOutlineLink} from 'react-icons/ai'

function Accordian({title, data}) {
	const [showAccordian, setShowAccordian] = useState(true)
	return (
		<div className='portfolio-accordian'>
			<div className='header'>
				<div className='title'>
					<h5>{title}</h5>
					{/* <a href={data.url}>
						<AiOutlineLink />
					</a> */}
					<span>{data.duration}</span>
				</div>
				<span
					role='button'
					className='dropdown-icon'
					onClick={() => setShowAccordian(!showAccordian)}>
					{!showAccordian ? <BsChevronDown /> : <BsChevronUp />}
				</span>
			</div>
			{showAccordian && (
				<div className='content'>
					{data.Projects.map((Obj, index) => {
					return (
						<div style={{width:'100%'}}
							key={`project-list-item-${index}`}
							className='project_list_item_link'>
							<div
								style={{
									background:
										`linear-gradient(120deg,` +
										Obj.initialColor +
										`,` +
										Obj.finalColor +
										`)`,
								}}
								className='project_list_item'>
								<h3>
									{Obj.title}
									
								</h3>
								{Object.keys(Obj.badgeTitle).map((item, index) => {
									return (
										<Badge pill variant='primary' className='chip' key={index}>
											{Obj.badgeTitle[item]}
										</Badge>
									)
								})}
								<p>{Obj.description}</p>
							</div>
						</div>
					)
				})}
				</div>
			)}
		</div>
	)
}

export default Accordian
