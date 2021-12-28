import React from 'react'
import skillsImage from '../images/one.jpg'

export default function Skills() {
	return (
		<div className='skill-section'>
			<h1 className='skill-heading'>Skills</h1>
			<div className='skills-container'>
				<div className='skill-card'>
					<img className='skill-image' src={skillsImage} alt='skill' />
					<div className='skill-level'></div>
					<h3 className='skill-name'>HTML</h3>
					<p className='skill-info'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
						dolorem.
					</p>
				</div>

				<div className='skill-card'>
					<img className='skill-image' src={skillsImage} alt='skill' />
					<div className='skill-level'></div>
					<h3 className='skill-name'>CSS</h3>
					<p className='skill-info'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
						dolorem.
					</p>
				</div>
				<div className='skill-card'>
					<img className='skill-image' src={skillsImage} alt='skill' />
					<div className='skill-level'></div>
					<h3 className='skill-name'>JS</h3>
					<p className='skill-info'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
						dolorem.
					</p>
				</div>
				<div className='skill-card'>
					<img className='skill-image' src={skillsImage} alt='skill' />
					<div className='skill-level'></div>
					<h3 className='skill-name'>Node.js</h3>
					<p className='skill-info'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
						dolorem.
					</p>
				</div>
				<div className='skill-card'>
					<img className='skill-image' src={skillsImage} alt='skill' />
					<div className='skill-level'></div>
					<h3 className='skill-name'>React</h3>
					<p className='skill-info'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
						dolorem.
					</p>
				</div>
				<div className='skill-card'>
					<img className='skill-image' src={skillsImage} alt='skill' />
					<div className='skill-level'></div>
					<h3 className='skill-name'>Git</h3>
					<p className='skill-info'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
						dolorem.
					</p>
				</div>
			</div>
		</div>
	)
}
