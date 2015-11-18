var BattleshipHz = React.createClass({
	render:function(){
		return (
			<table id="battleship" title="Battleship">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="amount">x1</td>
					</tr>
				</tbody>
			</table>
		)
	}
})