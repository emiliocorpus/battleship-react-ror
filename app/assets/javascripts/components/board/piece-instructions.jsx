var PieceInstructions = React.createClass({
	receiveDirectionChange:function(selection){
		this.props.directionChange(selection)
	},
	manageSelection:function(selection){
		this.props.handleSelection(selection)
	},
	generateRandomBoard:function(){
		this.props.generateRandomBoard()
	},

	render:function() {
		var undoButton;
		var startGameButton;
		var randomBoard;
		if (this.props.data.previousStatesPriorToStart.length > 0) {
			undoButton = <UndoButton handleUndo={this.props.undoMove}/>
		}
		if (this.props.piecesLeft === 0) {
			startGameButton = <StartGame startGame={this.props.startGame} />
		}

		if (this.props.data.started === "placing pieces") {
			randomBoard = <RandomBoardButton generateRandomBoard={this.props.generateRandomBoard}/>
		}

		if (this.props.data)
		return (
			<div id="instructions">
				
				<div className="instruction-content inline-block">
				<h2>INSTRUCTIONS</h2>
					<ul>
						<li>Click a ship below and then click desired cell on board</li>
							<ul>
								<li>Ship will be placed rightwards or downwards from the clicked cell</li>
								<li>Ships may not be placed adjacent to each other!</li>
							</ul>
						<li>Double click desired piece <em>below</em> to rotate</li>
						<li>Or if you are feeling lazy hit the 'Randomize' button</li>
					</ul>
				</div>

				<div className="pieces inline-block">
					<AircraftCarrierPiece data={this.props.data} direction={this.props.data.userPieces.aircraftCarrier.direction} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection} />
					<BattleshipPiece data={this.props.data} direction={this.props.data.userPieces.battleship.direction}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<SubmarinePiece data={this.props.data} direction={this.props.data.userPieces.submarine.direction}  handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<DestroyerPiece data={this.props.data} direction={this.props.data.userPieces.destroyer.direction}   handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
					<PatrolShipPiece data={this.props.data} direction={this.props.data.userPieces.patrolShip.direction} handleDirectionChange={this.receiveDirectionChange} sendSelection={this.manageSelection}/>
				</div>
				{randomBoard}
				{startGameButton}
				{undoButton}
			</div>
		)
	}
})