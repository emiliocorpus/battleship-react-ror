var StartGame = React.createClass({
	startGame:function(e){
		e.preventDefault()
		this.props.startGame()
	},
	render:function(){
		return (
			<a href="#start-game" onClick={this.startGame}>
				<div className="start-game-button">
					START
				</div>
			</a>
		)
	}
})