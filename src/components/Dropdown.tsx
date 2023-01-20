import { useState } from 'react'

type Props = {
	title: string
	content: string | Array<string>
}

export default ({ title, content }: Props) => {
	const [display, setDisplay] = useState(false)

	const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setDisplay(!display)
	}

	return (
		<div className='dropdown'>
			<div onClick={toggleMenu}>
				<span>{title}</span>
				<i className={`fa-solid fa-chevron-${display ? 'up' : 'down'}`}></i>
			</div>
			<div style={{ display: display ? 'inherit' : 'none' }}>{typeof content === 'string' ? <p>{content}</p> : content.map((line, index) => <p key={index}>{line}</p>)}</div>
		</div>
	)
}
