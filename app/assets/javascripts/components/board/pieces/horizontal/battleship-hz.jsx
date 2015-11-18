var BattleshipHz = React.createClass({
	render:function(){
		return (
			<table className="battleship" title="Battleship">
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