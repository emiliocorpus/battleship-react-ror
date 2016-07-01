var CurrentGame = React.createClass({
	handleFiredShot: function(row, col){
		this.props.handleFireShot(row, col)
	},
	receiveClick:function(e) {
		this.props.startNewGame()
	},

	render:function(){
		return (
			<div>
				<TextBox data = {this.props.data} startNewGame={this.receiveClick}/>

				<div className="inline-block">
					<h1 className="board-label your-board"> Your Board </h1>
					<UserBoard idType="user-board-container"   board={this.props.data.board.grid}/>
				</div>

				<div className="inline-block computer-board">
					<h1 className="board-label computer-board"> Guess Board </h1>
					<HitBoard idType="computer-board-container"   board={this.props.data.hitCheckBoard} handleFiredShot={this.handleFiredShot} />
				</div>

			</div>
		)
	}

})