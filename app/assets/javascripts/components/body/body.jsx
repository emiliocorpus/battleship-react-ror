var Body = React.createClass({
	getInitialState:function(){
		return {
			started:null,
			board: { 
					grid: {
							a: [null, null, null, null, null, null, null, null, null, null],
							b: [null, null, null, null, null, null, null, null, null, null],
							c: [null, null, null, null, null, null, null, null, null, null],
							d: [null, null, null, null, null, null, null, null, null, null],
							e: [null, null, null, null, null, null, null, null, null, null],
							f: [null, null, null, null, null, null, null, null, null, null],
							g: [null, null, null, null, null, null, null, null, null, null],
							h: [null, null, null, null, null, null, null, null, null, null],
							i: [null, null, null, null, null, null, null, null, null, null],
							j: [null, null, null, null, null, null, null, null, null, null]
						}
			},
			aircraftCarrier: "hz",
			aircraftCarrierAmount: 1,
			battleship: "hz",
			battleshipAmount: 1,
			submarine: "hz",
			submarineAmount: 1,
			destroyer: "hz",
			destroyerAmount: 2,
			patrolShip: "hz",
			patrolShipAmount: 2,
			selected: null	
		}
	},
	placePiece:function(row, col){
		switch (this.state.selected) {
			case "aircraft-carrier":
				// SOME FUNCTION THAT INSERTS PIECE IF VALID
				this.pieceCheck(row,col)
				break;
		}
	},


	pieceCheck:function(row, col) {
		var currentBoard = this.state.board
		if (currentBoard.grid[row][col]===null) {
			currentBoard.grid[row][col] = "ship"
		}
		this.setState({
			board: currentBoard
		})
	},


	startNewGame:function() {
		this.setState({
			started: true,
		})
	},
	makePieceSelection:function(selection){
		console.log(selection)
		this.setState({
			selected: selection
		})
	},
	changePieceDirection:function(piece, direction){
		switch (piece) {
			case "aircraft-carrier": 
				this.setState({
					aircraftCarrier: direction,
				});
				break;

			case "battleship": 
				this.setState({
					battleship: direction
				});
				break;
			case "destroyer":
				this.setState({
					destroyer: direction
				});
				break;
			case "submarine":
				this.setState({
					submarine: direction
				});
				break;
			case "patrol-ship":
				this.setState({
					patrolShip: direction
				});
				break;
		}
	},
	render:function(){
		var toBeShown;
		if (this.state.started === null) {
			toBeShown = <NewGameButton startGame={this.startNewGame} />
		}
		else {
			toBeShown = <NewGame data={this.state} handleDirectionChange={this.changePieceDirection} handlePieceSelection={this.makePieceSelection} placePiece={this.placePiece}/>
		}
		return (
			<div id="body-container" className="debugger">
				{toBeShown}
			</div>
		)
	}
})
