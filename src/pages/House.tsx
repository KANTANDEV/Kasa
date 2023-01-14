//importations React
import { ReactNode, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
//importations composant
import Dropdown from '../components/Dropdown'
//importation des données
import houses from '../data/data.json'

//creation d'un objet pour les données
type Data = {
	id: string
	title: string
	cover: string
	pictures: Array<string>
	description: string
	host: {
		name: string
		picture: string
	}
	rating: string
	location: string
	equipments: Array<string>
	tags: Array<string>
}

export default () => {
	const { id } = useParams()
	const [currentPhoto, setCurrentPhoto] = useState<number>(0)
	const house: Data | undefined = houses.find((house) => house.id === id)

	//si la maison n'existe pas, on redirige vers la page 404
	if (!house) {
		return <Navigate to='/404'></Navigate>
	}

	//creation des étoiles
	const stars: Array<ReactNode> = []
	for (let i = 0; i < +house.rating; i++) {
		stars.push(
			<span key={i}>
				<i className='fa-solid fa-star'></i>
			</span>
		)
	}
	//ajout des étoiles non colorées
	for (let i = +house.rating; i < 5; i++) {
		stars.push(
			<span key={i}>
				<i className='fa-solid fa-star uncoloured'></i>
			</span>
		)
	}

	//fonction pour changer de photo du carousel
	const handleArrowClick = (direction: string) => {
		if (direction === 'left') {
			setCurrentPhoto((prev: number) => {
				if (prev === 0) {
					return house.pictures.length - 1
				}
				return --prev
			})
		} else if (direction === 'right') {
			setCurrentPhoto((prev: number) => {
				if (prev === house.pictures.length - 1) {
					return 0
				}
				return ++prev
			})
		}
	}

	return (
		<div className='house-page'>
			<div className='house-page__carousel'>
				<img src={house.pictures[currentPhoto]} alt={house.title} />
				<div>{currentPhoto + 1 + '/' + house.pictures.length}</div>
				{house.pictures.length > 1 ? (
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
			<div className='house-page__informations'>
				<div>
					<h2>{house.title}</h2>
					<p>{house.location}</p>
					<div className='house-page__informations__tags'>
						{house.tags.map((tag, index) => (
							<span key={index} className='tag'>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div>
					<div className='house-page__informations__host'>
						<p>{house.host.name}</p>
						<img src={house.host.picture} alt={house.host.name} />
					</div>
					<div className='rating'>{stars}</div>
				</div>
			</div>
			<div className='house-page__dropdowns'>
				<Dropdown title='Description' content={house.description}></Dropdown>
				<Dropdown title='Équipements' content={house.equipments}></Dropdown>
			</div>
		</div>
	)
}
