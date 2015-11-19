var Board = React.createClass({
	placePiece:function(row, col){
		// 
		if (this.props.data.selected !== null) {
			// alert('this is coding')
			//send coordinates
			this.props.placePiece(row, col)
		}
	},
	render:function(){
		return (
			<div id="board-container">
				<table className="board" cellPadding="0" cellSpacing="0">
					<thead>
						<tr>
							<th> </th>	
							<th>A</th>
							<th>B</th>
							<th>C</th>
							<th>D</th>
							<th>E</th>
							<th>F</th>
							<th>G</th>
							<th>H</th>
							<th>I</th>
							<th>J</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th colSpan="1">1</th>
							<GridCell row={0} col={0} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][0]} />
							<GridCell row={0} col={1} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][1]} />
							<GridCell row={0} col={2} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][2]} />
							<GridCell row={0} col={3} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][3]} />
							<GridCell row={0} col={4} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][4]} />
							<GridCell row={0} col={5} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][5]} />
							<GridCell row={0} col={6} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][6]} />
							<GridCell row={0} col={7} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][7]} />
							<GridCell row={0} col={8} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][8]} />
							<GridCell row={0} col={9} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[0][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">2</th>
							<GridCell row={1} col={0} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][0]} />
							<GridCell row={1} col={1} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][1]} />
							<GridCell row={1} col={2} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][2]} />
							<GridCell row={1} col={3} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][3]} />
							<GridCell row={1} col={4} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][4]} />
							<GridCell row={1} col={5} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][5]} />
							<GridCell row={1} col={6} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][6]} />
							<GridCell row={1} col={7} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][7]} />
							<GridCell row={1} col={8} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][8]} />
							<GridCell row={1} col={9} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[1][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">3</th>
							<GridCell row={2} col={0} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][0]} />
							<GridCell row={2} col={1} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][1]} />
							<GridCell row={2} col={2} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][2]} />
							<GridCell row={2} col={3} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][3]} />
							<GridCell row={2} col={4} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][4]} />
							<GridCell row={2} col={5} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][5]} />
							<GridCell row={2} col={6} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][6]} />
							<GridCell row={2} col={7} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][7]} />
							<GridCell row={2} col={8} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][8]} />
							<GridCell row={2} col={9} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[2][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">4</th>
							<GridCell row={3} col={0} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][0]} />
							<GridCell row={3} col={1} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][1]} />
							<GridCell row={3} col={2} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][2]} />
							<GridCell row={3} col={3} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][3]} />
							<GridCell row={3} col={4} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][4]} />
							<GridCell row={3} col={5} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][5]} />
							<GridCell row={3} col={6} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][6]} />
							<GridCell row={3} col={7} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][7]} />
							<GridCell row={3} col={8} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][8]} />
							<GridCell row={3} col={9} placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[3][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">5</th>
							<GridCell row={4} col={0}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][0]} />
							<GridCell row={4} col={1}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][1]} />
							<GridCell row={4} col={2}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][2]} />
							<GridCell row={4} col={3}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][3]} />
							<GridCell row={4} col={4}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][4]} />
							<GridCell row={4} col={5}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][5]} />
							<GridCell row={4} col={6}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][6]} />
							<GridCell row={4} col={7}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][7]} />
							<GridCell row={4} col={8}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][8]} />
							<GridCell row={4} col={9}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[4][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">6</th>
							<GridCell row={5} col={0}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][0]} />
							<GridCell row={5} col={1}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][1]} />
							<GridCell row={5} col={2}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][2]} />
							<GridCell row={5} col={3}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][3]} />
							<GridCell row={5} col={4}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][4]} />
							<GridCell row={5} col={5}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][5]} />
							<GridCell row={5} col={6}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][6]} />
							<GridCell row={5} col={7}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][7]} />
							<GridCell row={5} col={8}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][8]} />
							<GridCell row={5} col={9}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[5][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">7</th>
							<GridCell row={6} col={0}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][0]} />
							<GridCell row={6} col={1}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][1]} />
							<GridCell row={6} col={2}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][2]} />
							<GridCell row={6} col={3}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][3]} />
							<GridCell row={6} col={4}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][4]} />
							<GridCell row={6} col={5}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][5]} />
							<GridCell row={6} col={6}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][6]} />
							<GridCell row={6} col={7}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][7]} />
							<GridCell row={6} col={8}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][8]} />
							<GridCell row={6} col={9}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[6][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">8</th>
							<GridCell row={7} col={0}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][0]} />
							<GridCell row={7} col={1}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][1]} />
							<GridCell row={7} col={2}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][2]} />
							<GridCell row={7} col={3}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][3]} />
							<GridCell row={7} col={4}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][4]} />
							<GridCell row={7} col={5}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][5]} />
							<GridCell row={7} col={6}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][6]} />
							<GridCell row={7} col={7}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][7]} />
							<GridCell row={7} col={8}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][8]} />
							<GridCell row={7} col={9}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[7][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">9</th>
							<GridCell row={8} col={0}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][0]} />
							<GridCell row={8} col={1}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][1]} />
							<GridCell row={8} col={2}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][2]} />
							<GridCell row={8} col={3}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][3]} />
							<GridCell row={8} col={4}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][4]} />
							<GridCell row={8} col={5}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][5]} />
							<GridCell row={8} col={6}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][6]} />
							<GridCell row={8} col={7}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][7]} />
							<GridCell row={8} col={8}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][8]} />
							<GridCell row={8} col={9}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[8][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">10</th>
							<GridCell row={9} col={0}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][0]} />
							<GridCell row={9} col={1}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][1]} />
							<GridCell row={9} col={2}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][2]} />
							<GridCell row={9} col={3}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][3]} />
							<GridCell row={9} col={4}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][4]} />
							<GridCell row={9} col={5}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][5]} />
							<GridCell row={9} col={6}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][6]} />
							<GridCell row={9} col={7}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][7]} />
							<GridCell row={9} col={8}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][8]} />
							<GridCell row={9} col={9}  placePiece={this.placePiece} data={this.props.data}cell={this.props.data.board.grid[9][9]} />
							</tr>
						</tbody>
				</table>
			</div>

		)
	}
})