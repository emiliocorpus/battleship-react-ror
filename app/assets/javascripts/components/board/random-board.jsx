var RandomBoardButton = React.createClass({
	generateRandomBoard:function(e) {
		e.preventDefault()
		this.props.generateRandomBoard()
	},


	render:function() {
		return (
			<a href="#random-board-button" onClick={this.generateRandomBoard}>
				<div className="debugger random-board-button" >
					<h4>RANDOM</h4>
				</div>
			</a>

		)
	}
})