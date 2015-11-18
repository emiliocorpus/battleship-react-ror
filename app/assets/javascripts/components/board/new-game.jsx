var NewGame = React.createClass({
	receiveDirectionChange:function(piece, direction){
		this.props.handleDirectionChange(piece,direction)
	},
	render:function() {
		return (
			<div id="new-game-set-up">
				<PieceInstructions data={this.props.data} directionChange={this.receiveDirectionChange}/>
				<Board />
			</div>
		)
	}
})