import React from 'react'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<ul className='link-group'>
				<li className='link active'>
					<a href='/'>home</a>
				</li>
				<li className='link'>
					<a href='/'>projects</a>
				</li>
				<li className='link'>
					<a href='/'>about</a>
				</li>
				<li className='link'>
					<a href='/'>contact</a>
				</li>
			</ul>
		</nav>
	)
}
