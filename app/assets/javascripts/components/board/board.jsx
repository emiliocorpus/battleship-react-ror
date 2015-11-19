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
							<GridCell row="a" col={0} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[0]} />
							<GridCell row="a" col={1} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[1]} />
							<GridCell row="a" col={2} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[2]} />
							<GridCell row="a" col={3} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[3]} />
							<GridCell row="a" col={4} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[4]} />
							<GridCell row="a" col={5} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[5]} />
							<GridCell row="a" col={6} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[6]} />
							<GridCell row="a" col={7} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[7]} />
							<GridCell row="a" col={8} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[8]} />
							<GridCell row="a" col={9} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.a[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">2</th>
							<GridCell row="b" col={0} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[0]} />
							<GridCell row="b" col={1} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[1]} />
							<GridCell row="b" col={2} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[2]} />
							<GridCell row="b" col={3} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[3]} />
							<GridCell row="b" col={4} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[4]} />
							<GridCell row="b" col={5} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[5]} />
							<GridCell row="b" col={6} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[6]} />
							<GridCell row="b" col={7} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[7]} />
							<GridCell row="b" col={8} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[8]} />
							<GridCell row="b" col={9} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.b[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">3</th>
							<GridCell row="c" col={0} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[0]} />
							<GridCell row="c" col={1} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[1]} />
							<GridCell row="c" col={2} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[2]} />
							<GridCell row="c" col={3} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[3]} />
							<GridCell row="c" col={4} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[4]} />
							<GridCell row="c" col={5} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[5]} />
							<GridCell row="c" col={6} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[6]} />
							<GridCell row="c" col={7} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[7]} />
							<GridCell row="c" col={8} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[8]} />
							<GridCell row="c" col={9} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.c[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">4</th>
							<GridCell row="d" col={0} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[0]} />
							<GridCell row="d" col={1} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[1]} />
							<GridCell row="d" col={2} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[2]} />
							<GridCell row="d" col={3} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[3]} />
							<GridCell row="d" col={4} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[4]} />
							<GridCell row="d" col={5} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[5]} />
							<GridCell row="d" col={6} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[6]} />
							<GridCell row="d" col={7} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[7]} />
							<GridCell row="d" col={8} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[8]} />
							<GridCell row="d" col={9} placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.d[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">5</th>
							<GridCell row="e" col={0}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[0]} />
							<GridCell row="e" col={1}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[1]} />
							<GridCell row="e" col={2}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[2]} />
							<GridCell row="e" col={3}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[3]} />
							<GridCell row="e" col={4}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[4]} />
							<GridCell row="e" col={5}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[5]} />
							<GridCell row="e" col={6}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[6]} />
							<GridCell row="e" col={7}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[7]} />
							<GridCell row="e" col={8}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[8]} />
							<GridCell row="e" col={9}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.e[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">6</th>
							<GridCell row="f" col={0}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[0]} />
							<GridCell row="f" col={1}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[1]} />
							<GridCell row="f" col={2}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[2]} />
							<GridCell row="f" col={3}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[3]} />
							<GridCell row="f" col={4}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[4]} />
							<GridCell row="f" col={5}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[5]} />
							<GridCell row="f" col={6}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[6]} />
							<GridCell row="f" col={7}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[7]} />
							<GridCell row="f" col={8}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[8]} />
							<GridCell row="f" col={9}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.f[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">7</th>
							<GridCell row="g" col={0}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[0]} />
							<GridCell row="g" col={1}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[1]} />
							<GridCell row="g" col={2}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[2]} />
							<GridCell row="g" col={3}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[3]} />
							<GridCell row="g" col={4}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[4]} />
							<GridCell row="g" col={5}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[5]} />
							<GridCell row="g" col={6}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[6]} />
							<GridCell row="g" col={7}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[7]} />
							<GridCell row="g" col={8}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[8]} />
							<GridCell row="g" col={9}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.g[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">8</th>
							<GridCell row="h" col={0}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[0]} />
							<GridCell row="h" col={1}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[1]} />
							<GridCell row="h" col={2}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[2]} />
							<GridCell row="h" col={3}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[3]} />
							<GridCell row="h" col={4}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[4]} />
							<GridCell row="h" col={5}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[5]} />
							<GridCell row="h" col={6}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[6]} />
							<GridCell row="h" col={7}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[7]} />
							<GridCell row="h" col={8}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[8]} />
							<GridCell row="h" col={9}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.h[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">9</th>
							<GridCell row="i" col={0}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[0]} />
							<GridCell row="i" col={1}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[1]} />
							<GridCell row="i" col={2}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[2]} />
							<GridCell row="i" col={3}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[3]} />
							<GridCell row="i" col={4}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[4]} />
							<GridCell row="i" col={5}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[5]} />
							<GridCell row="i" col={6}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[6]} />
							<GridCell row="i" col={7}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[7]} />
							<GridCell row="i" col={8}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[8]} />
							<GridCell row="i" col={9}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.i[9]} />
						</tr>
	
						<tr>
							<th colSpan="1">10</th>
							<GridCell row="j" col={0}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[0]} />
							<GridCell row="j" col={1}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[1]} />
							<GridCell row="j" col={2}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[2]} />
							<GridCell row="j" col={3}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[3]} />
							<GridCell row="j" col={4}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[4]} />
							<GridCell row="j" col={5}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[5]} />
							<GridCell row="j" col={6}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[6]} />
							<GridCell row="j" col={7}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[7]} />
							<GridCell row="j" col={8}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[8]} />
							<GridCell row="j" col={9}  placePiece={this.placePiece} data={this.props.data}cellStatus={this.props.data.board.grid.j[9]} />
							</tr>
						</tbody>
				</table>
			</div>

		)
	}
})