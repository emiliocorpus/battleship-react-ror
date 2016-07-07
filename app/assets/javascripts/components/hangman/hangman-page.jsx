var HangmanPage = React.createClass({
	render:function(){
		return (
			<div id="hangman-page-container">
				<div className="debugger">
					Would you like to play vs the computer or with a friend?
				</div>
			</div>
		)
	}
})



/* there will be TWO options
	player with another player.
	play against a computer

	if two player game 
		game owner will submit category and word
		then press start to commence game

	if against computer
		player will select category and then confrim the gam
		game will beg
*/