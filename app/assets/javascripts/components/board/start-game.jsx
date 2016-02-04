var StartGame = React.createClass({
	startGame:function(e){
		e.preventDefault()
		this.props.startGame()
	},
	render:function(){
		return (
			<a href="#start-game" className="btn start-game-button" onClick={this.startGame}>
					Start
			</a>
		)
	}
})