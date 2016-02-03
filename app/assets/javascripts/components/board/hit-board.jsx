var HitBoard = React.createClass({
	fireShot:function(row, col){
		this.props.handleFiredShot(row, col)
	},
	render:function(){
		return (
			<div id={this.props.idType}>
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
							<HitCell row={0} col={0} fireShot={this.fireShot} cell={this.props.board[0][0]} />
							<HitCell row={0} col={1} fireShot={this.fireShot} cell={this.props.board[0][1]} />
							<HitCell row={0} col={2} fireShot={this.fireShot} cell={this.props.board[0][2]} />
							<HitCell row={0} col={3} fireShot={this.fireShot} cell={this.props.board[0][3]} />
							<HitCell row={0} col={4} fireShot={this.fireShot} cell={this.props.board[0][4]} />
							<HitCell row={0} col={5} fireShot={this.fireShot} cell={this.props.board[0][5]} />
							<HitCell row={0} col={6} fireShot={this.fireShot} cell={this.props.board[0][6]} />
							<HitCell row={0} col={7} fireShot={this.fireShot} cell={this.props.board[0][7]} />
							<HitCell row={0} col={8} fireShot={this.fireShot} cell={this.props.board[0][8]} />
							<HitCell row={0} col={9} fireShot={this.fireShot} cell={this.props.board[0][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">2</th>
							<HitCell row={1} col={0} fireShot={this.fireShot} cell={this.props.board[1][0]} />
							<HitCell row={1} col={1} fireShot={this.fireShot} cell={this.props.board[1][1]} />
							<HitCell row={1} col={2} fireShot={this.fireShot} cell={this.props.board[1][2]} />
							<HitCell row={1} col={3} fireShot={this.fireShot} cell={this.props.board[1][3]} />
							<HitCell row={1} col={4} fireShot={this.fireShot} cell={this.props.board[1][4]} />
							<HitCell row={1} col={5} fireShot={this.fireShot} cell={this.props.board[1][5]} />
							<HitCell row={1} col={6} fireShot={this.fireShot} cell={this.props.board[1][6]} />
							<HitCell row={1} col={7} fireShot={this.fireShot} cell={this.props.board[1][7]} />
							<HitCell row={1} col={8} fireShot={this.fireShot} cell={this.props.board[1][8]} />
							<HitCell row={1} col={9} fireShot={this.fireShot} cell={this.props.board[1][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">3</th>
							<HitCell row={2} col={0} fireShot={this.fireShot} cell={this.props.board[2][0]} />
							<HitCell row={2} col={1} fireShot={this.fireShot} cell={this.props.board[2][1]} />
							<HitCell row={2} col={2} fireShot={this.fireShot} cell={this.props.board[2][2]} />
							<HitCell row={2} col={3} fireShot={this.fireShot} cell={this.props.board[2][3]} />
							<HitCell row={2} col={4} fireShot={this.fireShot} cell={this.props.board[2][4]} />
							<HitCell row={2} col={5} fireShot={this.fireShot} cell={this.props.board[2][5]} />
							<HitCell row={2} col={6} fireShot={this.fireShot} cell={this.props.board[2][6]} />
							<HitCell row={2} col={7} fireShot={this.fireShot} cell={this.props.board[2][7]} />
							<HitCell row={2} col={8} fireShot={this.fireShot} cell={this.props.board[2][8]} />
							<HitCell row={2} col={9} fireShot={this.fireShot} cell={this.props.board[2][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">4</th>
							<HitCell row={3} col={0} fireShot={this.fireShot} cell={this.props.board[3][0]} />
							<HitCell row={3} col={1} fireShot={this.fireShot} cell={this.props.board[3][1]} />
							<HitCell row={3} col={2} fireShot={this.fireShot} cell={this.props.board[3][2]} />
							<HitCell row={3} col={3} fireShot={this.fireShot} cell={this.props.board[3][3]} />
							<HitCell row={3} col={4} fireShot={this.fireShot} cell={this.props.board[3][4]} />
							<HitCell row={3} col={5} fireShot={this.fireShot} cell={this.props.board[3][5]} />
							<HitCell row={3} col={6} fireShot={this.fireShot} cell={this.props.board[3][6]} />
							<HitCell row={3} col={7} fireShot={this.fireShot} cell={this.props.board[3][7]} />
							<HitCell row={3} col={8} fireShot={this.fireShot} cell={this.props.board[3][8]} />
							<HitCell row={3} col={9} fireShot={this.fireShot} cell={this.props.board[3][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">5</th>
							<HitCell row={4} col={0}  fireShot={this.fireShot} cell={this.props.board[4][0]} />
							<HitCell row={4} col={1}  fireShot={this.fireShot} cell={this.props.board[4][1]} />
							<HitCell row={4} col={2}  fireShot={this.fireShot} cell={this.props.board[4][2]} />
							<HitCell row={4} col={3}  fireShot={this.fireShot} cell={this.props.board[4][3]} />
							<HitCell row={4} col={4}  fireShot={this.fireShot} cell={this.props.board[4][4]} />
							<HitCell row={4} col={5}  fireShot={this.fireShot} cell={this.props.board[4][5]} />
							<HitCell row={4} col={6}  fireShot={this.fireShot} cell={this.props.board[4][6]} />
							<HitCell row={4} col={7}  fireShot={this.fireShot} cell={this.props.board[4][7]} />
							<HitCell row={4} col={8}  fireShot={this.fireShot} cell={this.props.board[4][8]} />
							<HitCell row={4} col={9}  fireShot={this.fireShot} cell={this.props.board[4][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">6</th>
							<HitCell row={5} col={0}  fireShot={this.fireShot} cell={this.props.board[5][0]} />
							<HitCell row={5} col={1}  fireShot={this.fireShot} cell={this.props.board[5][1]} />
							<HitCell row={5} col={2}  fireShot={this.fireShot} cell={this.props.board[5][2]} />
							<HitCell row={5} col={3}  fireShot={this.fireShot} cell={this.props.board[5][3]} />
							<HitCell row={5} col={4}  fireShot={this.fireShot} cell={this.props.board[5][4]} />
							<HitCell row={5} col={5}  fireShot={this.fireShot} cell={this.props.board[5][5]} />
							<HitCell row={5} col={6}  fireShot={this.fireShot} cell={this.props.board[5][6]} />
							<HitCell row={5} col={7}  fireShot={this.fireShot} cell={this.props.board[5][7]} />
							<HitCell row={5} col={8}  fireShot={this.fireShot} cell={this.props.board[5][8]} />
							<HitCell row={5} col={9}  fireShot={this.fireShot} cell={this.props.board[5][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">7</th>
							<HitCell row={6} col={0}  fireShot={this.fireShot} cell={this.props.board[6][0]} />
							<HitCell row={6} col={1}  fireShot={this.fireShot} cell={this.props.board[6][1]} />
							<HitCell row={6} col={2}  fireShot={this.fireShot} cell={this.props.board[6][2]} />
							<HitCell row={6} col={3}  fireShot={this.fireShot} cell={this.props.board[6][3]} />
							<HitCell row={6} col={4}  fireShot={this.fireShot} cell={this.props.board[6][4]} />
							<HitCell row={6} col={5}  fireShot={this.fireShot} cell={this.props.board[6][5]} />
							<HitCell row={6} col={6}  fireShot={this.fireShot} cell={this.props.board[6][6]} />
							<HitCell row={6} col={7}  fireShot={this.fireShot} cell={this.props.board[6][7]} />
							<HitCell row={6} col={8}  fireShot={this.fireShot} cell={this.props.board[6][8]} />
							<HitCell row={6} col={9}  fireShot={this.fireShot} cell={this.props.board[6][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">8</th>
							<HitCell row={7} col={0}  fireShot={this.fireShot} cell={this.props.board[7][0]} />
							<HitCell row={7} col={1}  fireShot={this.fireShot} cell={this.props.board[7][1]} />
							<HitCell row={7} col={2}  fireShot={this.fireShot} cell={this.props.board[7][2]} />
							<HitCell row={7} col={3}  fireShot={this.fireShot} cell={this.props.board[7][3]} />
							<HitCell row={7} col={4}  fireShot={this.fireShot} cell={this.props.board[7][4]} />
							<HitCell row={7} col={5}  fireShot={this.fireShot} cell={this.props.board[7][5]} />
							<HitCell row={7} col={6}  fireShot={this.fireShot} cell={this.props.board[7][6]} />
							<HitCell row={7} col={7}  fireShot={this.fireShot} cell={this.props.board[7][7]} />
							<HitCell row={7} col={8}  fireShot={this.fireShot} cell={this.props.board[7][8]} />
							<HitCell row={7} col={9}  fireShot={this.fireShot} cell={this.props.board[7][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">9</th>
							<HitCell row={8} col={0}  fireShot={this.fireShot} cell={this.props.board[8][0]} />
							<HitCell row={8} col={1}  fireShot={this.fireShot} cell={this.props.board[8][1]} />
							<HitCell row={8} col={2}  fireShot={this.fireShot} cell={this.props.board[8][2]} />
							<HitCell row={8} col={3}  fireShot={this.fireShot} cell={this.props.board[8][3]} />
							<HitCell row={8} col={4}  fireShot={this.fireShot} cell={this.props.board[8][4]} />
							<HitCell row={8} col={5}  fireShot={this.fireShot} cell={this.props.board[8][5]} />
							<HitCell row={8} col={6}  fireShot={this.fireShot} cell={this.props.board[8][6]} />
							<HitCell row={8} col={7}  fireShot={this.fireShot} cell={this.props.board[8][7]} />
							<HitCell row={8} col={8}  fireShot={this.fireShot} cell={this.props.board[8][8]} />
							<HitCell row={8} col={9}  fireShot={this.fireShot} cell={this.props.board[8][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">10</th>
							<HitCell row={9} col={0}  fireShot={this.fireShot} cell={this.props.board[9][0]} />
							<HitCell row={9} col={1}  fireShot={this.fireShot} cell={this.props.board[9][1]} />
							<HitCell row={9} col={2}  fireShot={this.fireShot} cell={this.props.board[9][2]} />
							<HitCell row={9} col={3}  fireShot={this.fireShot} cell={this.props.board[9][3]} />
							<HitCell row={9} col={4}  fireShot={this.fireShot} cell={this.props.board[9][4]} />
							<HitCell row={9} col={5}  fireShot={this.fireShot} cell={this.props.board[9][5]} />
							<HitCell row={9} col={6}  fireShot={this.fireShot} cell={this.props.board[9][6]} />
							<HitCell row={9} col={7}  fireShot={this.fireShot} cell={this.props.board[9][7]} />
							<HitCell row={9} col={8}  fireShot={this.fireShot} cell={this.props.board[9][8]} />
							<HitCell row={9} col={9}  fireShot={this.fireShot} cell={this.props.board[9][9]} />
							</tr>
						</tbody>
				</table>
			</div>

		)
	}
})