var Body = React.createClass({

	// SET INITIAL PARAMETER
	getInitialState:function(){
		return {
					started:null,
					board: { 
							grid: {
									0: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									1: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									2: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									3: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									4: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									5: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									6: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									7: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									8: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}],
									9: [{cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}, {cellType: "empty", shipType:null,hitStatus:null}]
							}
					},
					blankPieces: { 
						aircraftCarrier: {direction:"hz",	piecesLeft: 1, shipLength:4	},
						battleship: { direction:"hz", piecesLeft: 2, shipLength:3	},
						destroyer: {direction:"hz",piecesLeft:2,shipLength: 2 },
						submarine: {direction:"hz",piecesLeft:2,shipLength:2},			
						patrolShip: {direction:"hz",piecesLeft: 2,shipLength: 1},
						remaining: 9
					},
					rowLayout: {
						0: 'A',
						1: 'B',
						2: 'C',
						3: 'D',
						4: 'E',
						5: 'F',
						6: 'G',
						7: 'H',
						8: 'I',
						9: 'J'
					},
					lastShotFired: {
						coordinates: null,
						targetStatus: null
					},
					timeouts: null,

					blankBoard: {
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
							ships:[{ placed: false, health: 2,direction: "hz"},  {placed: false, health: 2,direction: "hz"}]
						},
						patrolShip: {
							direction:"hz",
							piecesLeft: 2,
							shipLength: 1,
							ships: [{ placed: false, health: 2,direction: "hz"}, { placed: false, health: 2, direction: "hz"}]
						}
					},
					computerPieces: { 
						aircraftCarrier: {direction:"hz",	piecesLeft: 1, shipLength:4	},
						battleship: { direction:"hz", piecesLeft: 2, shipLength:3	},
						destroyer: {direction:"hz",piecesLeft:2,shipLength: 2 },
						submarine: {direction:"hz",piecesLeft:2,shipLength:2},			
						patrolShip: {direction:"hz",piecesLeft: 2,shipLength: 1},
						remaining: 9
					},
					computerBoard: {
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
					computerCheckBoard: {
									0: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									1: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									2: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									3: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									4: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									5: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									6: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									7: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									8: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}],
									9: [{cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}, {cellType: "empty"}]
					},
					lastComputerGuess: {
						hit: null,
						coords: {row: null, col: null}
					},
					selected: {piece:0,direction:0},
					previousStatesPriorToStart: [],
					currentTurn: "user"
		}
	},

	// FUNCTION THAT PROPERLY COPIES OBJECT
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

	// FUNCTIONS THAT INITIATE CHANGES IN STATE    i.e. game setup, and 
	startNewGame:function() {
		this.setState({
			started: 'placing pieces',
		})
	},
	commenceGame:function(){
		this.generateComputerBoard()
		this.setState({
			started: 'game commenced'
		})
	},

	// FUNCTIONS FOR USER BOARD SETUP
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

	// PLACING USER PIECES
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
	changePieceDirection:function(selection){
		var copiedPieces = this.makeClone(this.state.userPieces)
		var totalPieces = this.makeClone(copiedPieces[selection.piece].ships.length)
		copiedPieces[selection.piece].direction = selection.direction
		this.setState({
				selected: selection,
				userPieces: copiedPieces
		});
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
		//IF  VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if ( newBoard[row][col+i].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid')
				}
			}
		}
		// CHECK FOR ADJACENT PIECES AT HEAD AND TAIL OF SHIP
		if (valid) {
			// O CHECK
			if (col - 1 > -1 ) { 
				if( newBoard[row][col-1].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
			// TAIL CHECK
			if (col + shipLength + 1 < 10 ) { 
				if( newBoard[row][col+shipLength+1].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
		}
		// CHECK FOR ADJACENT PIECES ON SIDES OF SHIP
		if (valid) {
			// TOP SIDE CHECK
			if (row -1 > -1) {
				for (var i=0; i < shipLength+1; i++) {
					if( newBoard[row-1][col+i].cellType !== "empty") {
						valid = 0
						console.log("invalid")
					}
				}
			}
			// BOTTOM SIDE CHECK
			if (row + 1 < 10) {
				for (var i=0; i < shipLength+1; i++) {
					if( newBoard[row+1][col+i].cellType !== "empty") {
						valid = 0
						console.log("invalid")
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
				
				newBoard[row][col+i].shipId =  i + 1
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
					console.log('invalid')
				}

			}
		}
		// CHECK FOR ADJACENT PIECES AT HEAD AND TAIL OF SHIP
		if (valid) {
			// HEAD CHECK
			if (row - 1 > -1 ) { 
				if( newBoard[row-1][col].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
			// TAIL CHECK
			if (row + shipLength + 1 < 10 ) { 
				if( newBoard[row+shipLength+1][col].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
		}
		// CHECK FOR ADJACENT PIECES ON SIDES OF SHIP
		if (valid) {
			// LEFT SIDE CHECK
			if (col -1 > -1) {
				for (var i=0;i< shipLength+1; i++){
					if( newBoard[row+i][col-1].cellType !== "empty") {
						valid = 0
						console.log("invalid")
					}
				}
			}

			// RIGHT SIDE CHECK
			if (col + 1 < 10) {
				for (var i=0; i < shipLength+1;i++) {
					if( newBoard[row+i][col+1].cellType !== "empty") {
						valid = 0
						console.log("invalid")
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
				newBoard[row+i][col].shipId = i + 1
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


	// GENERATE RANDOM USER BOARD
	generateRandomUserBoard:function() {
		this.generateComputerBoard('user')
		this.generateComputerBoard('computer')
	},

	// COMPUTER BOARD SETUP (RANDOMIZED BOARD)
	generateComputerBoard:function(boardType) {
		var shipType;
		var direction;
		var row;
		var col;
		var randomBoard = this.makeClone(this.state.blankBoard);
		var pieces = this.makeClone(this.state.blankPieces);
		var boardCountRestart = 100
		while (pieces.remaining !== 0) {
				// GENERATE NEXT SHIP TYPE TO BE PLACED
				shipType = this.cycleNextShip(pieces)
				// GENERATE RANDOM DIRECTION
				direction = Math.floor((Math.random() * 2) + 0);
					if (direction===0) {
						direction = "hz"
					}
					else {
						direction = "vert"
					}
				// GENERATE RANDOM GRID COORDINATES
				row = Math.floor((Math.random() * 10) + 0);
				col = Math.floor((Math.random() * 10) + 0);

				var validPlacement;
				if (direction === "hz") {
					validPlacement = this.computerHorizontalCheck(randomBoard, pieces, shipType, row, col)
				}
				else {
					validPlacement = this.computerVerticalCheck(randomBoard, pieces, shipType, row, col)

				}

				if	(validPlacement !== null) {
					
					randomBoard = validPlacement.computerBoard
					pieces = validPlacement.computerPieces
					boardCountRestart = 100
					
				}
				else {
					boardCountRestart -= 1
				}
			
			if (boardCountRestart === 0) {
				break
				this.handleComputerBoardReset()
				this.generateComputerBoard()
				
			}
		}
			
		if (pieces.remaining === 0 ) {
			if (boardType === "computer") {
				this.setState({
					computerPieces: pieces,
					computerBoard: randomBoard
				})
			}
			else {
				this.setState({
					userPieces: pieces,
					board: {grid: randomBoard}
				})

			}	
		}
	},
	handleComputerBoardReset:function() {
		this.setState({
			computerBoard: {
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
			computerPieces: { 
				aircraftCarrier: {direction:"hz",	piecesLeft: 1, shipLength:4	},
				battleship: { direction:"hz", piecesLeft: 2, shipLength:3	},
				destroyer: {direction:"hz",piecesLeft:2,shipLength: 2 },
				submarine: {direction:"hz",piecesLeft:2,shipLength:2},			
				patrolShip: {direction:"hz",piecesLeft: 2,shipLength: 1},
				remaining: 9
			}
		})
	},
	cycleNextShip:function(computerPieces) {
		var piecesLeft = ["aircraftCarrier", "battleship", "destroyer", "submarine", "patrolShip"]
		if (computerPieces.aircraftCarrier.piecesLeft === 0) {
			piecesLeft.shift()
		}
		if (computerPieces.battleship.piecesLeft === 0) {
			piecesLeft.shift()
		}
		if (computerPieces.destroyer.piecesLeft === 0) {
			piecesLeft.shift()
		}
		if (computerPieces.submarine.piecesLeft === 0) {
			piecesLeft.shift()
		}
		if (computerPieces.patrolShip.piecesLeft === 0) {
			piecesLeft.shift()
		}

		if (piecesLeft.length > 0) {
			return piecesLeft[0]
		}
		else {
			return null
		}
	},
	computerHorizontalCheck:function(oldBoard, computerPieces, selectedPiece, row, col){
		var shipLength = this.state.computerPieces[selectedPiece].shipLength
		var piecesLeft = computerPieces.remaining
		var valid = 1
		var newBoard = oldBoard
		//CHECK TO SEE IF SHIP WILL GO OFF BOARD OR IF THERE ARE ANY MORE PIECES
		if (col + shipLength > 9 || piecesLeft <= 0) {
			valid = 0
		}
		//IF  VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if ( oldBoard[row][col+i].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid')
				}
			}
		}
		// CHECK FOR ADJACENT PIECES AT HEAD AND TAIL OF SHIP
		if (valid) {
			// O CHECK
			if (col - 1 > -1 ) { 
				if( oldBoard[row][col-1].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
			// TAIL CHECK
			if (col + shipLength + 1 < 10 ) { 
				if( oldBoard[row][col+shipLength+1].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
		}
		// CHECK FOR ADJACENT PIECES ON SIDES OF SHIP
		if (valid) {
			// TOP SIDE CHECK
			if (row -1 > -1) {
				for (var i=0; i < shipLength+1; i++) {
					if( oldBoard[row-1][col+i].cellType !== "empty") {
						valid = 0
						console.log("invalid")
					}
				}
			}
			// BOTTOM SIDE CHECK
			if (row + 1 < 10) {
				for (var i=0; i < shipLength+1; i++) {
					if( oldBoard[row+1][col+i].cellType !== "empty") {
						valid = 0
						console.log("invalid")
					}
				}
			}
		}
		// PLACES THE PIECE
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				newBoard[row][col+i].cellType = "ship"
				newBoard[row][col+i].shipType = selectedPiece
				newBoard[row][col+i].shipId = i + 1
			}
				var copiedPieces = computerPieces
				copiedPieces[selectedPiece].piecesLeft -= 1
				copiedPieces.remaining -= 1
			var updatedBoardAndPieces = {computerBoard: newBoard, computerPieces: copiedPieces}
			return updatedBoardAndPieces
		}
		else {
			return null
		}
	},
	computerVerticalCheck:function(oldBoard, computerPieces, selectedPiece, row, col){
		var shipLength = this.state.computerPieces[selectedPiece].shipLength
		var piecesLeft = computerPieces.remaining
		var valid = 1
		var newBoard = oldBoard
		//CHECK TO SEE IF SHIP WILL GO OFF BOARD
		if (row + shipLength > 9 || piecesLeft <= 0) {
			valid = 0
		}
		//IF POSSIBLE VALID PLACE, CHECK EACH CELL IN DIRECTION OF PIECE LAYOUT
		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				if (oldBoard[row+i][col].cellType !== "empty"  ) {
					valid = 0
					console.log('invalid')
				}

			}
		}
		// CHECK FOR ADJACENT PIECES AT HEAD AND TAIL OF SHIP
		if (valid) {
			// HEAD CHECK
			if (row - 1 > -1 ) { 
				if( oldBoard[row-1][col].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
			// TAIL CHECK
			if (row + shipLength + 1 < 10 ) { 
				if( oldBoard[row+shipLength+1][col].cellType !== "empty") {
					valid = 0
					console.log("invalid")
				}
			}
		}
		// CHECK FOR ADJACENT PIECES ON SIDES OF SHIP
		if (valid) {
			// LEFT SIDE CHECK
			if (col -1 > -1) {
				for (var i=0;i< shipLength+1; i++){
					if( oldBoard[row+i][col-1].cellType !== "empty") {
						valid = 0
						console.log("invalid")
					}
				}
			}

			// RIGHT SIDE CHECK
			if (col + 1 < 10) {
				for (var i=0; i < shipLength+1;i++) {
					if( oldBoard[row+i][col+1].cellType !== "empty") {
						valid = 0
						console.log("invalid")
					}
				}
			}
		}
		// PLACES THE PIECE

		if (valid) {
			for (var i=0; i <= shipLength; i++) {
				newBoard[row+i][col].cellType = "ship"
				newBoard[row+i][col].shipType = selectedPiece
				newBoard[row+i][col].shipId = i + 1

			}
			var copiedPieces = computerPieces
			copiedPieces[selectedPiece].piecesLeft -= 1
			copiedPieces.remaining -= 1
			var updatedBoardAndPieces = {computerBoard: newBoard, computerPieces: copiedPieces}
			return updatedBoardAndPieces
		}
		else {
			return null
		}
	},

	clearAllTimeouts:function(timeouts){
		var timeouts = this.makeClone(this.state.timeouts)
		clearTimeout(timeouts)
	},




	// USER GUESS
	handleFireShot:function(row,col) {
		this.clearAllTimeouts()
		var turn = this.makeClone(this.state.currentTurn);
		var currentHits = this.makeClone(this.state.hitCheckBoard)
		var computerBoard = this.makeClone(this.state.computerBoard)
		var cell = computerBoard[row][col].cellType
		var hitStatus
		if (currentHits[row][col].cellType !== "empty") {
			return
		}
		else {
			switch (cell) {
				case 'empty':
					if (currentHits[row][col].cellType === "empty") {
						currentHits[row][col].cellType = 'miss'
						hitStatus = 'miss'
						turn = "computer"

					}
					break;
				case 'ship':
					if (currentHits[row][col].cellType === "empty") {
						currentHits[row][col].cellType = 'hit'
						hitStatus = 'hit'
						turn = 'computer'
					}
					break;
			}
		}
		debugger
		this.translateCoordinates(row, col, hitStatus)
		this.setState({
			currentTurn: turn,
			hitCheckBoard: currentHits
		})
		if (turn === "computer") {
			var timeout = setTimeout(this.handleComputerGuess(), 10000)
			this.setState({
				timeouts: timeout
			})
		}
	},

	// COMPUTER GUESS
	handleComputerGuess:function(){
		this.determineCoords()
	},
	determineCoords:function(){
		var lastGuess= this.makeClone(this.state.lastComputerGuess)
		var newGuess
		
		if (lastGuess.hit === null) {
			newGuess = this.generateRandomComputerGuess()
		}
		else {
			newGuess = this.handleComputerLogic()
		}
		this.letComputerCheck(newGuess)
	},
	letComputerCheck:function(guess) {
		var newCheck = this.makeClone(this.state.computerCheckBoard)
		var newGuess = this.makeClone(this.state.lastComputerGuess)
		var userBoard = this.makeClone(this.state.board.grid)
		var hitStatus
		
		if (userBoard[guess.row][guess.col].cellType === "ship") {
			newCheck[guess.row][guess.col].cellType = "hit"
			hitStatus = "hit"
			newGuess.hit = true
			newGuess.coords = {row: guess.row, col: guess.col}
			userBoard[guess.row][guess.col].hitStatus = true
			
		}
		else {
			newCheck[guess.row][guess.col].cellType = "miss"
			hitStates = "miss"
			newGuess.hit = null
			newGuess.coords = {row: guess.row, col: guess.col}
			userBoard[guess.row][guess.col].hitStatus = true
			
		}
		this.translateCoordinates(guess.row, guess.col, hitStatus)
		this.setState({
			computerCheckBoard: newCheck,
			board: {grid: userBoard},
			lastComputerGuess: newGuess,
			turn: "user"
		})
	},

	translateCoordinates:function(row, col, hitStatus) {
		var newRow = this.state.rowLayout[row]
		var newCol =  col.toString()
		var newCoords = newRow + newCol
		this.setState({
			lastShotFired: {
				coordinates:newCoords,
				targetStatus: hitStatus
			}
		})
	},
	handleComputerLogic:function() {
		var coordinates = this.makeClone(this.state.lastComputerGuess.coords)
		var row = coordinates.row
		var col = coordinates.col
		var computerCheck = this.makeClone(this.state.computerCheckBoard) 
		var newGuess = {row: coordinates.row, col: coordinates.col}
		
		if (row + 1 < 10 && computerCheck[row + 1][col].cellType === "empty") {
			
			newGuess.row += 1
			return newGuess
		}
		else if (row -1 > -1 && computerCheck[row-1][col].cellType === "empty") {
			
			newGuess.row -= 1
			return newGuess
		}
		else if(col + 1 < 10 && computerCheck[row][col+1].cellType === "empty") {
			
			newGuess.col += 1
			return newGuess
		}
		else if (col - 1 > -1 && computerCheck[row][col-1].cellType === "empty") {
			
			newGuess.col -= 1
			return newGuess
		}
		
		else {
			newGuess = this.generateRandomComputerGuess()
			return newGuess
		}
	},
	generateRandomComputerGuess:function() {
		var row =  Math.floor((Math.random() * 10) + 0)
		var col =  Math.floor((Math.random() * 10) + 0)		
		var computerCheck = this.makeClone(this.state.computerCheckBoard) 
		
		if (computerCheck[row][col].cellType === "empty") {
			return {row: row, col: col}
		}
		else {
			this.generateRandomComputerGuess()
		}
	},

	// RENDERS PAGE
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
				toBeShown = <NewGame data={this.state} handleDirectionChange={this.changePieceDirection} handlePieceSelection={this.makePieceSelection} placePiece={this.placePiece} handleRemovePiece={this.undoLastMove} piecesLeft={totalPiecesLeft} handleStart={this.commenceGame} generateRandomBoard={this.generateRandomUserBoard}/>
				break;
			case 'game commenced':
				toBeShown = <CurrentGame data={this.state} handleFireShot = {this.handleFireShot} />
				break;
		}
		return (
			<div id="body-container" className="">
				{toBeShown}
			</div>
		)
	}
})
