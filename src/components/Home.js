import React from 'react'
import heroImage from '../images/me.jpeg'

export default function Home() {
	return (
		// toggle active class to see section
		<section className='home-section'>
			<h1 className='hero-heading'>Hello, My Name is Alex</h1>
			<img src={heroImage} className='hero-img' alt='me' />
		</section>
	)
}
