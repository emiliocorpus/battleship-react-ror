var Body = React.createClass({
	getInitialState:function(){
		return {
			started:null,
			board: { 
					grid: {
							0: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							1: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							2: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							3: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							4: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							5: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							6: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							7: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							8: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
							9: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
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
		var pieceCheck = 0
		var currentBoard = this.state.board
		var selectedPiece = this.state.selected.piece
		switch (this.state.selected.piece) {
			case "aircraftCarrier":
				shipLength = 4
			break;

			case "battleship":
				shipLength = 3
			break;

			case "destroyer":
				shipLength = 3
			break;

			case "submarine":
				shipLength = 2
			break;

			case "patrolShip":
				shipLength = 1
			break;
		}
		for (var i=0; i <= shipLength; i++ ) {
			if (this.state.board.grid[row][col] !== "empty")
				pieceCheck += 1
		}
		if (pieceCheck === 0) {
				pieceCheck = 1
			for (var i=0; i <= shipLength; i++ ) {
				currentBoard.grid[row][col+i] = "ship"
			}
		}
		this.setPieceAndBoard(selectedPiece, pieceCheck, currentBoard)
	},
	verticalCheck:function(row,col){
		var shipLength
		var pieceCheck = 0
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
				shipLength = 3
			break;

			case "submarine":
				shipLength = 2
			break;

			case "patrolShip":
				shipLength = 1
			break;
		}
		for (var i=0; i <= shipLength; i++ ) {
			if (this.state.board.grid[row][col] !== "empty")
				pieceCheck += 1
		}
		if (pieceCheck === 0) {
			for (var i=0; i <= shipLength; i++ ) {
				pieceCheck = 1
				currentBoard.grid[row+i][col] = "ship"
			}
		}
		this.setPieceAndBoard(selectedPiece, pieceCheck, currentBoard)
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
		console.log(selection)
		switch (selection.piece) {
			case "aircraftCarrier": 
				this.setState({
					aircraftCarrier: selection.direction,
				});
				break;

			case "battleship": 
				this.setState({
					battleship: selection.direction
				});
				break;
			case "destroyer":
				this.setState({
					destroyer: selection.direction
				});
				break;
			case "submarine":
				this.setState({
					submarine: selection.direction
				});
				break;
			case "patrolShip":
				this.setState({
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
