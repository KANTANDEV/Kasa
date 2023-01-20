import { Navigate, useParams } from 'react-router-dom'
//* importation des composants
import Dropdown from '../components/Dropdown'
import Gallery from '../components/Gallery'
import Stars from '../components/Stars'
//* importation des données
import houses from '../data/data.json'

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
	const house = houses.find((house) => house.id === id)

	if (!house) {
		return <Navigate to='/404'></Navigate>
	}

	const { title, location, tags, host, rating, equipments, description, pictures } = house

	return (
		<div className='house-page'>
			<Gallery pictures={pictures} title={title} />
			<div className='house-page__informations'>
				<div>
					<h2>{title}</h2>
					<p>{location}</p>
					<div className='house-page__informations__tags'>
						{tags.map((tag, index) => (
							<span key={index} className='tag'>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div>
					<div className='house-page__informations__host'>
						<p>{host.name}</p>
						<img src={host.picture} alt={host.name} />
					</div>
					<Stars rating={Number(rating)} />
				</div>
			</div>
			<div className='house-page__dropdowns'>
				<Dropdown title='Description' content={description}></Dropdown>
				<Dropdown title='Équipements' content={equipments}></Dropdown>
			</div>
		</div>
	)
}
