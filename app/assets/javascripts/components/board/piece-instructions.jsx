var PieceInstructions = React.createClass({
	receiveDirectionChange:function(piece, direction){
		this.props.directionChange(piece, direction)
	},
	manageSelection:function(selection){
		this.props.handleSelection(selection)
	},
	render:function() {
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
					<AircraftCarrierPiece direction={this.props.data.aircraftCarrier} amountLeft={this.props.data.aircraftCarrierAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<BattleshipPiece direction={this.props.data.battleship} amountLeft={this.props.data.battleshipAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<SubmarinePiece direction={this.props.data.submarine} amountLeft={this.props.data.submarineAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<DestroyerPiece direction={this.props.data.destroyer} amountLeft={this.props.data.destroyerAmount}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<PatrolShipPiece direction={this.props.data.patrolShip} amountLeft={this.props.data.patrolShipAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
				</div>
			</div>
		)
	}
})