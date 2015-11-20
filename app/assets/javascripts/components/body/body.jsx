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
			userPieces: {
				aircraftCarrier: {
					direction:"hz",
					piecesLeft: 1,
					shipLength:4,
					ships: [{ placed: false, health: 5,direction: "hz"}]
				},
				battleship: {
					direction:"hz",
					piecesLeft: 2,
					shipLength:3,
					ships:[{ placed: false, health: 4,direction: "hz"}, { placed: false, health: 4,direction: "hz"}]
				},
				destroyer: {
					direction:"hz",
					piecesLeft:2,
					shipLength: 2,
					ships:[{ placed: false, health: 3,direction: "hz"},  {placed: false, health: 3,direction: "hz"}]
				},
				submarine: {
					direction:"hz",
					piecesLeft:2,
					shipLength:2,
					ships:[{ placed: false, health: 2,direction: "hz"},  {placed: false, health: 2,direction: "hz"}]
				},
				patrolShip: {
					direction:"hz",
					piecesLeft: 2,
					shipLength: 1,
					ships: [{ placed: false, health: 2,direction: "hz"}, { placed: false, health: 2, direction: "hz"}]
				}
			},
			selected: {piece:0,direction:0}
		}
	},

	// PLACING PIECES
	makePieceSelection:function(selection){
		console.log(selection)
		this.setState({
			selected: selection
		})
	},
	placePiece:function(row, col){
		var selectedPiece = this.state.selected.piece
		if (this.state.userPieces[selectedPiece].piecesLeft <= 0 ||this.state.selected.piece===0) {
			return
		}		
		else {
			this.validPlacementCheck(row,col)
		}
	},
	validPlacementCheck:function(row, col){
		var direction = this.state.selected.direction
		var selectedPiece = this.state.selected.piece
		if (direction === "hz") {
			this.horizontalCheck(selectedPiece, row, col)
		}
		else {
			this.verticalCheck(selectedPiece, row, col)
		}
	},
	horizontalCheck:function(selectedPiece, row, col){
		var shipLength = this.state.userPieces[selectedPiece].shipLength
		var userBoard = this.state.board.grid
		var userPieces = this.state.userPieces
		var piecesLeft = this.state.userPieces.piecesLeft
		var valid = 1

		//CHECK TO SEE IF SHIP WILL GO OFF BOARD OR IF THERE ARE ANY MORE PIECES
		if (col + shipLength > 9 || piecesLeft <= 0) {
			valid = 0
		}
		//IF POSSIBLE VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if ( userBoard[row][col+i].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid')
				}
			}
		}

		// PLACES THE PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				userBoard[row][col+i].cellType = "ship"
				userBoard[row][col+i].shipType = selectedPiece
				userBoard[row][col+i].shipId = (this.state[selectedPiece + "Amount"] + 1)
			}
				var copiedPieces = this.state.userPieces
				copiedPieces[selectedPiece].piecesLeft -= valid
				if (copiedPieces[selectedPiece].ships[0].placed !== true) {
					copiedPieces[selectedPiece].ships[0].placed = true
				}
				else {
					copiedPieces[selectedPiece].ships[1].placed = true
				}
			this.setState({
				board: {grid: userBoard},
				userPieces: copiedPieces
			})
		}

	},
	verticalCheck:function(selectedPiece, row, col){
		var shipLength = this.state.userPieces[selectedPiece].shipLength
		var userBoard = this.state.board.grid
		var userPieces = this.state.userPieces
		var piecesLeft = this.state.userPieces.piecesLeft
		var valid = 1
		//CHECK TO SEE IF SHIP WILL GO OFF BOARD
		if (row + shipLength > 9 || piecesLeft <= 0) {
			valid = 0
		}
		//IF POSSIBLE VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if (userBoard[row+i][col].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid')
				}
			}
		}

		// PLACES THE PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				userBoard[row+i][col].cellType = "ship"
				userBoard[row+i][col].shipType = selectedPiece
				userBoard[row+i][col].shipId = (this.state[selectedPiece + "Amount"] + 1)
			}
				var copiedPieces = this.state.userPieces
				copiedPieces[selectedPiece].piecesLeft -= valid
				if (copiedPieces[selectedPiece].ships[0].placed !== true) {
					copiedPieces[selectedPiece].ships[0].placed = true
				}
				else {
					copiedPieces[selectedPiece].ships[1].placed = true
				}
			this.setState({
				board: {grid: userBoard},
				userPieces: copiedPieces
			})
		}
	},










	startNewGame:function() {
		this.setState({
			started: true,
		})
	},
	
	changePieceDirection:function(selection){
		console.log(selection)
		var copiedPieces = this.state.userPieces
		var totalPieces = copiedPieces[selection.piece].ships.length
		copiedPieces[selection.piece].direction = selection.direction
		debugger
		this.setState({
				selected: selection,
				userPieces: copiedPieces
		});
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
			<div id="body-container" className="">
				{toBeShown}
			</div>
		)
	}
})
