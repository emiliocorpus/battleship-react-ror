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
						<td className="amount">x{this.props.amountLeft}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})