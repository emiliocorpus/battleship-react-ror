var RandomBoardButton = React.createClass({
	generateRandomBoard:function(e) {
		e.preventDefault()
		this.props.generateRandomBoard()
	},


	render:function() {
		return (
			<a href="#randomize" className="btn random-board-button" onClick={this.generateRandomBoard}>
				
				Randomize
				
			</a>

		)
	}
})