
export default function Search({ isSearch, handleSearch }) {
	return (
		<>
			<div className={`search-wrap ${isSearch ? 'open' : ''}`}>
				<div className="search-inner">
					<i className="icon-check1 search-close" id="search-close" onClick={handleSearch} />
					<div className="search-cell">
						<form method="get">
							<div className="search-field-holder">
								<input type="search" className="main-search-input" placeholder="Search..." />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
