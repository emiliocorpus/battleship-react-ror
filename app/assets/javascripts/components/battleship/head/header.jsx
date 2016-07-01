var Header = React.createClass({
	render:function() {
		return (
			<div id="header">

				<div>
					<span>
						<a href="/">Home</a>
					</span>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span id="battleship">BATTLESHIP</span> <span id="description">on React.js</span> 
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span>
						<a href="/hangman">Play Hangman</a>
					</span>
				</div>
			</div>
		)
	}
})