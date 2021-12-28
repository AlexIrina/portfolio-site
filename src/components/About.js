import React from 'react'
import heroImg from '../images/me.jpeg'

export default function About() {
	return (
		<section className='about-section active'>
			<div className='about-container'>
				<div className='about-img-container'>
					<img className='about-img' src={heroImg} alt='me' />
					<button className='download-cv-btn'> Download Cv </button>
				</div>

				<p className='about-info'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Exercitationem alias dolorem in expedita quaerat quas reiciendis
					molestias vitae aliquid animi ipsam adipisci itaque recusandae facere
					ut illo qui quis excepturi laborum consequatur nobis, dolor
					necessitatibus consequuntur? Error deleniti ipsam quasi nostrum ab.
					Magni ab deleniti dolores atque voluptatum fugit facilis.
				</p>
			</div>
		</section>
	)
}
