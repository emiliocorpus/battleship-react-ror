var NewGameButton = React.createClass({
	handleClick:function(e){
		e.preventDefault()
		this.props.startGame()
	},
	render:function(){
		return (
			<a href="#" id="new-game-link" onClick={this.handleClick}>
				<div id="new-game-button">
					PLAY NEW GAME?
				</div>
			</a>
		)
	}
})