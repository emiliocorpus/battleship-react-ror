var Body = React.createClass({
	getInitialState:function(){
		return {
			board: false	
		}
	},
	startNewGame:function() {
		this.setState({
			board:true
		})
	},
	render:function(){
		var toBeShown;
		if (this.state.board === false) {
			toBeShown = <NewGameButton startGame={this.startNewGame} />
		}
		else {
			toBeShown = <Board data={this.state.board} />
		}
		return (
			<div id="body-container" className="debugger">
				{toBeShown}
			</div>
		)
	}
})