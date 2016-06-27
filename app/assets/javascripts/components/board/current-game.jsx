var CurrentGame = React.createClass({
	handleFiredShot: function(row, col){
		this.props.handleFireShot(row, col)
	},

	render:function(){
		return (
			<div>
				<TextBox data = {this.props.data}/>

				<div className="inline-block">
					<h1 className="board-label your-board"> Your Board </h1>
					<UserBoard idType="user-board-container"   board={this.props.data.board.grid}/>
				</div>

				<div className="inline-block computer-board">
					<h1 className="board-label computer-board"> Computer Board </h1>
					<HitBoard idType="computer-board-container"   board={this.props.data.hitCheckBoard} handleFiredShot={this.handleFiredShot} />
				</div>

			</div>
		)
	}

})


// CHECK FOR IF GAME IS DONE
// if the count of hit cells is equal to 29, player wins
// 
// CHECK FOR IF SHIP IS SUNK
// depending on ship length, check in direction in both vertical and horizontal