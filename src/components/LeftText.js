import React from 'react'
import Typed from 'react-typed'

function LeftText() {
	return (
		<div className='leftText'>
			<div className='flex-fix'>
				<h2>Hi, </h2>
				<span className='preTitle'>I am </span>
				<h1 className='name_big'>Vignesh</h1>
				<p className='animated_text'>
					<Typed
						strings={[
							'I am a Data Engineer',
							'I am a Full Stack Developer',
							'I am a Visualization Specialist',
							'I am a Azure Cloud Architect',
						]}
						typeSpeed={40}
						backSpeed={50}
						loop></Typed>
				</p>
			</div>
		</div>
	)
}

export default LeftText
