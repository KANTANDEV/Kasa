const Stars = ({ rating }: { rating: number }) => {
	return (
		<>
			<div className='stars'>
				{[...Array(5)].map((_, i) => (
					<div key={i} className='star'>
						<span>
							<i className={`fa-solid fa-star ${i < rating ? '' : 'uncoloured'}`}></i>
						</span>
					</div>
				))}
			</div>
		</>
	)
}

export default Stars
