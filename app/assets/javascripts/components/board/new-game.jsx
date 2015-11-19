var NewGame = React.createClass({
	receiveDirectionChange:function(piece, direction){
		this.props.handleDirectionChange(piece,direction)
	},
	receiveSelection:function(selection){
		this.props.handlePieceSelection(selection)
	},
	placePiece:function(row,col) {
		this.props.placePiece(row,col)
	},
	render:function() {
		return (
			<div id="new-game-set-up">
				<PieceInstructions data={this.props.data} directionChange={this.receiveDirectionChange} handleSelection={this.receiveSelection}/>
				<Board handlePieceSelection={this.props.handlePieceSelection} data={this.props.data} placePiece={this.placePiece}/>
			</div>
		)
	}
})