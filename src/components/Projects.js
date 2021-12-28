import React from 'react'
import cardImg from '../images/four.jpg'

export default function Project() {
	return (
		<section class='project-section active'>
			<h1 class='project-heading'>some of my projects</h1>
			
			<div class='project-container'>
				<div class='project-card'>
					<img src={cardImg} class='project-img' alt='' />
					<div class='project-content'>
						<h1 class='project-title'>project 01</h1>
						<p class='project-info'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
						</p>
						<div class='project-btn-grp'>
							<button class='project-btn github'>github repo</button>
							<button class='project-btn live'>see live</button>
						</div>
					</div>
				</div>

				<div class='project-card'>
					<img src={cardImg} class='project-img' alt='' />
					<div class='project-content'>
						<h1 class='project-title'>project 01</h1>
						<p class='project-info'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
						</p>
						<div class='project-btn-grp'>
							<button class='project-btn github'>github repo</button>
							<button class='project-btn live'>see live</button>
						</div>
					</div>
				</div>

				<div class='project-card'>
					<img src={cardImg} class='project-img' alt='' />
					<div class='project-content'>
						<h1 class='project-title'>project 01</h1>
						<p class='project-info'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
						</p>
						<div class='project-btn-grp'>
							<button class='project-btn github'>github repo</button>
							<button class='project-btn live'>see live</button>
						</div>
					</div>
				</div>

				<div class='project-card'>
					<img src={cardImg} class='project-img' alt='' />
					<div class='project-content'>
						<h1 class='project-title'>project 01</h1>
						<p class='project-info'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
						</p>
						<div class='project-btn-grp'>
							<button class='project-btn github'>github repo</button>
							<button class='project-btn live'>see live</button>
						</div>
					</div>
				</div>

				<div class='project-card'>
					<img src={cardImg} class='project-img' alt='' />
					<div class='project-content'>
						<h1 class='project-title'>project 01</h1>
						<p class='project-info'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
						</p>
						<div class='project-btn-grp'>
							<button class='project-btn github'>github repo</button>
							<button class='project-btn live'>see live</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
