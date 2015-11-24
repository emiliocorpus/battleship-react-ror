var PieceInstructions = React.createClass({
	receiveDirectionChange:function(selection){
		this.props.directionChange(selection)
	},
	manageSelection:function(selection){
		this.props.handleSelection(selection)
	},
	handleUndMove:function(){
		this.props.undoMove()
	},
	render:function() {
		var undoButton;
		if (this.props.data.previousStatesPriorToStart.length > 0) {
			undoButton = <UndoButton handleUndo={this.props.undoMove}/>
		}
		return (
			<div id="instructions">
				<h3>HOW TO PLACE SHIPS</h3>
					<ul>
						<li>Click a ship below and then click desired cell on board</li>
							<ul>
								<li>Ship will either be placed from left to right, or downwards from the clicked cell</li>
							</ul>
						<li>Double click piece to rotate</li>
					</ul>


				<div className="pieces">
					<AircraftCarrierPiece data={this.props.data} direction={this.props.data.userPieces.aircraftCarrier.direction} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection} />
					<BattleshipPiece data={this.props.data} direction={this.props.data.userPieces.battleship.direction}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<SubmarinePiece data={this.props.data} direction={this.props.data.userPieces.submarine.direction}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<DestroyerPiece data={this.props.data} direction={this.props.data.userPieces.destroyer.direction}   handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<PatrolShipPiece data={this.props.data} direction={this.props.data.userPieces.patrolShip.direction} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
				</div>

				{undoButton}
				
			</div>
		)
	}
})