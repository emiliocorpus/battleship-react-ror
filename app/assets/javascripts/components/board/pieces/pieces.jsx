var Pieces = React.createClass({
	render:function(){
		return(
			<div className="pieces">
				<AircraftCarrierPiece direction={this.props.data.aircraftCarrier} amountLeft={this.props.data.aircraftCarrierAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>

				<BattleshipPiece direction={this.props.data.battleship} amountLeft={this.props.data.battleshipAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>

				<SubmarinePiece direction={this.props.data.submarine} amountLeft={this.props.data.submarineAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>

				<DestroyerPiece direction={this.props.data.destroyer} amountLeft={this.props.data.destroyerAmount}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>

				<PatrolShipPiece direction={this.props.data.patrolShip} amountLeft={this.props.data.patrolShipAmount} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
			</div>
		)
	}
})