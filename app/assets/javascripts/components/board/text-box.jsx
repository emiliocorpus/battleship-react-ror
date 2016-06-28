var TextBox = React.createClass({
	handleClick:function(e){
		e.preventDefault()
		this.props.startNewGame()
	},
	render:function() {
		var display=[];
		var message
		var lastMessage
		var previousMessages = this.props.data.previousMessages
		var endgame = this.props.data.endGameMessage
		
		for (var i = 1; i <previousMessages.length+1; i++) {
			if (i%2===1) {
				message = <p className="green-font shot-feedback" key={i}>{previousMessages[i-1]}</p>	
			}
			else {
				message = <p className="red-font shot-feedback" key={i}>{previousMessages[i-1]}</p>
			}
			display.unshift(message)
		}
		if (endgame !== null) {
			lastMessage = <p className="yellow-font shot-feedback">{endgame} Click <a href="#" onClick={this.handleClick} className="green-font new-game-link">here</a> to start a new game</p> 
			display.unshift(lastMessage)

		}
		return (
			<div className="text-box-container">
				<span className="white-font">BATTLE LOG</span>
				<div className="text-box">
					{display} 
					<p className="yellow-font shot-feedback">HINT: To fire a shot click on the desired coordinates one your Guess Board. Best of luck and happy sailing!<br/> Click <a href="#" onClick={this.handleClick} className="green-font new-game-link">here</a> at any time if you want to reset and play a new game.</p>
				</div>
			</div>
		)
	}
})