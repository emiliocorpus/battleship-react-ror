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
	handleRemove:function(){
		this.props.handleRemovePiece()
	},
	handleStart:function(){
		this.props.handleStart()
	},
	render:function() {
		return (
			<div id="new-game-set-up">
				<PieceInstructions data={this.props.data} directionChange={this.receiveDirectionChange} handleSelection={this.receiveSelection} undoMove={this.handleRemove} startGame={this.handleStart} piecesLeft={this.props.piecesLeft} />
				<Board idType="user-board-container" handlePieceSelection={this.props.handlePieceSelection} board={this.props.data.board.grid} selected={this.props.data.selected} placePiece={this.placePiece}/>
			</div>
		)
	}
})