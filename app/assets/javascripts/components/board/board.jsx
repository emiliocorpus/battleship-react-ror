var Board = React.createClass({
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
							<td ref="a1" className="board-cell">
							</td>
							<td ref="a2" className="board-cell">
							</td>
							<td ref="a3" className="board-cell">
							</td>
							<td ref="a4" className="board-cell">
							</td>
							<td ref="a5" className="board-cell">
							</td>
							<td ref="a6" className="board-cell">
							</td>
							<td ref="a7" className="board-cell">
							</td>
							<td ref="a8" className="board-cell">
							</td>
							<td ref="a9" className="board-cell">
							</td>
							<td ref="a10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">2</th>
							<td ref="b1" className="board-cell">
							</td>
							<td ref="b2" className="board-cell">
							</td>
							<td ref="b3" className="board-cell">
							</td>
							<td ref="b4" className="board-cell">
							</td>
							<td ref="b5" className="board-cell">
							</td>
							<td ref="b6" className="board-cell">
							</td>
							<td ref="b7" className="board-cell">
							</td>
							<td ref="b8" className="board-cell">
							</td>
							<td ref="b9" className="board-cell">
							</td>
							<td ref="b10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">3</th>
							<td ref="c1" className="board-cell">
							</td>
							<td ref="c2" className="board-cell">
							</td>
							<td ref="c3" className="board-cell">
							</td>
							<td ref="c4" className="board-cell">
							</td>
							<td ref="c5" className="board-cell">
							</td>
							<td ref="c6" className="board-cell">
							</td>
							<td ref="c7" className="board-cell">
							</td>
							<td ref="c8" className="board-cell">
							</td>
							<td ref="c9" className="board-cell">
							</td>
							<td ref="c10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">4</th>
							<td ref="d1" className="board-cell">
							</td>
							<td ref="d2" className="board-cell">
							</td>
							<td ref="d3" className="board-cell">
							</td>
							<td ref="d4" className="board-cell">
							</td>
							<td ref="d5" className="board-cell">
							</td>
							<td ref="d6" className="board-cell">
							</td>
							<td ref="d7" className="board-cell">
							</td>
							<td ref="d8" className="board-cell">
							</td>
							<td ref="d9" className="board-cell">
							</td>
							<td ref="d10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">5</th>
							<td ref="e1" className="board-cell">
							</td>
							<td ref="e2" className="board-cell">
							</td>
							<td ref="e3" className="board-cell">
							</td>
							<td ref="e4" className="board-cell">
							</td>
							<td ref="e5" className="board-cell">
							</td>
							<td ref="e6" className="board-cell">
							</td>
							<td ref="e7" className="board-cell">
							</td>
							<td ref="e8" className="board-cell">
							</td>
							<td ref="e9" className="board-cell">
							</td>
							<td ref="e10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">6</th>
							<td ref="f1" className="board-cell">
							</td>
							<td ref="f2" className="board-cell">
							</td>
							<td ref="f3" className="board-cell">
							</td>
							<td ref="f4" className="board-cell">
							</td>
							<td ref="f5" className="board-cell">
							</td>
							<td ref="f6" className="board-cell">
							</td>
							<td ref="f7" className="board-cell">
							</td>
							<td ref="f8" className="board-cell">
							</td>
							<td ref="f9" className="board-cell">
							</td>
							<td ref="f10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">7</th>
							<td ref="g1" className="board-cell">
							</td>
							<td ref="g2" className="board-cell">
							</td>
							<td ref="g3" className="board-cell">
							</td>
							<td ref="g4" className="board-cell">
							</td>
							<td ref="g5" className="board-cell">
							</td>
							<td ref="g6" className="board-cell">
							</td>
							<td ref="g7" className="board-cell">
							</td>
							<td ref="g8" className="board-cell">
							</td>
							<td ref="g9" className="board-cell">
							</td>
							<td ref="g10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">8</th>
							<td ref="h1" className="board-cell">
							</td>
							<td ref="h2" className="board-cell">
							</td>
							<td ref="h3" className="board-cell">
							</td>
							<td ref="h4" className="board-cell">
							</td>
							<td ref="h5" className="board-cell">
							</td>
							<td ref="h6" className="board-cell">
							</td>
							<td ref="h7" className="board-cell">
							</td>
							<td ref="h8" className="board-cell">
							</td>
							<td ref="h9" className="board-cell">
							</td>
							<td ref="h10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">9</th>
							<td ref="i1" className="board-cell">
							</td>
							<td ref="i2" className="board-cell">
							</td>
							<td ref="i3" className="board-cell">
							</td>
							<td ref="i4" className="board-cell">
							</td>
							<td ref="i5" className="board-cell">
							</td>
							<td ref="i6" className="board-cell">
							</td>
							<td ref="i7" className="board-cell">
							</td>
							<td ref="i8" className="board-cell">
							</td>
							<td ref="i9" className="board-cell">
							</td>
							<td ref="i10" className="board-cell">
							</td>
						</tr>
	
						<tr>
							<th colSpan="1">10</th>
							<td ref="j1" className="board-cell">
							</td>
							<td ref="j2" className="board-cell">
							</td>
							<td ref="j3" className="board-cell">
							</td>
							<td ref="j4" className="board-cell">
							</td>
							<td ref="j5" className="board-cell">
							</td>
							<td ref="j6" className="board-cell">
							</td>
							<td ref="j7" className="board-cell">
							</td>
							<td ref="j8" className="board-cell">
							</td>
							<td ref="j9" className="board-cell">
							</td>
							<td ref="j10" className="board-cell">
							</td>
							</tr>
						</tbody>
				</table>
			</div>

		)
	}
})