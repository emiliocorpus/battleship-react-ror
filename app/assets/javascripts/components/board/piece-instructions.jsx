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
					<AircraftCarrierPiece data={this.props.data} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<BattleshipPiece data={this.props.data}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<SubmarinePiece data={this.props.data}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<DestroyerPiece data={this.props.data}   handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<PatrolShipPiece data={this.props.data} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
				</div>
			</div>
		)
	}
})