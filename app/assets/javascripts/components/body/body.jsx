var Body = React.createClass({
	getInitialState:function(){
		return {
			board: false,
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
	startNewGame:function() {
		this.setState({
			board:true
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
		if (this.state.board === false) {
			toBeShown = <NewGameButton startGame={this.startNewGame} />
		}
		else {
			toBeShown = <NewGame data={this.state} handleDirectionChange={this.changePieceDirection} handlePieceSelection={this.makePieceSelection}/>
		}
		return (
			<div id="body-container" className="debugger">
				{toBeShown}
			</div>
		)
	}
})
