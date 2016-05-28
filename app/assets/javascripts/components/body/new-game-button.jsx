var NewGameButton = React.createClass({
	handleClick:function(e){
		e.preventDefault()
		this.props.startGame()
	},
	render:function(){
		return (
			<a href="#" id="new-game-link" >
				<div id="new-game-button" onClick={this.handleClick}>
					start new game
				</div>
			</a>
		)
	}
})