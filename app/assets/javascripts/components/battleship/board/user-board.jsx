var UserBoard = React.createClass({
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
							<UserCell row={0} col={0} cell={this.props.board[0][0]} />
							<UserCell row={0} col={1} cell={this.props.board[0][1]} />
							<UserCell row={0} col={2} cell={this.props.board[0][2]} />
							<UserCell row={0} col={3} cell={this.props.board[0][3]} />
							<UserCell row={0} col={4} cell={this.props.board[0][4]} />
							<UserCell row={0} col={5} cell={this.props.board[0][5]} />
							<UserCell row={0} col={6} cell={this.props.board[0][6]} />
							<UserCell row={0} col={7} cell={this.props.board[0][7]} />
							<UserCell row={0} col={8} cell={this.props.board[0][8]} />
							<UserCell row={0} col={9} cell={this.props.board[0][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">2</th>
							<UserCell row={1} col={0} cell={this.props.board[1][0]} />
							<UserCell row={1} col={1} cell={this.props.board[1][1]} />
							<UserCell row={1} col={2} cell={this.props.board[1][2]} />
							<UserCell row={1} col={3} cell={this.props.board[1][3]} />
							<UserCell row={1} col={4} cell={this.props.board[1][4]} />
							<UserCell row={1} col={5} cell={this.props.board[1][5]} />
							<UserCell row={1} col={6} cell={this.props.board[1][6]} />
							<UserCell row={1} col={7} cell={this.props.board[1][7]} />
							<UserCell row={1} col={8} cell={this.props.board[1][8]} />
							<UserCell row={1} col={9} cell={this.props.board[1][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">3</th>
							<UserCell row={2} col={0} cell={this.props.board[2][0]} />
							<UserCell row={2} col={1} cell={this.props.board[2][1]} />
							<UserCell row={2} col={2} cell={this.props.board[2][2]} />
							<UserCell row={2} col={3} cell={this.props.board[2][3]} />
							<UserCell row={2} col={4} cell={this.props.board[2][4]} />
							<UserCell row={2} col={5} cell={this.props.board[2][5]} />
							<UserCell row={2} col={6} cell={this.props.board[2][6]} />
							<UserCell row={2} col={7} cell={this.props.board[2][7]} />
							<UserCell row={2} col={8} cell={this.props.board[2][8]} />
							<UserCell row={2} col={9} cell={this.props.board[2][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">4</th>
							<UserCell row={3} col={0} cell={this.props.board[3][0]} />
							<UserCell row={3} col={1} cell={this.props.board[3][1]} />
							<UserCell row={3} col={2} cell={this.props.board[3][2]} />
							<UserCell row={3} col={3} cell={this.props.board[3][3]} />
							<UserCell row={3} col={4} cell={this.props.board[3][4]} />
							<UserCell row={3} col={5} cell={this.props.board[3][5]} />
							<UserCell row={3} col={6} cell={this.props.board[3][6]} />
							<UserCell row={3} col={7} cell={this.props.board[3][7]} />
							<UserCell row={3} col={8} cell={this.props.board[3][8]} />
							<UserCell row={3} col={9} cell={this.props.board[3][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">5</th>
							<UserCell row={4} col={0}  cell={this.props.board[4][0]} />
							<UserCell row={4} col={1}  cell={this.props.board[4][1]} />
							<UserCell row={4} col={2}  cell={this.props.board[4][2]} />
							<UserCell row={4} col={3}  cell={this.props.board[4][3]} />
							<UserCell row={4} col={4}  cell={this.props.board[4][4]} />
							<UserCell row={4} col={5}  cell={this.props.board[4][5]} />
							<UserCell row={4} col={6}  cell={this.props.board[4][6]} />
							<UserCell row={4} col={7}  cell={this.props.board[4][7]} />
							<UserCell row={4} col={8}  cell={this.props.board[4][8]} />
							<UserCell row={4} col={9}  cell={this.props.board[4][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">6</th>
							<UserCell row={5} col={0}  cell={this.props.board[5][0]} />
							<UserCell row={5} col={1}  cell={this.props.board[5][1]} />
							<UserCell row={5} col={2}  cell={this.props.board[5][2]} />
							<UserCell row={5} col={3}  cell={this.props.board[5][3]} />
							<UserCell row={5} col={4}  cell={this.props.board[5][4]} />
							<UserCell row={5} col={5}  cell={this.props.board[5][5]} />
							<UserCell row={5} col={6}  cell={this.props.board[5][6]} />
							<UserCell row={5} col={7}  cell={this.props.board[5][7]} />
							<UserCell row={5} col={8}  cell={this.props.board[5][8]} />
							<UserCell row={5} col={9}  cell={this.props.board[5][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">7</th>
							<UserCell row={6} col={0}  cell={this.props.board[6][0]} />
							<UserCell row={6} col={1}  cell={this.props.board[6][1]} />
							<UserCell row={6} col={2}  cell={this.props.board[6][2]} />
							<UserCell row={6} col={3}  cell={this.props.board[6][3]} />
							<UserCell row={6} col={4}  cell={this.props.board[6][4]} />
							<UserCell row={6} col={5}  cell={this.props.board[6][5]} />
							<UserCell row={6} col={6}  cell={this.props.board[6][6]} />
							<UserCell row={6} col={7}  cell={this.props.board[6][7]} />
							<UserCell row={6} col={8}  cell={this.props.board[6][8]} />
							<UserCell row={6} col={9}  cell={this.props.board[6][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">8</th>
							<UserCell row={7} col={0}  cell={this.props.board[7][0]} />
							<UserCell row={7} col={1}  cell={this.props.board[7][1]} />
							<UserCell row={7} col={2}  cell={this.props.board[7][2]} />
							<UserCell row={7} col={3}  cell={this.props.board[7][3]} />
							<UserCell row={7} col={4}  cell={this.props.board[7][4]} />
							<UserCell row={7} col={5}  cell={this.props.board[7][5]} />
							<UserCell row={7} col={6}  cell={this.props.board[7][6]} />
							<UserCell row={7} col={7}  cell={this.props.board[7][7]} />
							<UserCell row={7} col={8}  cell={this.props.board[7][8]} />
							<UserCell row={7} col={9}  cell={this.props.board[7][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">9</th>
							<UserCell row={8} col={0}  cell={this.props.board[8][0]} />
							<UserCell row={8} col={1}  cell={this.props.board[8][1]} />
							<UserCell row={8} col={2}  cell={this.props.board[8][2]} />
							<UserCell row={8} col={3}  cell={this.props.board[8][3]} />
							<UserCell row={8} col={4}  cell={this.props.board[8][4]} />
							<UserCell row={8} col={5}  cell={this.props.board[8][5]} />
							<UserCell row={8} col={6}  cell={this.props.board[8][6]} />
							<UserCell row={8} col={7}  cell={this.props.board[8][7]} />
							<UserCell row={8} col={8}  cell={this.props.board[8][8]} />
							<UserCell row={8} col={9}  cell={this.props.board[8][9]} />
						</tr>
	
						<tr>
							<th colSpan="1">10</th>
							<UserCell row={9} col={0}  cell={this.props.board[9][0]} />
							<UserCell row={9} col={1}  cell={this.props.board[9][1]} />
							<UserCell row={9} col={2}  cell={this.props.board[9][2]} />
							<UserCell row={9} col={3}  cell={this.props.board[9][3]} />
							<UserCell row={9} col={4}  cell={this.props.board[9][4]} />
							<UserCell row={9} col={5}  cell={this.props.board[9][5]} />
							<UserCell row={9} col={6}  cell={this.props.board[9][6]} />
							<UserCell row={9} col={7}  cell={this.props.board[9][7]} />
							<UserCell row={9} col={8}  cell={this.props.board[9][8]} />
							<UserCell row={9} col={9}  cell={this.props.board[9][9]} />
							</tr>
						</tbody>
				</table>
			</div>

		)
	}
})