var BattleshipVert = React.createClass({
	render:function(){
		return (	
			<table className="battleship" title="Battleship">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="amount">x{this.props.data.battleshipAmount}</td>
					</tr>
				</tbody>
			</table>

		)
	}
})

					

