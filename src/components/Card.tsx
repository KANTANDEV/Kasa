import { Link } from 'react-router-dom'

type Props = {
	id: string
	title: string
	cover: string
}

export default ({ id, title, cover }: Props) => {
	return (
		<Link to={'/house/' + id} className='card'>
			<div>
				<img className='card__cover' src={cover} alt={title} />
				<div className='card__filter'></div>
				<p className='card__title'>{title}</p>
			</div>
		</Link>
	)
}
