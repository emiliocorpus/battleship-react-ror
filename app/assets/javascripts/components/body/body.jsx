var Body = React.createClass({
	getInitialState:function(){
		return {
			started:null,
			board: { 
					grid: {
							0: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							1: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							2: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							3: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							4: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							5: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							6: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							7: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							8: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}],
							9: [{cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}, {cellType: "empty", shipType:null,shipId:null}]
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
			selected: {piece:null,direction:null}
		}
	},
	makePieceSelection:function(selection){
		console.log(selection)
		this.setState({
			selected: selection
		})
	},
	placePiece:function(row, col){
		if (this.state.selected.direction !== null) {
			if (this.state.selected.direction==="hz") {
				this.horizontalCheck(row,col)
			}
			else {
				this.verticalCheck(row,col)
			}
		}
	},
	horizontalCheck:function(row, col){
		var shipLength
		var cellCheck = 0
		var currentBoard = this.state.board
		var selectedPiece = this.state.selected.piece
		switch (selectedPiece) {
			case "aircraftCarrier":
				shipLength = 4
			break;

			case "battleship":
				shipLength = 3
			break;

			case "destroyer":
				shipLength = 2
			break;

			case "submarine":
				shipLength = 2
			break;

			case "patrolShip":
				shipLength = 1
			break;
		}
		if (col + shipLength < 10) {
			for (var i=0; i <= shipLength; i++ ) {
				if (col + shipLength < 10) {
					if ( this.state.board.grid[row][col+i].cellType !== "empty") {
						cellCheck = null
					}
				}
			}
			if (cellCheck !== null) {
				cellCheck = 1
				for (var i=0; i <= shipLength; i++ ) {
					currentBoard.grid[row][col+i].cellType = "ship"
					currentBoard.grid[row][col+i].shipType = selectedPiece
					currentBoard.grid[row][col+i].shipId = this.state[selectedPiece + "Amount"] + 1
				}
			}
		}
		this.setPieceAndBoard(selectedPiece, cellCheck, currentBoard)
	},
	verticalCheck:function(row,col){
		var shipLength
		var cellCheck = 0
		var currentBoard = this.state.board
		var selectedPiece = this.state.selected.piece
		switch (selectedPiece) {
			case "aircraftCarrier":
				shipLength = 4
			break;

			case "battleship":
				shipLength = 3
			break;

			case "destroyer":
				shipLength = 2
			break;

			case "submarine":
				shipLength = 2
			break;

			case "patrolShip":
				shipLength = 1
			break;
		}
		if (row+shipLength < 10) {
			for (var i=0; i <= shipLength; i++ ) {
				if ( this.state.board.grid[row+i][col].cellType !== "empty") {
					cellCheck = null
				}
			}
			if (cellCheck !== null) {
				cellCheck = 1
				for (var i=0; i <= shipLength; i++ ) {
					currentBoard.grid[row+i][col].cellType = "ship"
					currentBoard.grid[row+i][col].shipType = selectedPiece
					currentBoard.grid[row+i][col].shipId = this.state[selectedPiece + "Amount"] + 1
				}
			}
		}
		this.setPieceAndBoard(selectedPiece, cellCheck, currentBoard)
	},
	setPieceAndBoard:function(selectedPiece, piecesLeft, currentBoard) {
		debugger
		switch (selectedPiece) {
			case "aircraftCarrier":
				this.setState({
					"aircraftCarrierAmount": this.state[selectedPiece+ "Amount"] - piecesLeft,
					board: currentBoard
				});
				break;
			case "battleship":
				this.setState({
					"battleshipAmount": this.state[selectedPiece+ "Amount"] - piecesLeft,
					board: currentBoard
				});
				break;
			case "destroyer":
				this.setState({
					"destroyerAmount": this.state[selectedPiece+ "Amount"] - piecesLeft,
					board: currentBoard
				});
				break;
			case "submarine":
				this.setState({
					"submarineAmount": this.state[selectedPiece+ "Amount"] - piecesLeft,
					board: currentBoard
				});
				break;
			case "patrolShip":
				this.setState({
					"patrolShipAmount": this.state[selectedPiece+ "Amount"] - piecesLeft,
					board: currentBoard
				});
				break;
		}
	},



	startNewGame:function() {
		this.setState({
			started: true,
		})
	},
	
	changePieceDirection:function(selection){
		debugger
		console.log(selection)
		switch (selection.piece) {
			case "aircraftCarrier": 
				this.setState({
					selected: selection,
					aircraftCarrier: selection.direction,
				});
				break;

			case "battleship": 
				this.setState({
					selected: selection,
					battleship: selection.direction
				});
				break;
			case "destroyer":
				this.setState({
					selected: selection,
					destroyer: selection.direction
				});
				break;
			case "submarine":
				this.setState({
					selected: selection,
					submarine: selection.direction
				});
				break;
			case "patrolShip":
				this.setState({
					selected: selection,
					patrolShip: selection.direction
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
