var TextBox = React.createClass({
	render:function() {
		var display=[];
		var message
		var lastMessage
		var previousMessages = this.props.data.previousMessages
		var endgame = this.props.data.endGameMessage
		
		for (var i = 1; i <previousMessages.length+1; i++) {
			if (i%2===1) {
				message = <p className="green-font shot-feedback">{previousMessages[i-1]}</p>	
			}
			else {
				message = <p className="red-font shot-feedback">{previousMessages[i-1]}</p>
			}
			display.unshift(message)
		}
		if (endgame !== null) {
			lastMessage = <p className="yellow-font shot-feedback">{endgame}</p> 
			display.unshift(lastMessage)
		}
		return (
			<div className="text-box-container">
				<span className="white-font">BATTLE LOG</span>
				<div className="text-box">
					{display} 
					<p className="yellow-font shot-feedback">HINT: To fire a shot click on the desired coordinates in your Computer Check board. Best of luck and may the odds be ever in your favor! Happy hunting!</p>
				</div>
			</div>
		)
	}
})