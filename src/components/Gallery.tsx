import React, { useState } from 'react'

const Gallery = ({ pictures, title }: { pictures: Array<string>; title: string }) => {
	const [currentPhoto, setCurrentPhoto] = useState<number>(0)

	//fonction pour changer de photo du carousel
	const handleArrowClick = (direction: string) => {
		if (direction === 'left') {
			setCurrentPhoto((prev: number) => {
				if (prev === 0) {
					return pictures.length - 1
				}
				return --prev
			})
		} else if (direction === 'right') {
			setCurrentPhoto((prev: number) => {
				if (prev === pictures.length - 1) {
					return 0
				}
				return ++prev
			})
		}
	}

	return (
		<div className='house-page__carousel'>
			<img src={pictures[currentPhoto]} alt={title} />
			<div>{currentPhoto + 1 + '/' + pictures.length}</div>
			{pictures.length > 1 ? (
				<>
					<span className='arrowleft' onClick={() => handleArrowClick('left')}>
						<i className='fa-solid fa-chevron-left'></i>
					</span>
					<span className='arrowright' onClick={() => handleArrowClick('right')}>
						<i className='fa-solid fa-chevron-right'></i>
					</span>
				</>
			) : null}
		</div>
	)
}

export default Gallery
