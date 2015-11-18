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
	changePieceDirection:function(piece, direction){
		if (piece === "aircraft-carrier") {
				this.setState({
					aircraftCarrier: direction,
				});
		}
		else if (piece==="battleship") {
				this.setState({
					battleship: direction
				});
		}				
		else if (piece==="destroyer"){
				this.setState({
					destroyer: direction
				});
		}
		else if (piece==="submarine") {
				this.setState({
					submarine: direction
				});
		}
		else if (piece==="patrol-ship") {
				this.setState({
					patrolShip: direction
				});
		}
	},
	render:function(){
		var toBeShown;
		if (this.state.board === false) {
			toBeShown = <NewGameButton startGame={this.startNewGame} />
		}
		else {
			toBeShown = <NewGame data={this.state} handleDirectionChange={this.changePieceDirection}/>
		}
		return (
			<div id="body-container" className="debugger">
				{toBeShown}
			</div>
		)
	}
})
