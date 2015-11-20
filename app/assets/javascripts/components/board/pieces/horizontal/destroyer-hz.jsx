var DestroyerHz = React.createClass({
	render:function(){
		return(
			<table className="destroyer" title="Destroyer">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="amount">x{this.props.data.userPieces.destroyer.piecesLeft}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})