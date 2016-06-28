var TextBox = React.createClass({
	render:function() {
		var display=[];
		// var coordinates = this.props.data.lastShotFired.coordinates
		// var targetStatus = this.props.data.lastShotFired.targetStatus
		// if (targetStatus !== null) {
		// 	if (targetStatus === "hit") {
		// 		var directt = <span><span className="coordinates">{coordinates}</span> is a <span className="green-font">direct</span> hit!</span>
		// 		display = directt
		// 	}
		// 	else {
		// 		var misss = <span><span className="coordinates">{coordinates}</span> is a <span className="red-font">miss</span>...</span>
		// 		display = misss
		// 	}
		// }
		// else {
		// 	display = ""
		// }

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