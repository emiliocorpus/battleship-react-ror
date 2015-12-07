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
					hitCheckBoard: {
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
							ships:[{ placed: false, health: 2,direction: "hz"},  {placed: false, health: 2,direction: "hz"}]//shiplength=health?
						},
						patrolShip: {
							direction:"hz",
							piecesLeft: 2,
							shipLength: 1,
							ships: [{ placed: false, health: 2,direction: "hz"}, { placed: false, health: 2, direction: "hz"}]
						}
					},
					selected: {piece:0,direction:0},
					previousStatesPriorToStart: []
		}
	},
	makeClone:function(obj) {
	    var copy;
	        // Handle the 3 simple types, and null or undefined
	        if (null == obj || "object" != typeof obj) return obj;
	        // Handle Array
	        if (obj instanceof Array) {
	            copy = [];
	            for (var i = 0, len = obj.length; i < len; i++) {
	                copy[i] = this.makeClone(obj[i]);
	            }
	            return copy;
	        }
	        // Handle Object
	        if (obj instanceof Object) {
	            copy = {};
	            for (var attr in obj) {
	                if (obj.hasOwnProperty(attr)) copy[attr] = this.makeClone(obj[attr]);
	            }
	            return copy;
	        }

	        throw new Error("Unable to copy obj! Its type isn't supported.");
	},
	saveLastBoardState:function(lastBoard){
		var previous = this.makeClone(this.state.previousStatesPriorToStart)
		var prevPieces = this.makeClone(this.state.userPieces)
		var last = {
			prevBoard: lastBoard,
			prevPieces: prevPieces
		}
		previous.push(last)
		this.setState({
			previousStatesPriorToStart: previous
		})
	},
	undoLastMove:function(){
		var previousStates = this.state.previousStatesPriorToStart
		var lastState = previousStates.pop()
		this.setState({
			previousStatesPriorToStart: previousStates,
			board: {grid: lastState.prevBoard },
			userPieces:lastState.prevPieces
		})
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
		if (selectedPiece===0 || this.state.userPieces[selectedPiece].piecesLeft <= 0) {
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
		var shipLength = this.makeClone(this.state.userPieces[selectedPiece].shipLength)
		var lastBoard = this.makeClone(this.state.board.grid)
		var newBoard = this.makeClone(this.state.board.grid)
		var userPieces = this.makeClone(this.state.userPieces)
		var piecesLeft = this.makeClone(this.state.userPieces.piecesLeft)
		var valid = 1
		//CHECK TO SEE IF SHIP WILL GO OFF BOARD OR IF THERE ARE ANY MORE PIECES
		if (col + shipLength > 9 || piecesLeft <= 0) {
			valid = 0
		}
		//IF POSSIBLE VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if ( newBoard[row][col+i].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid check hz1 failed')
				}
			}
		}
		// CHECK FOR ADJACENT PIECES AT HEAD AND TAIL OF SHIP
		if (valid) {
			// HEAD CHECK
			if (col - 1 > -1 ) { 
				if( newBoard[row][col-1].cellType !== "empty") {
					valid = 0
					console.log("invalid check hz2 failed")
				}
			}
			// TAIL CHECK
			if (col + shipLength + 1 < 10 ) { 
				if( newBoard[row][col+shipLength+1].cellType !== "empty") {
					valid = 0
					console.log("invalid check hz3 failed")
				}
			}
		}
		// CHECK FOR ADJACENT PIECES ON SIDES OF SHIP
		if (valid) {
			// TOP SIDE CHECK
			if (row -1 > -1) {
				for (var i=0; i <= shipLength; i++) {
					if( newBoard[row-1][col+i].cellType !== "empty") {
						valid = 0
						console.log("invalid check hz4 failed")
					}
				}
			}
			// BOTTOM SIDE CHECK
			if (row + 1 < 10) {
				for (var i=0; i <= shipLength; i++) {
					if( newBoard[row+1][col+i].cellType !== "empty") {
						valid = 0
						console.log("invalid check hz5 failed")
					}
				}
			}
		}
		// PLACES THE PIECE
		if (valid) {
			this.saveLastBoardState(lastBoard)
			for (var i=0; i <= shipLength; i++) {
				newBoard[row][col+i].cellType = "ship"
				newBoard[row][col+i].shipType = selectedPiece
				newBoard[row][col+i].shipId = (this.state[selectedPiece + "Amount"] + 1)
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
				board: {grid: newBoard},
				userPieces: copiedPieces
			})
		}
	},
	verticalCheck:function(selectedPiece, row, col){
		var shipLength = this.makeClone(this.state.userPieces[selectedPiece].shipLength)
		var lastBoard = this.makeClone(this.state.board.grid)
		var newBoard = this.makeClone(this.state.board.grid)
		var userPieces = this.makeClone(this.state.userPieces)
		var piecesLeft = this.makeClone(this.state.userPieces.piecesLeft)
		var valid = 1
		//CHECK TO SEE IF SHIP WILL GO OFF BOARD
		if (row + shipLength > 9 || piecesLeft <= 0) {
			valid = 0
		}
		//IF POSSIBLE VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE LAYOUT
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if (newBoard[row+i][col].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid check v1 failed')
				}

			}
		}
		// CHECK FOR ADJACENT PIECES AT HEAD AND TAIL OF SHIP
		if (valid) {
			// HEAD CHECK
			if (row - 1 > -1 ) { 
				if( newBoard[row-1][col].cellType !== "empty") {
					valid = 0
					console.log("invalid check v2 failed")
				}
			}
			// TAIL CHECK
			if (row + shipLength + 1 < 10 ) { 
				if( newBoard[row+shipLength+1][col].cellType !== "empty") {
					valid = 0
					console.log("invalid check v3 failed")
				}
			}
		}
		// CHECK FOR ADJACENT PIECES ON SIDES OF SHIP
		if (valid) {
			// LEFT SIDE CHECK
			if (col -1 > -1) {
				for (var i=0;i <= shipLength; i++){
					if( newBoard[row+i][col-1].cellType !== "empty") {
						valid = 0
						console.log("invalid check v4 failed")
					}
				}
			}

			// RIGHT SIDE CHECK
			if (col + 1 < 10) {
				for (var i=0; i <= shipLength;i++) {
					if( newBoard[row+i][col+1].cellType !== "empty") {
						valid = 0
						console.log("invalid check v5 failed")
					}
				}
			}
		}
		// PLACES THE PIECE
		if (valid) {
			this.saveLastBoardState(lastBoard)
			for (var i=0; i <= shipLength; i++) {
				newBoard[row+i][col].cellType = "ship"
				newBoard[row+i][col].shipType = selectedPiece
				newBoard[row+i][col].shipId = (this.state[selectedPiece + "Amount"] + 1)
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
				board: {grid: newBoard},
				userPieces: copiedPieces
			})
		}
	},
	startNewGame:function() {
		this.setState({
			started: 'placing pieces',
		})
	},
	commenceGame:function(){
		this.setState({
			started: 'game commenced'
		})
	},
	changePieceDirection:function(selection){
		var copiedPieces = this.makeClone(this.state.userPieces)
		var totalPieces = this.makeClone(copiedPieces[selection.piece].ships.length)
		copiedPieces[selection.piece].direction = selection.direction
		this.setState({
				selected: selection,
				userPieces: copiedPieces
		});
	},
	render:function(){
		var toBeShown;
		var totalPiecesLeft = this.state.userPieces.aircraftCarrier.piecesLeft + this.state.userPieces.destroyer.piecesLeft + this.state.userPieces.battleship.piecesLeft + this.state.userPieces.patrolShip.piecesLeft + this.state.userPieces.submarine.piecesLeft
		if (totalPiecesLeft === 0) {
			console.log("***********************************")
		}
		switch (this.state.started) {
			case null:
				toBeShown = <NewGameButton startGame={this.startNewGame} />
				break;
			case 'placing pieces':
				toBeShown = <NewGame data={this.state} handleDirectionChange={this.changePieceDirection} handlePieceSelection={this.makePieceSelection} placePiece={this.placePiece} handleRemovePiece={this.undoLastMove} piecesLeft={totalPiecesLeft} handleStart={this.commenceGame}/>
				break;
			case 'game commenced':
				toBeShown = <CurrentGame data={this.state} />
				break;
		}
		return (
			<div id="body-container" className="">
				{toBeShown}
			</div>
		)
	}
})
