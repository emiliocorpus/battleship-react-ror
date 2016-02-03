var CurrentGame = React.createClass({
	handleFiredShot: function(row, col){
		debugger
		this.props.handleFireShot(row, col)
	},

	render:function(){
		return (
			<div>
				<div className="inline-block">
					<HitBoard idType="computer-board-container"   board={this.props.data.hitCheckBoard} handleFiredShot={this.handleFiredShot} />
				</div>

				<div className="inline-block">
					<UserBoard idType="user-board-container"   board={this.props.data.board.grid}/>
				</div>
			</div>
		)
	}

})